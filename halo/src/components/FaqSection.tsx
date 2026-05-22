import { useState } from "react";
import { ArrowRight, Plus, MessageCircle, Mail } from "lucide-react";
import { useI18n } from "../i18n";
import { useTheme } from "../theme";
import { Reveal } from "./Reveal";

export function FaqSection() {
  const { t } = useI18n();
  const theme = useTheme();
  const [open, setOpen] = useState<number | null>(0);
  const faqs = t.faq.items;

  return (
    <section id="faq" className="bg-page px-6 py-16">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* LEFT — purple stack */}
        <Reveal className="md:col-span-5 flex flex-col gap-4">
          {/* Headline card */}
          <div
            className="bg-dot-pattern rounded-3xl p-10 md:p-12 relative overflow-hidden"
            style={{ backgroundColor: theme.dark }}
          >
            {/* Decorative gradient bloom */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,224,245,0.22), transparent 70%)",
              }}
            />
            <p className="text-white/50 text-sm mb-3 relative z-10">
              {t.faq.eyebrow}
            </p>
            <h2
              className="text-white text-5xl md:text-6xl font-medium leading-none mb-6 relative z-10"
              style={{ letterSpacing: "-0.04em" }}
            >
              {t.faq.heading1}
              <br />
              {t.faq.heading2}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md mb-8 relative z-10">
              {t.faq.lead}
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-3 bg-white text-black text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-white/90 transition-colors duration-200 relative z-10"
            >
              {t.faq.cta}
              <span className="bg-black rounded-full p-2 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </a>
          </div>

          {/* Support card — lavender */}
          <div
            className="rounded-3xl p-8 flex items-center justify-between gap-6"
            style={{ backgroundColor: theme.tint }}
          >
            <div>
              <p className="text-black/60 text-sm mb-1">
                {t.faq.supportEyebrow}
              </p>
              <p
                className="text-black text-xl font-medium leading-snug"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t.faq.supportTitle1}
                <br />
                {t.faq.supportTitle2}
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <a
                href="#"
                aria-label="Telegram"
                className="w-12 h-12 rounded-full bg-[var(--cta-bg)] text-white flex items-center justify-center hover:bg-[var(--cta-bg-hover)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.6} />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/80 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-5 h-5" strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT — accordion inside lavender container */}
        <Reveal
          delay={120}
          className="md:col-span-7 rounded-3xl p-4 md:p-5"
          style={{ backgroundColor: theme.tint }}
        >
          <div className="flex flex-col gap-2">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className="bg-white rounded-2xl transition-all duration-300"
                  style={{
                    boxShadow: isOpen
                      ? "0 12px 32px -16px rgba(43,38,68,0.25)"
                      : "0 1px 0 rgba(43,38,68,0.04)",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 px-7 py-6 text-left group"
                  >
                    <span
                      className="text-black text-lg md:text-xl font-medium leading-snug group-hover:text-black/70 transition-colors"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-black rotate-45"
                          : "bg-[var(--tint)]"
                      }`}
                    >
                      <Plus
                        className={`w-4 h-4 transition-colors ${
                          isOpen ? "text-white" : "text-black"
                        }`}
                        strokeWidth={1.8}
                      />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{ maxHeight: isOpen ? "320px" : "0px" }}
                  >
                    <p className="text-black/70 text-base leading-relaxed px-7 pb-7 pr-16 max-w-[60ch]">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
