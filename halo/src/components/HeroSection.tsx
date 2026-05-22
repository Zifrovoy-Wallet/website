import { ArrowRight } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";

// Supported EVM networks shown in the hero marquee — distinct font treatments
// match the Halo brand-strip aesthetic.
const networks: { name: string; style: React.CSSProperties }[] = [
  {
    name: "Ethereum",
    style: {
      fontFamily: "Georgia, serif",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      fontSize: "15px",
    },
  },
  {
    name: "POLYGON",
    style: {
      fontFamily: "Arial, sans-serif",
      fontWeight: 900,
      letterSpacing: "0.08em",
      fontSize: "13px",
      textTransform: "uppercase",
    },
  },
  {
    name: "Arbitrum",
    style: {
      fontFamily: "'Trebuchet MS', sans-serif",
      fontWeight: 600,
      letterSpacing: "0.01em",
      fontSize: "15px",
      fontStyle: "italic",
    },
  },
  {
    name: "OPTIMISM",
    style: {
      fontFamily: "'Courier New', monospace",
      fontWeight: 700,
      letterSpacing: "0.12em",
      fontSize: "13px",
      textTransform: "uppercase",
    },
  },
  {
    name: "Base",
    style: {
      fontFamily: "Palatino, 'Book Antiqua', serif",
      fontWeight: 400,
      letterSpacing: "-0.01em",
      fontSize: "16px",
    },
  },
  {
    name: "Avalanche",
    style: {
      fontFamily: "Impact, 'Arial Narrow', sans-serif",
      fontWeight: 400,
      letterSpacing: "0.04em",
      fontSize: "14px",
    },
  },
  {
    name: "Hyperliquid",
    style: {
      fontFamily: "Verdana, sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
      fontSize: "13px",
    },
  },
];

export function HeroSection() {
  const { t } = useI18n();
  const theme = useTheme();
  return (
    <section className="flex-1 px-6 pt-20 pb-6 flex items-end">
      <div
        className="group relative w-full rounded-2xl overflow-hidden"
        style={{ height: "calc(100vh - 96px)" }}
      >
        <video
          className="object-cover absolute inset-0 w-full h-full transition-transform duration-[1.8s] ease-out group-hover:scale-[1.02]"
          autoPlay
          muted
          loop
          playsInline
          src={theme.assets.hero}
        />
        <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
          <h1
            className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
            style={{ letterSpacing: "-0.04em" }}
          >
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>
          <p
            className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed"
            style={{
              fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
            }}
          >
            {t.hero.description}
          </p>
          <a
            href="#cta"
            className="bg-dot-pattern inline-flex items-center gap-3 bg-[var(--cta-bg)] text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-[var(--cta-bg-hover)] transition-colors duration-200"
          >
            {t.hero.cta}
            <span className="bg-white rounded-full p-2 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-black" />
            </span>
          </a>

          {/* Supported networks marquee */}
          <div className="mt-24 w-full max-w-md overflow-hidden">
            <style>{`
              @keyframes marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                display: flex;
                width: max-content;
                animation: marquee 22s linear infinite;
              }
            `}</style>
            <div className="marquee-track">
              {[...networks, ...networks].map((n, i) => (
                <span
                  key={i}
                  className="mx-7 shrink-0 text-black/60 whitespace-nowrap"
                  style={n.style}
                >
                  {n.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
