import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";

/* A looping log of agent steps. Kept as terminal-style shorthand (tickers,
   numbers, symbols) so it reads as real system output in every locale -
   only the surrounding labels are translated. Each tag maps to a dot color. */
type Tag = "chat" | "ai" | "auto" | "scan" | "found" | "watch" | "pnl" | "sync";

const SCRIPT: { tag: Tag; text: string }[] = [
  { tag: "chat", text: 'you · "grow my idle USDC safely"' },
  { tag: "ai", text: "ai · matched 3 low-risk strategies" },
  { tag: "auto", text: "automation · DCA ETH, weekly ✓" },
  { tag: "scan", text: "analyzing 100+ chains 24/7" },
  { tag: "found", text: "signal · top trader +18.4% / 7d" },
  { tag: "watch", text: "alert · BTC volatility rising" },
  { tag: "pnl", text: "blended APY 7.4% · risk low" },
  { tag: "sync", text: "5 automations live · 0 manual clicks" },
];

const TAG_COLOR: Record<Tag, string> = {
  chat: "#A5B4FC", // indigo - user
  ai: "#C7B5F0", // violet - assistant
  auto: "#6EE7B7", // emerald
  scan: "#7DD3FC", // sky
  found: "#F0ABFC", // fuchsia
  watch: "#FCD34D", // amber
  pnl: "#6EE7B7", // emerald
  sync: "#93C5FD", // blue
};

const MAX_VISIBLE = 5;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Sparkline geometry (shared by the path, the area fill and the sweep).
const SPARK =
  "M0,64 L28,58 L56,61 L84,46 L112,50 L140,37 L168,41 L196,26 L224,31 L252,16 L280,9";

export function AiEngineConsole() {
  const { t } = useI18n();
  const theme = useTheme();

  const [history, setHistory] = useState<{ tag: Tag; text: string }[]>([]);
  const [current, setCurrent] = useState<{ tag: Tag; text: string }>(SCRIPT[0]);
  const [typed, setTyped] = useState("");
  const [pnl, setPnl] = useState(4.27);

  const iRef = useRef(0);
  const cRef = useRef(0);

  // Typing loop - type the current line char-by-char, commit it to history,
  // then advance to the next script entry. Loops forever.
  useEffect(() => {
    if (prefersReducedMotion()) {
      setHistory(SCRIPT.slice(-MAX_VISIBLE));
      setTyped("");
      return;
    }
    let timer: number;
    const tick = () => {
      const entry = SCRIPT[iRef.current % SCRIPT.length];
      if (cRef.current <= entry.text.length) {
        setCurrent(entry);
        setTyped(entry.text.slice(0, cRef.current));
        cRef.current += 1;
        timer = window.setTimeout(tick, 30 + Math.random() * 45);
      } else {
        setHistory((prev) => [...prev, entry].slice(-MAX_VISIBLE));
        setTyped("");
        cRef.current = 0;
        iRef.current += 1;
        timer = window.setTimeout(tick, 850);
      }
    };
    timer = window.setTimeout(tick, 500);
    return () => window.clearTimeout(timer);
  }, []);

  // Gently drifting "live" PnL number.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setPnl((p) => {
        const next = p + (Math.random() * 0.16 - 0.05);
        return next > 6.2 || next < 3.4 ? 4.27 : Math.round(next * 100) / 100;
      });
    }, 1100);
    return () => window.clearInterval(id);
  }, []);

  const nodes = [t.smart.nodeScan, t.smart.nodeEngine, t.smart.nodeExecute];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_1fr] gap-px relative z-10">
      {/* ── Terminal (left) ── */}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
          <span
            className="ml-3 text-white/40 text-xs font-mono"
            style={{ letterSpacing: "0.04em" }}
          >
            zifrovoy-ai-engine
          </span>
          <span className="ml-auto inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span
              className="text-white/50 text-[10px] uppercase"
              style={{ letterSpacing: "0.18em" }}
            >
              {t.smart.liveLabel}
            </span>
          </span>
        </div>

        <div className="font-mono text-[13px] md:text-sm leading-relaxed min-h-[208px]">
          {history.map((line, idx) => (
            <Line key={`${line.tag}-${idx}`} tag={line.tag} text={line.text} />
          ))}
          <div className="flex items-start gap-2.5">
            <span
              className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: TAG_COLOR[current.tag] }}
            />
            <span className="text-white/85">
              <span className="text-white/30">$ </span>
              {typed}
              <span className="zf-cursor text-white/80">▍</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Monitoring (right) ── */}
      <div
        className="p-6 md:p-8 flex flex-col justify-between gap-6"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        {/* PnL + sparkline */}
        <div>
          <div className="flex items-end justify-between mb-3">
            <span
              className="text-white/45 text-[11px] uppercase"
              style={{ letterSpacing: "0.16em" }}
            >
              {t.smart.pnlLabel}
            </span>
            <span className="text-emerald-300 text-2xl font-medium tabular-nums">
              +{pnl.toFixed(2)}%
            </span>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <svg
              viewBox="0 0 280 72"
              className="w-full h-[72px]"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="zfSparkFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={theme.accent} stopOpacity="0.35" />
                  <stop offset="100%" stopColor={theme.accent} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d={`${SPARK} L280,72 L0,72 Z`}
                fill="url(#zfSparkFill)"
              />
              {/* base line - draws in once on reveal */}
              <path
                d={SPARK}
                fill="none"
                stroke={theme.accent}
                strokeOpacity="0.55"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="zf-draw"
                style={{ "--len": 297, strokeDasharray: 297 } as CSSProperties}
              />
              {/* light pulse marching up the line */}
              <path
                d={SPARK}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="zf-flow"
                style={{ strokeDasharray: "26 271" }}
              />
              {/* live data point climbing the trend */}
              <circle r="4" fill={theme.accent}>
                <animateMotion dur="2.2s" repeatCount="indefinite" path={SPARK} />
              </circle>
              <circle cx="280" cy="9" r="3.5" fill={theme.accent}>
                <animate
                  attributeName="r"
                  values="3.5;5;3.5"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
            {/* moving scan line */}
            <span
              className="zf-sweep pointer-events-none absolute top-0 bottom-0 w-px"
              style={{ background: "rgba(255,255,255,0.35)" }}
            />
          </div>
        </div>

        {/* Equalizer - the "monitoring" rhythm */}
        <div className="flex items-end gap-1 h-8">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((b) => (
            <span
              key={b}
              className="zf-bar flex-1 rounded-sm"
              style={{
                height: "100%",
                background: "rgba(255,255,255,0.22)",
                animationDelay: `${b * 0.12}s`,
              }}
            />
          ))}
        </div>

        {/* Route flow: Markets → AI engine → Execute */}
        <div className="relative flex items-center justify-between">
          <span
            className="zf-route-pulse pointer-events-none absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
            style={{ background: theme.accent, boxShadow: `0 0 8px ${theme.accent}` }}
          />
          {nodes.map((label, idx) => (
            <span key={label} className="contents">
              <span
                className="relative z-10 px-2.5 py-1 rounded-md text-[11px] text-white/75 whitespace-nowrap"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                {label}
              </span>
              {idx < nodes.length - 1 && (
                <span className="flex-1 h-px mx-1.5" style={{ background: "rgba(255,255,255,0.14)" }} />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Line({ tag, text }: { tag: Tag; text: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span
        className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: TAG_COLOR[tag] }}
      />
      <span className="text-white/55">
        <span className="text-white/25">$ </span>
        {text}
      </span>
    </div>
  );
}
