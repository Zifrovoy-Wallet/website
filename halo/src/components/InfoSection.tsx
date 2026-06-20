import { ArrowRight } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";

const cardLift =
  "transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5";

export function InfoSection() {
  const { t } = useI18n();
  const theme = useTheme();
  return (
    <section id="why" className="bg-page px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1 - headline + lead */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <p className="text-black/60 text-sm mb-3">{t.info.eyebrow}</p>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              {t.info.heading}
            </h2>
            <a
              href="#how"
              className="bg-dot-pattern inline-flex items-center gap-3 bg-[var(--cta-bg)] text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-[var(--cta-bg-hover)] transition-colors duration-200"
            >
              {t.info.cta}
              <span className="bg-white rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-black" />
              </span>
            </a>
          </div>
          <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
            {t.info.lead}
          </p>
        </Reveal>

        {/* Row 2 - feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 - image background, spans 2 on lg */}
          <Reveal
            delay={0}
            className={`group rounded-2xl p-7 min-h-80 flex flex-col justify-between sm:col-span-2 lg:col-span-2 overflow-hidden relative ${cardLift}`}
          >
            <div
              className="absolute inset-0 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
              style={{
                backgroundImage: `url('${theme.assets.infoCard}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <h3
              className="text-black text-2xl font-medium leading-snug relative z-10"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t.info.card1Title1}
              <br />
              {t.info.card1Title2}
            </h3>
            <p className="text-black/70 text-base max-w-xs relative z-10">
              {t.info.card1Body}
            </p>
          </Reveal>

          {/* Card 2 - dark */}
          <Reveal
            delay={120}
            className={`bg-dot-pattern rounded-2xl p-7 min-h-80 flex flex-col justify-between ${cardLift}`}
            style={{ backgroundColor: theme.dark }}
          >
            <h3 className="text-white text-2xl font-medium leading-snug">
              {t.info.card2Title1}
              <br />
              {t.info.card2Title2}
            </h3>
            <p className="text-white/60 text-base">{t.info.card2Body}</p>
          </Reveal>

          {/* Card 3 - dark */}
          <Reveal
            delay={220}
            className={`bg-dot-pattern rounded-2xl p-7 min-h-80 flex flex-col justify-between ${cardLift}`}
            style={{ backgroundColor: theme.dark }}
          >
            <h3 className="text-white text-2xl font-medium leading-snug">
              {t.info.card3Title1}
              <br />
              {t.info.card3Title2}
            </h3>
            <p className="text-white/60 text-base">{t.info.card3Body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
