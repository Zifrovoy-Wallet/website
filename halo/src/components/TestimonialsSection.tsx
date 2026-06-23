import { Star, Quote } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";

type Theme = "dark" | "lavender";

export function TestimonialsSection() {
  const { t } = useI18n();
  const theme = useTheme();

  const quotes: {
    text: string;
    name: string;
    role: string;
    initials: string;
    theme: Theme;
  }[] = [
    {
      text: t.testi.q1Text,
      name: t.testi.q1Name,
      role: t.testi.q1Role,
      initials: t.testi.q1Init,
      theme: "dark",
    },
    {
      text: t.testi.q2Text,
      name: t.testi.q2Name,
      role: t.testi.q2Role,
      initials: t.testi.q2Init,
      theme: "lavender",
    },
    {
      text: t.testi.q3Text,
      name: t.testi.q3Name,
      role: t.testi.q3Role,
      initials: t.testi.q3Init,
      theme: "dark",
    },
  ];

  return (
    <section id="testi" className="bg-page px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        <Reveal className="flex items-end justify-between gap-8 mb-12 flex-wrap">
          <div>
            <p className="text-black/60 text-sm mb-3">{t.testi.eyebrow}</p>
            <h2
              className="text-black text-4xl sm:text-5xl md:text-6xl font-medium leading-none max-w-3xl"
              style={{ letterSpacing: "-0.04em" }}
            >
              {t.testi.heading}
            </h2>
          </div>
          <div
            className="flex items-center gap-3 rounded-full px-5 py-3"
            style={{ backgroundColor: theme.tint }}
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-black"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>
            <span className="text-black text-sm font-medium">
              {t.testi.rating}
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quotes.map((q, idx) => {
            const isDark = q.theme === "dark";
            const bg = isDark ? theme.dark : theme.tint;
            const textCol = isDark ? "text-white" : "text-black";
            const subCol = isDark ? "text-white/55" : "text-black/55";
            const borderCol = isDark
              ? "border-white/10"
              : "border-black/10";
            const quoteMarkCol = isDark ? "text-white/15" : "text-black/15";
            const starColStyle = isDark
              ? { color: theme.starOnDark }
              : { color: "#000" };
            const avatarGrad = isDark
              ? theme.avatarGradOnDark
              : theme.avatarGradOnLight;
            const avatarTextStyle = isDark
              ? { color: theme.avatarTextOnDark }
              : { color: "#fff" };
            return (
              <Reveal
                key={q.name}
                delay={idx * 130}
                className={`group rounded-2xl p-8 flex flex-col relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1.5 ${
                  isDark ? "bg-dot-pattern" : ""
                }`}
                style={{ backgroundColor: bg }}
              >
                <Quote
                  className={`absolute right-6 top-6 w-12 h-12 ${quoteMarkCol} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                  strokeWidth={1.2}
                />
                <div className="flex gap-1 mb-5 relative" style={starColStyle}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p
                  className={`${textCol} text-lg leading-relaxed flex-1 relative`}
                >
                  {q.text}
                </p>
                <div
                  className={`flex items-center gap-3 mt-6 pt-6 border-t ${borderCol} relative`}
                >
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium transition-transform duration-500 group-hover:scale-105"
                    style={{ background: avatarGrad, ...avatarTextStyle }}
                  >
                    {q.initials}
                  </span>
                  <div>
                    <div className={`${textCol} text-sm font-medium`}>
                      {q.name}
                    </div>
                    <div className={`${subCol} text-xs`}>{q.role}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
