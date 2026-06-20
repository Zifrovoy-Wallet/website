import { ArrowRight, UserPlus, Wallet, Rocket, Sparkles } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";

export function HowToStartSection() {
  const { t } = useI18n();
  const theme = useTheme();

  const steps = [
    {
      n: "01",
      title: t.how.s1Title,
      body: t.how.s1Body,
      Icon: UserPlus,
      variant: "dark" as const,
      screen: "/app-wallet.png",
    },
    {
      n: "02",
      title: t.how.s2Title,
      body: t.how.s2Body,
      Icon: Wallet,
      variant: "lavender" as const,
      screen: "/app-receive.png",
    },
    {
      n: "03",
      title: t.how.s3Title,
      body: t.how.s3Body,
      Icon: Rocket,
      variant: "dark" as const,
      screen: "/app-actions.png",
    },
  ];

  const promises = [t.how.promise1, t.how.promise2, t.how.promise3];

  return (
    <section id="how" className="bg-page px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <p className="text-black/60 text-sm mb-3">{t.how.eyebrow}</p>
            <h2
              className="text-black text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              {t.how.heading1}
              <br />
              {t.how.heading2}
              <br />
              {t.how.heading3}
            </h2>
          </div>
          <div className="md:pl-8">
            <p className="text-black/70 text-xl leading-relaxed mb-6 max-w-md">
              {t.how.lead}
            </p>
            <a
              href="#cta"
              className="bg-dot-pattern inline-flex items-center gap-3 bg-[var(--cta-bg)] text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-[var(--cta-bg-hover)] transition-colors duration-200"
            >
              {t.how.cta}
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </a>
          </div>
        </Reveal>

        {/* Step cards - alternating dark / lavender, phone mockups inside */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {steps.map(({ n, title, body, Icon, variant, screen }, idx) => {
            const isLavender = variant === "lavender";
            const cardBg = isLavender ? theme.tint : theme.dark;
            const titleColor = isLavender ? "text-black" : "text-white";
            const bodyColor = isLavender ? "text-black/60" : "text-white/60";
            const labelColor = isLavender ? "text-black/50" : "text-white/50";
            const iconBg = isLavender
              ? "bg-[var(--cta-bg)] text-white"
              : "bg-white/10 text-white";
            const bloom = isLavender
              ? "radial-gradient(50% 40% at 50% 35%, rgba(255,255,255,0.55), transparent 75%)"
              : `radial-gradient(50% 40% at 50% 35%, rgba(${theme.bloomOnDarkRgba},0.22), transparent 75%)`;

            return (
              <Reveal
                key={n}
                delay={idx * 140}
                className={`group rounded-2xl p-8 pb-9 flex flex-col relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 ${
                  isLavender ? "" : "bg-dot-pattern"
                }`}
                style={{ backgroundColor: cardBg }}
              >
                {/* Header row */}
                <div className="flex items-start justify-between relative z-10">
                  <span
                    className={`text-xs font-mono ${labelColor}`}
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {t.how.stepLabel} {n}
                  </span>
                  <span
                    className={`w-11 h-11 rounded-full flex items-center justify-center ${iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.6} />
                  </span>
                </div>

                {/* Phone mockup */}
                <div className="relative my-8 flex-1 flex items-center justify-center">
                  <div
                    className="absolute inset-x-0 top-2 bottom-0 pointer-events-none"
                    style={{ background: bloom }}
                  />
                  <div className="relative w-[64%] max-w-[230px] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-2 group-hover:rotate-[-1deg]">
                    <div
                      className="rounded-[2.1rem] p-[6px] bg-[#0a0613]"
                      style={{
                        boxShadow:
                          "0 28px 60px -22px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="rounded-[1.7rem] overflow-hidden bg-black">
                        <img
                          src={screen}
                          alt={title}
                          className="w-full block"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer text */}
                <div className="relative z-10">
                  <h3
                    className={`${titleColor} text-2xl font-medium leading-snug mb-3`}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {title}
                  </h3>
                  <p
                    className={`${bodyColor} text-base leading-relaxed max-w-[36ch]`}
                  >
                    {body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Promise strip */}
        <Reveal
          className="rounded-2xl p-6 md:px-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
          style={{ backgroundColor: theme.tint }}
        >
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-10 h-10 rounded-full bg-[var(--cta-bg)] text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" strokeWidth={1.6} />
            </span>
            <span
              className="text-black font-medium"
              style={{ letterSpacing: "-0.01em" }}
            >
              {t.how.promiseTitle}
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-black/10" />
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-black/70 text-sm">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
