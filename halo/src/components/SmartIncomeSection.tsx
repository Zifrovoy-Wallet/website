import { Sparkles, Users, TrendingUp } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";

const cardLift =
  "transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5";

export function SmartIncomeSection() {
  const { t } = useI18n();
  const theme = useTheme();

  return (
    <section id="smart" className="bg-page px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        {/* Heading row */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-end">
          <div>
            <p className="text-black/60 text-sm mb-3">{t.smart.eyebrow}</p>
            <h2
              className="text-black text-5xl md:text-6xl font-medium leading-none"
              style={{ letterSpacing: "-0.04em" }}
            >
              {t.smart.heading1}
              <br />
              {t.smart.heading2}
            </h2>
          </div>
          <p className="text-black/70 text-xl md:text-2xl leading-relaxed">
            {t.smart.lead}
          </p>
        </Reveal>

        {/* Three focus pillars — dark, lavender, dark */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal
            delay={0}
            className={`bg-dot-pattern group rounded-2xl p-7 min-h-[240px] flex flex-col justify-between ${cardLift}`}
            style={{ backgroundColor: theme.dark }}
          >
            <div className="flex items-center justify-between">
              <Sparkles
                className="w-7 h-7 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
                strokeWidth={1.6}
              />
              <span
                className="text-white/50 text-xs uppercase"
                style={{ letterSpacing: "0.14em" }}
              >
                {t.smart.tag1}
              </span>
            </div>
            <div>
              <h4 className="text-white text-xl font-medium leading-snug mb-2">
                {t.smart.f1Title}
              </h4>
              <p className="text-white/60 text-sm">{t.smart.f1Body}</p>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className={`group rounded-2xl p-7 min-h-[240px] flex flex-col justify-between ${cardLift}`}
            style={{ backgroundColor: theme.tint }}
          >
            <div className="flex items-center justify-between">
              <Users
                className="w-7 h-7 text-black transition-transform duration-500 group-hover:scale-110"
                strokeWidth={1.6}
              />
              <span
                className="text-black/40 text-xs uppercase"
                style={{ letterSpacing: "0.14em" }}
              >
                {t.smart.tag2}
              </span>
            </div>
            <div>
              <h4
                className="text-black text-xl font-medium leading-snug mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t.smart.f2Title}
              </h4>
              <p className="text-black/60 text-sm">{t.smart.f2Body}</p>
            </div>
          </Reveal>

          <Reveal
            delay={240}
            className={`bg-dot-pattern group rounded-2xl p-7 min-h-[240px] flex flex-col justify-between ${cardLift}`}
            style={{ backgroundColor: theme.dark }}
          >
            <div className="flex items-center justify-between">
              <TrendingUp
                className="w-7 h-7 text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.6}
              />
              <span
                className="text-white/50 text-xs uppercase"
                style={{ letterSpacing: "0.14em" }}
              >
                {t.smart.tag3}
              </span>
            </div>
            <div>
              <h4 className="text-white text-xl font-medium leading-snug mb-2">
                {t.smart.f3Title}
              </h4>
              <p className="text-white/60 text-sm">{t.smart.f3Body}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
