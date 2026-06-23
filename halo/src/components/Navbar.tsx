import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LANGS, useI18n } from "../i18n";

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#why", label: t.nav.advantages },
    { href: "#perps", label: t.nav.copytrading },
    { href: "#how", label: t.nav.howStart },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-5">
      <div className="max-w-[88rem] mx-auto flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 text-black">
          <img
            src="/logo.png"
            alt=""
            className="w-7 h-7"
            style={{ filter: "brightness(0)" }}
          />
          <span className="text-2xl font-medium tracking-tight">Zifrovoy</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-gray-700 hover:text-black font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div
            className="hidden sm:flex items-center gap-1 rounded-full p-1 border border-black/10"
            role="group"
            aria-label="Language"
          >
            {LANGS.map((l) => {
              const active = l.code === lang;
              return (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLang(l.code)}
                  aria-pressed={active}
                  className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors duration-200 ${
                    active
                      ? "bg-[var(--cta-bg)] text-white"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {l.label}
                </button>
              );
            })}
          </div>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as typeof lang)}
            aria-label="Language"
            className="sm:hidden text-xs font-medium border border-black/10 rounded-full px-3 py-1.5 bg-transparent text-black"
          >
            {LANGS.map((l) => (
              <option key={l.code} value={l.code}>
                {l.label}
              </option>
            ))}
          </select>
          <a
            href="#cta"
            className="hidden md:inline-flex bg-[var(--cta-bg)] text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-[var(--cta-bg-hover)] transition-colors duration-200"
          >
            {t.nav.createAccount}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-black/10 text-black hover:bg-black/5 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden mt-3 max-w-[88rem] mx-auto rounded-2xl border border-black/10 bg-[var(--body-bg)] shadow-xl shadow-black/5 p-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-black/80 hover:bg-black/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="block mt-1 px-4 py-3 rounded-xl text-base font-medium text-center bg-[var(--cta-bg)] text-white hover:bg-[var(--cta-bg-hover)] transition-colors"
          >
            {t.nav.createAccount}
          </a>
        </div>
      )}
    </nav>
  );
}
