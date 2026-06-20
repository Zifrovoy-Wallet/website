import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";

const cardLift =
  "transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5";

export function PerpsSection() {
  const { t } = useI18n();
  const theme = useTheme();
  return (
    <section id="perps" className="bg-page px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        {/* Heading row */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-end">
          <div>
            <p className="text-black/60 text-sm mb-3">{t.perps.eyebrow}</p>
            <h2
              className="text-black text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              {t.perps.heading1}
              <br />
              {t.perps.heading2}
            </h2>
          </div>
          <p className="text-black/70 text-xl md:text-2xl leading-relaxed">
            {t.perps.lead}
          </p>
        </Reveal>

        {/* Featured video card */}
        <Reveal className="group relative rounded-3xl overflow-hidden min-h-[640px] flex items-end mb-4">
          <video
            className="object-cover absolute inset-0 w-full h-full transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            src={theme.assets.perps}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(180deg, transparent 35%, rgba(${theme.tintRgb},0.4) 65%, rgba(${theme.darkAccentRgb},0.78) 100%)`,
            }}
          />
          <div className="relative z-10 w-full p-10 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span
                  className="text-black/70 text-xs uppercase"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {t.perps.liveBadge}
                </span>
              </div>
              <h3
                className="text-black text-4xl md:text-5xl font-medium leading-tight mb-5"
                style={{ letterSpacing: "-0.03em" }}
              >
                {t.perps.featTitle1}
                <br />
                {t.perps.featTitle2}
              </h3>
              <p className="text-black/70 text-base md:text-lg max-w-md leading-relaxed">
                {t.perps.featBody}
              </p>
            </div>
            <a
              href="#cta"
              className="bg-dot-pattern inline-flex items-center gap-3 bg-[var(--cta-bg)] text-white text-base md:text-lg font-medium pl-7 pr-2 py-2 rounded-full hover:bg-[var(--cta-bg-hover)] transition-colors duration-200 shrink-0"
            >
              {t.perps.ctaConnect}
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-black" />
              </span>
            </a>
          </div>
        </Reveal>

        {/* Feature row - 2 dark, 1 lavender (matches the section palette) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal
            delay={0}
            className={`bg-dot-pattern group rounded-2xl p-7 min-h-[200px] flex flex-col justify-between ${cardLift}`}
            style={{ backgroundColor: theme.dark }}
          >
            <Zap
              className="w-7 h-7 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
              strokeWidth={1.6}
            />
            <div>
              <h4 className="text-white text-xl font-medium leading-snug mb-2">
                {t.perps.f1Title}
              </h4>
              <p className="text-white/60 text-sm">{t.perps.f1Body}</p>
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className={`bg-dot-pattern group rounded-2xl p-7 min-h-[200px] flex flex-col justify-between ${cardLift}`}
            style={{ backgroundColor: theme.dark }}
          >
            <TrendingUp
              className="w-7 h-7 text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.6}
            />
            <div>
              <h4 className="text-white text-xl font-medium leading-snug mb-2">
                {t.perps.f2Title}
              </h4>
              <p className="text-white/60 text-sm">{t.perps.f2Body}</p>
            </div>
          </Reveal>
          <Reveal
            delay={240}
            className={`group rounded-2xl p-7 min-h-[200px] flex flex-col justify-between ${cardLift}`}
            style={{ backgroundColor: theme.tint }}
          >
            <Users
              className="w-7 h-7 text-black transition-transform duration-500 group-hover:scale-110"
              strokeWidth={1.6}
            />
            <div>
              <h4
                className="text-black text-xl font-medium leading-snug mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t.perps.f3Title}
              </h4>
              <p className="text-black/60 text-sm">{t.perps.f3Body}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
