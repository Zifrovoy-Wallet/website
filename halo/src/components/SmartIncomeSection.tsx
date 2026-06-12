import { Sparkles, Users, TrendingUp } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";
import { AiEngineConsole } from "./AiEngineConsole";

const cardLift =
  "transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5";

export function SmartIncomeSection() {
  const { t } = useI18n();
  const theme = useTheme();

  return (
    <section id="smart" className="bg-page px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        {/* Centered heading */}
        <Reveal className="text-center mb-12">
          <h2
            className="text-black text-4xl sm:text-5xl md:text-6xl font-medium leading-none"
            style={{ letterSpacing: "-0.04em" }}
          >
            {t.smart.heading1} {t.smart.heading2}
          </h2>
        </Reveal>

        {/* Featured animated AI-engine console */}
        <Reveal
          className="bg-dot-pattern relative rounded-3xl overflow-hidden"
          style={{ backgroundColor: theme.dark }}
        >
          <AiEngineConsole />
        </Reveal>

        {/* Lead — sits as the intro to the three pillars below */}
        <Reveal className="max-w-2xl mx-auto text-center mt-14 mb-7">
          <p className="text-black/60 text-base md:text-lg leading-relaxed">
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
              <div className="relative w-11 h-11 flex items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-white/20 animate-ping" />
                <span
                  className="absolute inset-[7px] rounded-full border border-white/15 animate-ping"
                  style={{ animationDelay: "0.6s" }}
                />
                <Sparkles
                  className="relative w-7 h-7 text-white transition-transform duration-700 ease-out group-hover:rotate-180"
                  strokeWidth={1.6}
                />
              </div>
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
              <div className="relative w-11 h-11 flex items-center justify-center">
                <Users
                  className="zf-echo absolute inset-0 m-auto w-7 h-7 text-black"
                  strokeWidth={1.6}
                />
                <Users
                  className="relative w-7 h-7 text-black transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.6}
                />
              </div>
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
              <div className="flex items-center gap-2.5">
                <TrendingUp
                  className="w-7 h-7 text-white transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
                <div className="flex items-end gap-[3px] h-6">
                  <span
                    className="zf-bar block w-1.5 rounded-sm bg-white/30 transition-colors duration-300 group-hover:bg-emerald-300/80"
                    style={{ height: "45%" }}
                  />
                  <span
                    className="zf-bar block w-1.5 rounded-sm bg-white/40 transition-colors duration-300 group-hover:bg-emerald-300/80"
                    style={{ height: "75%", animationDelay: "0.15s" }}
                  />
                  <span
                    className="zf-bar block w-1.5 rounded-sm bg-white/55 transition-colors duration-300 group-hover:bg-emerald-300/80"
                    style={{ height: "100%", animationDelay: "0.3s" }}
                  />
                </div>
              </div>
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
