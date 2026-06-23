import { Check } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";

export function SocialLoginSection() {
  const { t } = useI18n();
  const theme = useTheme();
  const checks = [t.social.c1, t.social.c2, t.social.c3, t.social.c4];

  return (
    <section id="social" className="bg-page px-6 py-16">
      <div className="max-w-[88rem] mx-auto">
        <Reveal className="group relative rounded-3xl overflow-hidden min-h-[640px] flex items-center">
          <video
            className="object-cover absolute inset-0 w-full h-full transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
            poster={theme.assets.socialPoster}
            src={theme.assets.social}
          />
          {/* Soft fade on the left so text sits comfortably over the lavender bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(90deg, rgba(${theme.tintRgb},0.55) 0%, rgba(${theme.tintRgb},0.15) 38%, transparent 60%)`,
            }}
          />
          <div className="relative z-10 max-w-xl p-10 md:p-16">
            <p className="text-black/55 text-sm mb-3">{t.social.eyebrow}</p>
            <h2
              className="text-black text-4xl sm:text-5xl md:text-6xl font-medium leading-none mb-8"
              style={{ letterSpacing: "-0.04em" }}
            >
              {t.social.heading1}
              <br />
              {t.social.heading2}
            </h2>
            <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-md mb-10">
              {t.social.lead}
            </p>
            <ul className="space-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-black/80">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[var(--cta-bg)] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" strokeWidth={2.4} />
                  </span>
                  <span className="text-base">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
