import { useI18n } from "../i18n";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

export function StatsSection() {
  const { t } = useI18n();
  const stats = [
    { value: "15+", label: t.stats.s1 },
    { value: "100%", label: t.stats.s2 },
    { value: "<1s", label: t.stats.s3 },
    { value: "0.1%", label: t.stats.s4 },
  ];

  return (
    <section className="bg-page px-6 pt-16 pb-8">
      <div className="max-w-[88rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 rounded-2xl overflow-hidden border border-black/10">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="group bg-[var(--body-bg)] p-8 md:p-10 transition-colors duration-300 hover:bg-[var(--tint)] cursor-default"
          >
            <div
              className="text-black text-4xl md:text-5xl font-medium leading-none transition-transform duration-500 group-hover:-translate-y-0.5"
              style={{ letterSpacing: "-0.04em" }}
            >
              <CountUp value={s.value} duration={1600} />
            </div>
            <div className="text-black/60 text-sm mt-3">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
