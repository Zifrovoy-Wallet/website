import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";

export function CtaSection() {
  const { t } = useI18n();
  const theme = useTheme();
  const cta = theme.assets.cta;

  return (
    <section id="cta" className="bg-page px-6 pb-16">
      <div className="max-w-[88rem] mx-auto">
        <Reveal className="group relative rounded-3xl overflow-hidden min-h-[640px] md:min-h-[720px] flex items-center">
          {cta.type === "video" ? (
            <video
              className="object-cover absolute inset-0 w-full h-full transition-transform duration-[1.6s] ease-out group-hover:scale-[1.02]"
              style={{ objectPosition: "85% center" }}
              autoPlay
              muted
              loop
              playsInline
              src={cta.src}
            />
          ) : (
            <img
              className="object-cover absolute inset-0 w-full h-full transition-transform duration-[1.6s] ease-out group-hover:scale-[1.02]"
              style={{ objectPosition: "85% center" }}
              src={cta.src}
              alt=""
            />
          )}
          {/* Left-side soft fade so the text sits comfortably over the bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, rgba(${theme.tintRgb},0.92) 0%, rgba(${theme.tintRgb},0.55) 32%, rgba(${theme.tintRgb},0.05) 58%, transparent 75%)`,
            }}
          />
          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <p className="text-black/60 text-sm mb-3">{t.cta.eyebrow}</p>
            <h2
              className="text-black text-5xl md:text-7xl font-medium leading-none mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              {t.cta.heading1}
              <br />
              {t.cta.heading2}
            </h2>
            <p className="text-black/70 text-lg leading-relaxed max-w-md mb-8">
              {t.cta.lead}
            </p>
            <span
              className="bg-dot-pattern inline-flex items-center gap-3 bg-[var(--cta-bg)] text-white text-base md:text-lg font-medium px-8 py-3.5 rounded-full cursor-default select-none"
              aria-disabled="true"
            >
              {t.cta.soon}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
