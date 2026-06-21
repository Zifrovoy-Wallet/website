import { useI18n } from "../i18n";

const CONTACT_EMAIL = "hi@zifrovoy.com";

export function Footer() {
  const { t } = useI18n();

  const cols = [
    {
      title: t.footer.col1Title,
      items: t.footer.col1Items,
      hrefs: ["#why", "#perps", "#smart", "#social"],
    },
    {
      title: t.footer.col2Title,
      items: t.footer.col2Items,
      hrefs: ["#how", "#faq", "#testi", `mailto:${CONTACT_EMAIL}`],
    },
    {
      title: t.footer.col3Title,
      items: t.footer.col3Items,
      hrefs: ["/terms", "/privacy"],
    },
  ];

  return (
    <footer className="bg-page px-6 pb-12 pt-8 border-t border-black/10">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-12">
          <div className="col-span-2 max-w-sm">
            <div className="flex items-center gap-2 text-black mb-4">
              <img
                src="/logo.png"
                alt=""
                className="w-6 h-6"
                style={{ filter: "brightness(0)" }}
              />
              <span className="text-xl font-medium tracking-tight">
                Zifrovoy
              </span>
            </div>
            <p className="text-black/60 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="mt-5 text-black/45 text-xs leading-relaxed">
              <div className="text-black/60 font-medium">PROEKT TSIFROVOI OSOO</div>
              <div>D-U-N-S® 44-756-0123</div>
              <div>5, 18 per. Klubny, Bishkek, Kyrgyz Republic</div>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-black/40 text-xs uppercase tracking-[0.16em] mb-4">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.items.map((it, i) => (
                  <li key={it}>
                    <a
                      href={c.hrefs[i] ?? "#"}
                      className="text-black/70 hover:text-black text-sm transition-colors"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-6">
          <a href="/terms" className="text-black/60 hover:text-black text-xs transition-colors">{t.footer.terms}</a>
          <a href="/privacy" className="text-black/60 hover:text-black text-xs transition-colors">{t.footer.privacy}</a>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-black/10">
          <span className="text-black/50 text-xs">{t.footer.copyright}</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-black/50 hover:text-black text-xs transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
