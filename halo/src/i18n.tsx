import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "kk" | "ky" | "uz" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kk", label: "KK" },
  { code: "ky", label: "KY" },
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
];

type Dict = {
  nav: {
    advantages: string;
    copytrading: string;
    howStart: string;
    faq: string;
    createAccount: string;
  };
  hero: {
    title1: string;
    title2: string;
    description: string;
    cta: string;
  };
  stats: { s1: string; s2: string; s3: string; s4: string };
  info: {
    eyebrow: string;
    heading: string;
    cta: string;
    lead: string;
    card1Title1: string;
    card1Title2: string;
    card1Body: string;
    card2Title1: string;
    card2Title2: string;
    card2Body: string;
    card3Title1: string;
    card3Title2: string;
    card3Body: string;
  };
  perps: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    lead: string;
    liveBadge: string;
    featTitle1: string;
    featTitle2: string;
    featBody: string;
    ctaConnect: string;
    f1Title: string;
    f1Body: string;
    f2Title: string;
    f2Body: string;
    f3Title: string;
    f3Body: string;
  };
  how: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    heading3: string;
    lead: string;
    cta: string;
    stepLabel: string;
    s1Title: string;
    s1Body: string;
    s2Title: string;
    s2Body: string;
    s3Title: string;
    s3Body: string;
    promiseTitle: string;
    promise1: string;
    promise2: string;
    promise3: string;
  };
  social: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    lead: string;
    c1: string;
    c2: string;
    c3: string;
    c4: string;
  };
  testi: {
    eyebrow: string;
    heading: string;
    rating: string;
    q1Text: string;
    q1Name: string;
    q1Role: string;
    q1Init: string;
    q2Text: string;
    q2Name: string;
    q2Role: string;
    q2Init: string;
    q3Text: string;
    q3Name: string;
    q3Role: string;
    q3Init: string;
  };
  faq: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    lead: string;
    cta: string;
    supportEyebrow: string;
    supportTitle1: string;
    supportTitle2: string;
    items: { q: string; a: string }[];
  };
  cta: {
    eyebrow: string;
    heading1: string;
    heading2: string;
    lead: string;
    button: string;
  };
  footer: {
    description: string;
    copyright: string;
    col1Title: string;
    col1Items: string[];
    col2Title: string;
    col2Items: string[];
    col3Title: string;
    col3Items: string[];
  };
};

const ru: Dict = {
  nav: {
    advantages: "Преимущества",
    copytrading: "Копитрейдинг",
    howStart: "Как начать",
    faq: "FAQ",
    createAccount: "Создать аккаунт",
  },
  hero: {
    title1: "Все активы.",
    title2: "Один кошелёк.",
    description:
      "Все активы в одном приложении: переводы за секунды, обмен по биржевому курсу и копитрейдинг перпов на Hyperliquid. Вход через привычные соцсети, без скрытых комиссий.",
    cta: "Начать бесплатно",
  },
  stats: {
    s1: "Поддерживаемых сетей",
    s2: "Активных пользователей",
    s3: "Объём транзакций",
    s4: "Минимальная комиссия",
  },
  info: {
    eyebrow: "Почему Zifrovoy",
    heading: "Знакомьтесь — Zifrovoy.",
    cta: "Узнать больше",
    lead: "Не ещё один кошелёк, а тот, который вы реально будете открывать каждый день. Минимум кликов, максимум контроля — и никаких скрытых комиссий.",
    card1Title1: "Ваши ключи —",
    card1Title2: "только ваши",
    card1Body:
      "Некастодиальный кошелёк: приватные ключи хранятся только у вас на устройстве. У нас нет к ним доступа — даже технически.",
    card2Title1: "Отправил —",
    card2Title2: "дошло.",
    card2Body:
      "Переводы проходят за секунды. Никаких зависших транзакций — отправили адрес и можно закрывать приложение.",
    card3Title1: "Комиссии",
    card3Title2: "не кусаются",
    card3Body:
      "Обмен по биржевому курсу — без скрытых наценок и мелкого шрифта. Итоговую сумму видно до того, как нажмёте «Подтвердить».",
  },
  perps: {
    eyebrow: "Новое · Hyperliquid",
    heading1: "Копитрейдинг —",
    heading2: "торгуй с лучшими.",
    lead: "Подписывайтесь на топ-трейдеров — и каждая их сделка автоматически повторяется в вашем кошельке. Без передачи средств и ключей кому-либо.",
    liveBadge: "Live · Hyperliquid",
    featTitle1: "Один клик —",
    featTitle2: "и вы в позиции.",
    featBody:
      "Трейдер открывает позицию — ваш кошелёк повторяет её тем же объёмом и по той же цене. Без передачи ключей, без задержек.",
    ctaConnect: "Подключить копитрейдинг",
    f1Title: "Исполнение в реальном времени",
    f1Body:
      "Позиции открываются и закрываются вслед за трейдером — миллисекундная задержка, без проскальзывания.",
    f2Title: "Полная прозрачность ончейн",
    f2Body:
      "Каждая сделка трейдера, его PnL и история позиций видны на блокчейне Hyperliquid. Без чёрных ящиков.",
    f3Title: "Вы остаётесь у руля",
    f3Body:
      "Лимиты, стопы, размер позиции и список трейдеров — всё настраивается под вашу стратегию.",
  },
  how: {
    eyebrow: "Как начать",
    heading1: "От регистрации",
    heading2: "до первой операции —",
    heading3: "две минуты.",
    lead: "Без документов, очередей и долгих проверок. Установите приложение — и через две минуты управляйте активами.",
    cta: "Создать аккаунт",
    stepLabel: "ШАГ",
    s1Title: "Создайте аккаунт",
    s1Body:
      "Зарегистрируйтесь за пару минут через социальные сети, Google, Apple или классическую сид-фразу — без документов и верификаций.",
    s2Title: "Пополните кошелёк",
    s2Body:
      "Пополните карту или получите криптоперевод — поддерживается более 25 EVM-сетей: Ethereum, Base, Arbitrum, Optimism и другие.",
    s3Title: "Погрузитесь в крипту",
    s3Body:
      "Обмен, бридж между сетями, копитрейдинг перпов на Hyperliquid и подключение к dApps — всё на одном экране «Действия».",
    promiseTitle: "И ни одной звёздочки в договоре.",
    promise1: "Без KYC для базового использования",
    promise2: "Без скрытых комиссий и подписок",
    promise3: "Поддержка 24/7 на русском",
  },
  social: {
    eyebrow: "Удобный вход",
    heading1: "Войдите через",
    heading2: "привычный сервис.",
    lead: "Без длинных форм и подтверждений — войдите через социальные сети, Google, Apple или Discord за пару секунд.",
    c1: "Быстрая регистрация без сложных форм",
    c2: "Смарт-аккаунт на основе вашего профиля",
    c3: "Создание сид-фразы для полного контроля",
    c4: "EOA и смарт-аккаунты в одном месте",
  },
  testi: {
    eyebrow: "Отзывы",
    heading: "Что говорят пользователи.",
    rating: "4.9 на Google Play · 50K+ пользователей",
    q1Text:
      "Zifrovoy — лучший кошелёк, которым я пользовался. Мгновенные переводы, низкие комиссии и потрясающий интерфейс.",
    q1Name: "Алексей М.",
    q1Role: "Блокчейн-аналитик",
    q1Init: "АМ",
    q2Text:
      "Копитрейдинг перпов на Hyperliquid через Zifrovoy — буквально следую за топ-трейдерами в один клик. Сделал +60% за два месяца.",
    q2Name: "Екатерина К.",
    q2Role: "Частный инвестор",
    q2Init: "ЕК",
    q3Text:
      "Отличная поддержка EOA и смарт-аккаунтов. Вход через социальные сети — наконец-то не нужно запоминать длинные сид-фразы.",
    q3Name: "Дмитрий С.",
    q3Role: "Web3 разработчик",
    q3Init: "ДС",
  },
  faq: {
    eyebrow: "FAQ",
    heading1: "Частые",
    heading2: "вопросы.",
    lead: "Всё, что нужно знать о Zifrovoy — от безопасности до копитрейдинга на Hyperliquid.",
    cta: "Создать аккаунт",
    supportEyebrow: "Не нашли ответ?",
    supportTitle1: "Напишите нам — поможем",
    supportTitle2: "разобраться за минуту.",
    items: [
      {
        q: "Что такое Zifrovoy?",
        a: "Zifrovoy — некастодиальный криптокошелёк для хранения, отправки и обмена активов. Поддерживает EOA и смарт-аккаунты, а ещё — копитрейдинг перпов на Hyperliquid в один клик.",
      },
      {
        q: "Безопасен ли Zifrovoy?",
        a: "Да. Zifrovoy — полностью некастодиальный кошелёк: только вы контролируете свои ключи. Передовое шифрование, поддержка аппаратных кошельков, приватные ключи никогда не покидают ваше устройство.",
      },
      {
        q: "Какие криптовалюты поддерживаются?",
        a: "Все EVM-совместимые активы: Ethereum, Polygon, Avalanche, Arbitrum, Optimism, Base и другие сети. Стейблкоины USDT, USDC и любые ERC-20 токены, а также перпы на Hyperliquid.",
      },
      {
        q: "Как работает копитрейдинг на Hyperliquid?",
        a: "Выбираете трейдера из топа по доходности за 30 дней, нажимаете «Следить» — и кошелёк сам открывает и закрывает позиции вслед за ним. Все сделки идут через смарт-контракты Hyperliquid: ваши средства и ключи остаются у вас.",
      },
      {
        q: "Как быстро проходят транзакции?",
        a: "В реальном времени. Скорость зависит от сети, но мы оптимизируем процесс и предлагаем ускорение транзакций. Hyperliquid — sub-second финализация.",
      },
      {
        q: "Нужно ли подтверждать личность?",
        a: "Для базового использования — нет. Создайте кошелёк и начните мгновенно. Верификация нужна только для отдельных функций.",
      },
    ],
  },
  cta: {
    eyebrow: "Начните сегодня",
    heading1: "Попробуйте —",
    heading2: "это займёт 30 секунд.",
    lead: "Без подписок и скрытых платежей. Управляйте активами и копируйте топ-трейдеров уже сегодня.",
    button: "Создать бесплатный аккаунт",
  },
  footer: {
    description:
      "Храните, отправляйте и обменивайте криптовалюту — без лишних шагов и скрытых комиссий. Копитрейдинг перпов на Hyperliquid включён.",
    copyright: "© 2026 Zifrovoy. Все права защищены.",
    col1Title: "Продукт",
    col1Items: ["Кошелёк", "Копитрейдинг", "Обмен", "Безопасность", "Цены"],
    col2Title: "Компания",
    col2Items: ["О нас", "Блог", "Карьера", "Контакты"],
    col3Title: "Поддержка",
    col3Items: ["Помощь", "Документация", "Условия", "Конфиденциальность"],
  },
};

const en: Dict = {
  nav: {
    advantages: "Features",
    copytrading: "Copy trading",
    howStart: "How to start",
    faq: "FAQ",
    createAccount: "Create account",
  },
  hero: {
    title1: "All assets.",
    title2: "One wallet.",
    description:
      "Every asset in one app: send in seconds, swap at exchange rates, and copy-trade perps on Hyperliquid. Sign in with familiar social accounts — no hidden fees.",
    cta: "Get started free",
  },
  stats: {
    s1: "Supported networks",
    s2: "Active users",
    s3: "Transaction volume",
    s4: "Minimum fee",
  },
  info: {
    eyebrow: "Why Zifrovoy",
    heading: "Meet Zifrovoy.",
    cta: "Learn more",
    lead: "Not just another wallet — the one you'll actually open every day. Fewer clicks, more control, and zero hidden fees.",
    card1Title1: "Your keys —",
    card1Title2: "yours alone",
    card1Body:
      "Non-custodial wallet: private keys stay on your device. We can't access them — not even technically.",
    card2Title1: "Sent —",
    card2Title2: "delivered.",
    card2Body:
      "Transfers settle in seconds. No stuck transactions — fire and forget.",
    card3Title1: "Fees that",
    card3Title2: "don't bite",
    card3Body:
      "Swap at true exchange rates — no hidden spreads, no fine print. See the final amount before you tap Confirm.",
  },
  perps: {
    eyebrow: "New · Hyperliquid",
    heading1: "Copy trading —",
    heading2: "trade with the best.",
    lead: "Follow top traders and every trade lands in your wallet automatically. No handing over funds or keys to anyone.",
    liveBadge: "Live · Hyperliquid",
    featTitle1: "One click —",
    featTitle2: "and you're in.",
    featBody:
      "The trader opens a position — your wallet mirrors it with the same size and price. No key handover, no delays.",
    ctaConnect: "Enable copy trading",
    f1Title: "Real-time execution",
    f1Body:
      "Positions open and close in step with the trader — millisecond latency, no slippage.",
    f2Title: "Full onchain transparency",
    f2Body:
      "Every trade, PnL, and position history is visible on Hyperliquid. No black boxes.",
    f3Title: "You stay in control",
    f3Body:
      "Limits, stops, position sizing and trader lists — all tuned to your strategy.",
  },
  how: {
    eyebrow: "How to start",
    heading1: "From sign-up",
    heading2: "to first transaction —",
    heading3: "two minutes.",
    lead: "No paperwork, queues or long reviews. Install the app and manage assets in two minutes.",
    cta: "Create account",
    stepLabel: "STEP",
    s1Title: "Create an account",
    s1Body:
      "Sign up in a couple of minutes via social, Google, Apple or a classic seed phrase — no documents, no verification.",
    s2Title: "Fund your wallet",
    s2Body:
      "Top up with a card or receive crypto — 25+ EVM networks supported: Ethereum, Base, Arbitrum, Optimism and more.",
    s3Title: "Dive into crypto",
    s3Body:
      "Swap, bridge between networks, copy-trade perps on Hyperliquid and connect to dApps — all from the Actions screen.",
    promiseTitle: "And not a single asterisk in the contract.",
    promise1: "No KYC for basic use",
    promise2: "No hidden fees or subscriptions",
    promise3: "24/7 support in English",
  },
  social: {
    eyebrow: "Easy sign-in",
    heading1: "Sign in with",
    heading2: "an account you already use.",
    lead: "No long forms or confirmations — sign in with social, Google, Apple or Discord in seconds.",
    c1: "Fast sign-up without complex forms",
    c2: "Smart account built from your profile",
    c3: "Generate a seed phrase for full control",
    c4: "EOA and smart accounts in one place",
  },
  testi: {
    eyebrow: "Reviews",
    heading: "What users are saying.",
    rating: "4.9 on Google Play · 50K+ users",
    q1Text:
      "Zifrovoy is the best wallet I've used. Instant transfers, low fees and a stunning interface.",
    q1Name: "Alex M.",
    q1Role: "Blockchain analyst",
    q1Init: "AM",
    q2Text:
      "Copy trading perps on Hyperliquid through Zifrovoy — I literally follow top traders in one click. Up 60% in two months.",
    q2Name: "Kate K.",
    q2Role: "Private investor",
    q2Init: "KK",
    q3Text:
      "Great EOA and smart-account support. Social login means I finally don't have to memorize long seed phrases.",
    q3Name: "Dmitry S.",
    q3Role: "Web3 developer",
    q3Init: "DS",
  },
  faq: {
    eyebrow: "FAQ",
    heading1: "Frequently",
    heading2: "asked.",
    lead: "Everything you need to know about Zifrovoy — from security to copy trading on Hyperliquid.",
    cta: "Create account",
    supportEyebrow: "Didn't find an answer?",
    supportTitle1: "Message us — we'll help",
    supportTitle2: "you sort it in a minute.",
    items: [
      {
        q: "What is Zifrovoy?",
        a: "Zifrovoy is a non-custodial crypto wallet for storing, sending and swapping assets. It supports EOA and smart accounts plus one-click copy trading of perps on Hyperliquid.",
      },
      {
        q: "Is Zifrovoy secure?",
        a: "Yes. Zifrovoy is fully non-custodial: only you control the keys. State-of-the-art encryption, hardware-wallet support, and private keys that never leave your device.",
      },
      {
        q: "Which cryptocurrencies are supported?",
        a: "All EVM-compatible assets: Ethereum, Polygon, Avalanche, Arbitrum, Optimism, Base and more. Stablecoins USDT, USDC and any ERC-20 tokens, plus perps on Hyperliquid.",
      },
      {
        q: "How does copy trading on Hyperliquid work?",
        a: "Pick a trader from the 30-day leaderboard, tap Follow, and your wallet opens and closes positions in step. Everything runs through Hyperliquid smart contracts — your funds and keys stay with you.",
      },
      {
        q: "How fast are transactions?",
        a: "Real-time. Speed depends on the network, but we optimise the path and offer transaction speed-ups. Hyperliquid finalises in sub-seconds.",
      },
      {
        q: "Do I need to verify my identity?",
        a: "Not for basic use. Create a wallet and start instantly. Verification is only needed for select features.",
      },
    ],
  },
  cta: {
    eyebrow: "Start today",
    heading1: "Try it —",
    heading2: "takes 30 seconds.",
    lead: "No subscriptions, no hidden charges. Manage assets and copy top traders starting today.",
    button: "Create a free account",
  },
  footer: {
    description:
      "Store, send and swap crypto — no extra steps, no hidden fees. Hyperliquid perps copy trading included.",
    copyright: "© 2026 Zifrovoy. All rights reserved.",
    col1Title: "Product",
    col1Items: ["Wallet", "Copy trading", "Swap", "Security", "Pricing"],
    col2Title: "Company",
    col2Items: ["About", "Blog", "Careers", "Contact"],
    col3Title: "Support",
    col3Items: ["Help", "Docs", "Terms", "Privacy"],
  },
};

const kk: Dict = {
  nav: {
    advantages: "Артықшылықтары",
    copytrading: "Копитрейдинг",
    howStart: "Қалай бастау керек",
    faq: "FAQ",
    createAccount: "Аккаунт құру",
  },
  hero: {
    title1: "Барлық активтер.",
    title2: "Бір әмиян.",
    description:
      "Барлық активтер бір қосымшада: секундтарда аударымдар, биржалық бағам бойынша айырбас және Hyperliquid-те перптерді копитрейдинг. Әдеттегі әлеуметтік желілермен кіру, жасырын комиссияларсыз.",
    cta: "Тегін бастау",
  },
  stats: {
    s1: "Қолдау көрсетілетін желілер",
    s2: "Белсенді қолданушылар",
    s3: "Транзакциялар көлемі",
    s4: "Ең төменгі комиссия",
  },
  info: {
    eyebrow: "Неліктен Zifrovoy",
    heading: "Танысыңыз — Zifrovoy.",
    cta: "Толығырақ",
    lead: "Бұл кезекті әмиян емес — сіз күн сайын ашатын әмиян. Минимум басу, максимум бақылау — жасырын комиссиялар жоқ.",
    card1Title1: "Сіздің кілттеріңіз —",
    card1Title2: "тек сіздікі",
    card1Body:
      "Кастодиалды емес әмиян: жеке кілттер тек сіздің құрылғыңызда сақталады. Бізде оларға қол жетімділік жоқ — техникалық тұрғыдан да.",
    card2Title1: "Жібердіңіз —",
    card2Title2: "жетті.",
    card2Body:
      "Аударымдар секундтарда өтеді. Ілінген транзакциялар жоқ — мекенжайды жіберіп, қосымшаны жабуға болады.",
    card3Title1: "Комиссиялар",
    card3Title2: "тістемейді",
    card3Body:
      "Биржалық бағам бойынша айырбас — жасырын үстеме бағалар мен ұсақ шрифтсіз. Соңғы соманы «Растау» батырмасын баспас бұрын көресіз.",
  },
  perps: {
    eyebrow: "Жаңа · Hyperliquid",
    heading1: "Копитрейдинг —",
    heading2: "үздіктермен сауда жаса.",
    lead: "Үздік трейдерлерге жазылыңыз — олардың әрбір мәмілесі әмияныңызда автоматты түрде қайталанады. Қаражат пен кілттерді ешкімге бермей.",
    liveBadge: "Live · Hyperliquid",
    featTitle1: "Бір басу —",
    featTitle2: "және сіз позициядасыз.",
    featBody:
      "Трейдер позиция ашады — сіздің әмияныңыз оны сол көлеммен және сол бағамен қайталайды. Кілттер бермей, кешіктірусіз.",
    ctaConnect: "Копитрейдингті қосу",
    f1Title: "Нақты уақыт режимінде орындау",
    f1Body:
      "Позициялар трейдердің артынан ашылып, жабылады — миллисекундтық кідіріс, сырғанаусыз.",
    f2Title: "Толық ончейн ашықтық",
    f2Body:
      "Трейдердің әрбір мәмілесі, PnL және позиция тарихы Hyperliquid блокчейнінде көрінеді. Қара жәшіктер жоқ.",
    f3Title: "Сіз басқарасыз",
    f3Body:
      "Лимиттер, стоптар, позиция мөлшері және трейдерлер тізімі — бәрі стратегияңызға баптанады.",
  },
  how: {
    eyebrow: "Қалай бастау керек",
    heading1: "Тіркеуден",
    heading2: "алғашқы операцияға дейін —",
    heading3: "екі минут.",
    lead: "Құжаттарсыз, кезексіз және ұзақ тексерулерсіз. Қосымшаны орнатыңыз — екі минуттан кейін активтерді басқарыңыз.",
    cta: "Аккаунт құру",
    stepLabel: "ҚАДАМ",
    s1Title: "Аккаунт құрыңыз",
    s1Body:
      "Әлеуметтік желілер, Google, Apple немесе классикалық сид-фраза арқылы бірнеше минутта тіркеліңіз — құжаттарсыз және верификациясыз.",
    s2Title: "Әмиянды толтырыңыз",
    s2Body:
      "Картаны толтырыңыз немесе криптоаударым алыңыз — 25-тен астам EVM желісі қолдау көрсетеді: Ethereum, Base, Arbitrum, Optimism және басқалар.",
    s3Title: "Криптоға енгеніңіз",
    s3Body:
      "Айырбас, желілер арасындағы бридж, Hyperliquid перптерін копитрейдинг және dApps қосылымдары — бәрі бір «Әрекеттер» экранында.",
    promiseTitle: "Шартта бірде-бір жұлдызша жоқ.",
    promise1: "Негізгі пайдалану үшін KYC жоқ",
    promise2: "Жасырын комиссиялар мен жазылымдар жоқ",
    promise3: "Қазақша 24/7 қолдау",
  },
  social: {
    eyebrow: "Ыңғайлы кіру",
    heading1: "Әдеттегі сервис",
    heading2: "арқылы кіріңіз.",
    lead: "Ұзақ нысандар мен растаусыз — әлеуметтік желілер, Google, Apple немесе Discord арқылы бірнеше секундта кіріңіз.",
    c1: "Күрделі нысандарсыз жылдам тіркелу",
    c2: "Сіздің профиліңіз негізіндегі смарт-аккаунт",
    c3: "Толық бақылау үшін сид-фраза жасау",
    c4: "EOA мен смарт-аккаунттар бір жерде",
  },
  testi: {
    eyebrow: "Пікірлер",
    heading: "Қолданушылар не дейді.",
    rating: "Google Play-де 4.9 · 50K+ қолданушы",
    q1Text:
      "Zifrovoy — мен қолданған ең үздік әмиян. Лезде аударымдар, төмен комиссиялар және керемет интерфейс.",
    q1Name: "Алексей М.",
    q1Role: "Блокчейн-талдаушы",
    q1Init: "АМ",
    q2Text:
      "Zifrovoy арқылы Hyperliquid перптерін копитрейдинг — үздік трейдерлерді бір басумен қайталаймын. Екі айда +60% жасадым.",
    q2Name: "Екатерина К.",
    q2Role: "Жеке инвестор",
    q2Init: "ЕК",
    q3Text:
      "EOA мен смарт-аккаунттарға өте жақсы қолдау. Әлеуметтік желілер арқылы кіру — ұзын сид-фразаларды есте сақтаудың қажеті жоқ.",
    q3Name: "Дмитрий С.",
    q3Role: "Web3 әзірлеуші",
    q3Init: "ДС",
  },
  faq: {
    eyebrow: "FAQ",
    heading1: "Жиі қойылатын",
    heading2: "сұрақтар.",
    lead: "Zifrovoy туралы білу керек барлық нәрсе — қауіпсіздіктен Hyperliquid копитрейдингіне дейін.",
    cta: "Аккаунт құру",
    supportEyebrow: "Жауап таппадыңыз ба?",
    supportTitle1: "Бізге жазыңыз — бір минутта",
    supportTitle2: "көмектесеміз.",
    items: [
      {
        q: "Zifrovoy дегеніміз не?",
        a: "Zifrovoy — активтерді сақтау, жіберу және айырбастауға арналған кастодиалды емес криптоәмиян. EOA мен смарт-аккаунттарды, сондай-ақ Hyperliquid-те перптерді бір басумен копитрейдингті қолдайды.",
      },
      {
        q: "Zifrovoy қауіпсіз бе?",
        a: "Иә. Zifrovoy — толығымен кастодиалды емес әмиян: кілттерді тек сіз бақылайсыз. Озық шифрлау, аппараттық әмияндарға қолдау, жеке кілттер құрылғыңыздан ешқашан шықпайды.",
      },
      {
        q: "Қандай криптовалюталар қолдау тапқан?",
        a: "Барлық EVM-үйлесімді активтер: Ethereum, Polygon, Avalanche, Arbitrum, Optimism, Base және басқа желілер. USDT, USDC стейблкоиндері және кез келген ERC-20 токендері, сондай-ақ Hyperliquid перптері.",
      },
      {
        q: "Hyperliquid-те копитрейдинг қалай жұмыс істейді?",
        a: "30 күндік табыстылық бойынша топтан трейдерді таңдайсыз, «Бақылау» батырмасын басасыз — әмиян оның артынан позицияларды өзі ашып, жабады. Барлық мәмілелер Hyperliquid смарт-келісімшарттары арқылы өтеді: қаражатыңыз бен кілттеріңіз сізде қалады.",
      },
      {
        q: "Транзакциялар қаншалықты жылдам өтеді?",
        a: "Нақты уақыт режимінде. Жылдамдық желіге байланысты, бірақ біз процесті оңтайландырамыз және транзакцияларды жылдамдату ұсынамыз. Hyperliquid — секундтан аз финализация.",
      },
      {
        q: "Жеке басты растау қажет пе?",
        a: "Негізгі пайдалану үшін — жоқ. Әмиян жасап, бірден бастаңыз. Верификация тек кейбір функцияларға қажет.",
      },
    ],
  },
  cta: {
    eyebrow: "Бүгін бастаңыз",
    heading1: "Көріп көріңіз —",
    heading2: "30 секунд алады.",
    lead: "Жазылымсыз және жасырын төлемдерсіз. Активтерді басқарыңыз және үздік трейдерлерді бүгіннен бастап көшіріңіз.",
    button: "Тегін аккаунт құру",
  },
  footer: {
    description:
      "Криптовалютаны сақтаңыз, жіберіңіз және айырбастаңыз — артық қадамдар мен жасырын комиссияларсыз. Hyperliquid перптерінің копитрейдингі қосылған.",
    copyright: "© 2026 Zifrovoy. Барлық құқықтары қорғалған.",
    col1Title: "Өнім",
    col1Items: ["Әмиян", "Копитрейдинг", "Айырбас", "Қауіпсіздік", "Бағалар"],
    col2Title: "Компания",
    col2Items: ["Біз туралы", "Блог", "Мансап", "Байланыс"],
    col3Title: "Қолдау",
    col3Items: ["Көмек", "Құжаттама", "Шарттар", "Құпиялылық"],
  },
};

const ky: Dict = {
  nav: {
    advantages: "Артыкчылыктары",
    copytrading: "Копитрейдинг",
    howStart: "Кантип баштоо керек",
    faq: "FAQ",
    createAccount: "Аккаунт түзүү",
  },
  hero: {
    title1: "Бардык активдер.",
    title2: "Бир капчык.",
    description:
      "Бардык активдер бир тиркемеде: секунд ичинде которуулар, биржалык курс боюнча алмашуу жана Hyperliquid'те перптерди копитрейдинг. Адаттагы социалдык тармактар аркылуу кирүү, жашыруун комиссиясыз.",
    cta: "Бекер баштоо",
  },
  stats: {
    s1: "Колдоого алынган тармактар",
    s2: "Активдүү колдонуучулар",
    s3: "Транзакциялардын көлөмү",
    s4: "Эң аз комиссия",
  },
  info: {
    eyebrow: "Эмне үчүн Zifrovoy",
    heading: "Таанышыңыз — Zifrovoy.",
    cta: "Көбүрөөк билүү",
    lead: "Бул кезектеги капчык эмес — сиз күн сайын ачкан капчык. Минимум баскычтар, максимум көзөмөл — жашыруун комиссиясыз.",
    card1Title1: "Сиздин ачкычтарыңыз —",
    card1Title2: "сиздики гана",
    card1Body:
      "Кастодиалдык эмес капчык: жеке ачкычтар түзмөгүңүздө гана сакталат. Бизде аларга жетки жок — техникалык жактан да.",
    card2Title1: "Жөнөттүңүз —",
    card2Title2: "жетти.",
    card2Body:
      "Которуулар секунд ичинде өтөт. Илинип калган транзакциялар жок — даректи жөнөтсөңүз болду, тиркемени жабса болот.",
    card3Title1: "Комиссиялар",
    card3Title2: "тиштебейт",
    card3Body:
      "Биржалык курс боюнча алмашуу — жашыруун үстөк жана майда тамгасыз. Акыркы сумманы «Ырастоо» баскычын баспай туруп көрөсүз.",
  },
  perps: {
    eyebrow: "Жаңы · Hyperliquid",
    heading1: "Копитрейдинг —",
    heading2: "мыктылар менен соода кыл.",
    lead: "Мыкты трейдерлерге жазылыңыз — алардын ар бир бүтүмү капчыгыңызда автоматтык түрдө кайталанат. Акча жана ачкычтарды эч кимге бербей.",
    liveBadge: "Live · Hyperliquid",
    featTitle1: "Бир баскыч —",
    featTitle2: "жана сиз позициядасыз.",
    featBody:
      "Трейдер позиция ачат — капчыгыңыз аны ошол эле көлөмдө жана ошол эле баада кайталайт. Ачкыч бербестен, кечиктирүүсүз.",
    ctaConnect: "Копитрейдингди күйгүзүү",
    f1Title: "Реалдуу убакыттагы аткаруу",
    f1Body:
      "Позициялар трейдердин артынан ачылып, жабылат — миллисекунд кечигүү, сыргуусуз.",
    f2Title: "Толук ончейн ачыктык",
    f2Body:
      "Трейдердин ар бир бүтүмү, PnL жана позиция тарыхы Hyperliquid блокчейнинде көрүнөт. Кара кутулар жок.",
    f3Title: "Сиз башкарасыз",
    f3Body:
      "Лимиттер, стоптор, позициянын өлчөмү жана трейдерлердин тизмеси — баары стратегияңызга ылайыкталат.",
  },
  how: {
    eyebrow: "Кантип баштоо керек",
    heading1: "Каттоодон",
    heading2: "биринчи операцияга чейин —",
    heading3: "эки мүнөт.",
    lead: "Документсиз, кезексиз жана узак текшерүүсүз. Тиркемени орнотуңуз — эки мүнөттөн кийин активдерди башкарасыз.",
    cta: "Аккаунт түзүү",
    stepLabel: "КАДАМ",
    s1Title: "Аккаунт түзүңүз",
    s1Body:
      "Социалдык тармактар, Google, Apple же классикалык сид-фраза аркылуу бир нече мүнөттө катталыңыз — документсиз жана верификациясыз.",
    s2Title: "Капчыкты толтуруңуз",
    s2Body:
      "Картаны толтуруңуз же крипто которуу алыңыз — 25тен ашык EVM тармагы колдоого алынат: Ethereum, Base, Arbitrum, Optimism жана башкалар.",
    s3Title: "Криптога киришиңиз",
    s3Body:
      "Алмашуу, тармактар арасындагы бридж, Hyperliquid перптерин копитрейдинг жана dApps'ке туташуу — баары бир «Аракеттер» экранында.",
    promiseTitle: "Келишимде бирөө да жылдызча жок.",
    promise1: "Негизги колдонуу үчүн KYC жок",
    promise2: "Жашыруун комиссия жана жазылуу жок",
    promise3: "Кыргызча 24/7 колдоо",
  },
  social: {
    eyebrow: "Ыңгайлуу кирүү",
    heading1: "Адаттагы сервис",
    heading2: "аркылуу кириңиз.",
    lead: "Узун формасыз жана ырастоосуз — социалдык тармактар, Google, Apple же Discord аркылуу бир нече секундда кириңиз.",
    c1: "Татаал формасыз тез каттоо",
    c2: "Профилиңизге негизделген смарт-аккаунт",
    c3: "Толук көзөмөл үчүн сид-фразаны түзүү",
    c4: "EOA жана смарт-аккаунттар бир жерде",
  },
  testi: {
    eyebrow: "Пикирлер",
    heading: "Колдонуучулар эмне дейт.",
    rating: "Google Play'де 4.9 · 50K+ колдонуучу",
    q1Text:
      "Zifrovoy — мен колдонгон эң мыкты капчык. Тез которуулар, төмөн комиссиялар жана сонун интерфейс.",
    q1Name: "Алексей М.",
    q1Role: "Блокчейн-аналитик",
    q1Init: "АМ",
    q2Text:
      "Zifrovoy аркылуу Hyperliquid перптерин копитрейдинг — мыкты трейдерлерди бир баскыч менен кайталайм. Эки айда +60% жасадым.",
    q2Name: "Екатерина К.",
    q2Role: "Жеке инвестор",
    q2Init: "ЕК",
    q3Text:
      "EOA жана смарт-аккаунттарга мыкты колдоо. Социалдык тармактар аркылуу кирүү — узун сид-фразаларды эстеп калуунун кереги жок.",
    q3Name: "Дмитрий С.",
    q3Role: "Web3 иштеп чыгуучу",
    q3Init: "ДС",
  },
  faq: {
    eyebrow: "FAQ",
    heading1: "Көп берилген",
    heading2: "суроолор.",
    lead: "Zifrovoy жөнүндө билиш керек болгон баары — коопсуздуктан Hyperliquid копитрейдингине чейин.",
    cta: "Аккаунт түзүү",
    supportEyebrow: "Жооп таппадыңызбы?",
    supportTitle1: "Бизге жазыңыз — бир мүнөттө",
    supportTitle2: "чечүүгө жардам беребиз.",
    items: [
      {
        q: "Zifrovoy деген эмне?",
        a: "Zifrovoy — активдерди сактоо, жөнөтүү жана алмашуу үчүн кастодиалдык эмес криптокапчык. EOA жана смарт-аккаунттарды, ошондой эле Hyperliquid'те перптерди бир баскыч менен копитрейдингди колдойт.",
      },
      {
        q: "Zifrovoy коопсузбу?",
        a: "Ооба. Zifrovoy — толугу менен кастодиалдык эмес капчык: ачкычтарды сиз гана көзөмөлдөйсүз. Алдыңкы шифрлөө, аппараттык капчыктарга колдоо, жеке ачкычтар түзмөгүңүздөн эч качан чыкпайт.",
      },
      {
        q: "Кайсы криптовалюталар колдоого алынат?",
        a: "Бардык EVM-шайкеш активдер: Ethereum, Polygon, Avalanche, Arbitrum, Optimism, Base жана башка тармактар. USDT, USDC стейблкоиндери жана каалаган ERC-20 токендери, ошондой эле Hyperliquid перптери.",
      },
      {
        q: "Hyperliquid'те копитрейдинг кантип иштейт?",
        a: "30 күндүк кирешелүүлүк боюнча топтон трейдерди тандайсыз, «Көзөмөлдөө» баскычын басасыз — капчык анын артынан позицияларды өзү ачып, жабат. Бардык бүтүмдөр Hyperliquid смарт-контракттары аркылуу өтөт: акчаңыз жана ачкычтарыңыз сизде калат.",
      },
      {
        q: "Транзакциялар канчалык тез өтөт?",
        a: "Реалдуу убакытта. Ылдамдык тармактан көз каранды, бирок биз процессти оптималдаштырып, транзакцияларды ылдамдатууну сунуштайбыз. Hyperliquid — секунддан аз финализация.",
      },
      {
        q: "Жеке инсандыкты ырастоо керекпи?",
        a: "Негизги колдонуу үчүн — жок. Капчык түзүп, ошол замат баштаңыз. Верификация айрым функциялар үчүн гана керек.",
      },
    ],
  },
  cta: {
    eyebrow: "Бүгүн баштаңыз",
    heading1: "Сынап көрүңүз —",
    heading2: "30 секунд алат.",
    lead: "Жазылуусуз жана жашыруун төлөмсүз. Активдерди башкарып, мыкты трейдерлерди бүгүндөн баштап көчүрүңүз.",
    button: "Бекер аккаунт түзүү",
  },
  footer: {
    description:
      "Криптовалютаны сактаңыз, жөнөтүңүз жана алмаштырыңыз — ашыкча кадамсыз жана жашыруун комиссиясыз. Hyperliquid перптеринин копитрейдинги кошулган.",
    copyright: "© 2026 Zifrovoy. Бардык укуктар корголгон.",
    col1Title: "Продукт",
    col1Items: ["Капчык", "Копитрейдинг", "Алмашуу", "Коопсуздук", "Баалар"],
    col2Title: "Компания",
    col2Items: ["Биз жөнүндө", "Блог", "Карьера", "Байланыш"],
    col3Title: "Колдоо",
    col3Items: ["Жардам", "Документация", "Шарттар", "Купуялык"],
  },
};

const uz: Dict = {
  nav: {
    advantages: "Afzalliklar",
    copytrading: "Copy trading",
    howStart: "Qanday boshlash",
    faq: "FAQ",
    createAccount: "Hisob yaratish",
  },
  hero: {
    title1: "Barcha aktivlar.",
    title2: "Bitta hamyon.",
    description:
      "Barcha aktivlar bitta ilovada: soniyalarda o'tkazmalar, birja kursi bo'yicha ayirboshlash va Hyperliquid'da perplar uchun copy trading. Odatdagi ijtimoiy tarmoqlar orqali kirish, yashirin komissiyalarsiz.",
    cta: "Bepul boshlash",
  },
  stats: {
    s1: "Qo'llab-quvvatlanadigan tarmoqlar",
    s2: "Faol foydalanuvchilar",
    s3: "Tranzaksiyalar hajmi",
    s4: "Minimal komissiya",
  },
  info: {
    eyebrow: "Nima uchun Zifrovoy",
    heading: "Tanishing — Zifrovoy.",
    cta: "Batafsil",
    lead: "Yana bir hamyon emas, balki siz har kuni haqiqatan ochadigan hamyon. Kamroq bosish, ko'proq nazorat — yashirin komissiyalarsiz.",
    card1Title1: "Sizning kalitlaringiz —",
    card1Title2: "faqat sizniki",
    card1Body:
      "Kustodial bo'lmagan hamyon: shaxsiy kalitlar faqat sizning qurilmangizda saqlanadi. Bizda ularga kirish yo'q — texnik jihatdan ham.",
    card2Title1: "Yubordingiz —",
    card2Title2: "yetib bordi.",
    card2Body:
      "O'tkazmalar soniyalarda o'tadi. Osilib qolgan tranzaksiyalar yo'q — manzilni yuboring va ilovani yopishingiz mumkin.",
    card3Title1: "Komissiyalar",
    card3Title2: "tishlamaydi",
    card3Body:
      "Birja kursi bo'yicha ayirboshlash — yashirin ustamalar va mayda shriftsiz. Yakuniy summani «Tasdiqlash» tugmasini bosishdan oldin ko'rasiz.",
  },
  perps: {
    eyebrow: "Yangi · Hyperliquid",
    heading1: "Copy trading —",
    heading2: "eng yaxshilar bilan savdo qil.",
    lead: "Eng yaxshi treyderlarga obuna bo'ling — ularning har bir bitimi hamyoningizda avtomatik takrorlanadi. Mablag' va kalitlarni hech kimga bermay.",
    liveBadge: "Live · Hyperliquid",
    featTitle1: "Bir bosish —",
    featTitle2: "va siz pozitsiyadasiz.",
    featBody:
      "Treyder pozitsiya ochadi — hamyoningiz uni xuddi shu hajmda va shu narxda takrorlaydi. Kalitlarni bermay, kechikishsiz.",
    ctaConnect: "Copy trading'ni yoqish",
    f1Title: "Real vaqtda ijro",
    f1Body:
      "Pozitsiyalar treyder ortidan ochilib, yopiladi — millisekundlik kechikish, sirpanishsiz.",
    f2Title: "To'liq onchain shaffoflik",
    f2Body:
      "Treyderning har bir bitimi, PnL va pozitsiya tarixi Hyperliquid blokcheynida ko'rinadi. Qora qutilar yo'q.",
    f3Title: "Siz boshqarasiz",
    f3Body:
      "Limitlar, stoplar, pozitsiya hajmi va treyderlar ro'yxati — barchasi strategiyangizga moslashtiriladi.",
  },
  how: {
    eyebrow: "Qanday boshlash",
    heading1: "Ro'yxatdan o'tishdan",
    heading2: "birinchi operatsiyagacha —",
    heading3: "ikki daqiqa.",
    lead: "Hujjatlarsiz, navbatsiz va uzoq tekshiruvlarsiz. Ilovani o'rnating — ikki daqiqadan keyin aktivlarni boshqaring.",
    cta: "Hisob yaratish",
    stepLabel: "QADAM",
    s1Title: "Hisob yarating",
    s1Body:
      "Ijtimoiy tarmoqlar, Google, Apple yoki klassik seed-frazasi orqali bir necha daqiqada ro'yxatdan o'ting — hujjatlarsiz va verifikatsiyasiz.",
    s2Title: "Hamyonni to'ldiring",
    s2Body:
      "Kartani to'ldiring yoki kripto o'tkazma oling — 25+ EVM tarmoqlari qo'llab-quvvatlanadi: Ethereum, Base, Arbitrum, Optimism va boshqalar.",
    s3Title: "Kriptoga sho'ng'ing",
    s3Body:
      "Ayirboshlash, tarmoqlar orasidagi bridge, Hyperliquid'da perplar uchun copy trading va dApps'ga ulanish — barchasi bitta «Harakatlar» ekranida.",
    promiseTitle: "Shartnomada bittayam yulduzcha yo'q.",
    promise1: "Asosiy foydalanish uchun KYC yo'q",
    promise2: "Yashirin komissiyalar va obunalar yo'q",
    promise3: "O'zbek tilida 24/7 qo'llab-quvvatlash",
  },
  social: {
    eyebrow: "Qulay kirish",
    heading1: "Odatdagi xizmat",
    heading2: "orqali kiring.",
    lead: "Uzun formalar va tasdiqlarsiz — ijtimoiy tarmoqlar, Google, Apple yoki Discord orqali bir necha soniyada kiring.",
    c1: "Murakkab formalarsiz tezkor ro'yxatdan o'tish",
    c2: "Profilingiz asosida smart-hisob",
    c3: "To'liq nazorat uchun seed-frazasi yaratish",
    c4: "EOA va smart-hisoblar bir joyda",
  },
  testi: {
    eyebrow: "Sharhlar",
    heading: "Foydalanuvchilar nima deydi.",
    rating: "Google Play'da 4.9 · 50K+ foydalanuvchi",
    q1Text:
      "Zifrovoy — men ishlatgan eng yaxshi hamyon. Bir zumda o'tkazmalar, past komissiyalar va zo'r interfeys.",
    q1Name: "Alex M.",
    q1Role: "Blokcheyn-tahlilchi",
    q1Init: "AM",
    q2Text:
      "Zifrovoy orqali Hyperliquid'da perplar uchun copy trading — eng yaxshi treyderlarni bir bosishda kuzataman. Ikki oyda +60% qildim.",
    q2Name: "Katya K.",
    q2Role: "Xususiy investor",
    q2Init: "KK",
    q3Text:
      "EOA va smart-hisoblarga ajoyib qo'llab-quvvatlash. Ijtimoiy tarmoqlar orqali kirish — nihoyat uzun seed-frazalarni yodlashning hojati yo'q.",
    q3Name: "Dmitriy S.",
    q3Role: "Web3 ishlab chiquvchisi",
    q3Init: "DS",
  },
  faq: {
    eyebrow: "FAQ",
    heading1: "Tez-tez beriladigan",
    heading2: "savollar.",
    lead: "Zifrovoy haqida bilishingiz kerak bo'lgan hamma narsa — xavfsizlikdan Hyperliquid copy trading'gacha.",
    cta: "Hisob yaratish",
    supportEyebrow: "Javob topa olmadingizmi?",
    supportTitle1: "Bizga yozing — bir daqiqada",
    supportTitle2: "hal qilishga yordam beramiz.",
    items: [
      {
        q: "Zifrovoy nima?",
        a: "Zifrovoy — aktivlarni saqlash, yuborish va ayirboshlash uchun kustodial bo'lmagan kripto hamyon. EOA va smart-hisoblarni, shuningdek Hyperliquid'da perplar uchun bir bosishli copy trading'ni qo'llab-quvvatlaydi.",
      },
      {
        q: "Zifrovoy xavfsizmi?",
        a: "Ha. Zifrovoy — to'liq kustodial bo'lmagan hamyon: kalitlarni faqat siz boshqarasiz. Ilg'or shifrlash, apparat hamyonlarini qo'llab-quvvatlash, shaxsiy kalitlar hech qachon qurilmangizdan chiqmaydi.",
      },
      {
        q: "Qaysi kriptovalyutalar qo'llab-quvvatlanadi?",
        a: "Barcha EVM-mos aktivlar: Ethereum, Polygon, Avalanche, Arbitrum, Optimism, Base va boshqa tarmoqlar. USDT, USDC stabilkoinlari va istalgan ERC-20 tokenlari, shuningdek Hyperliquid perplari.",
      },
      {
        q: "Hyperliquid'da copy trading qanday ishlaydi?",
        a: "30 kunlik daromadlilik bo'yicha treyderni tanlang, «Kuzatish» tugmasini bosing — hamyon uning ortidan pozitsiyalarni o'zi ochib, yopadi. Barcha bitimlar Hyperliquid smart-shartnomalari orqali o'tadi: mablag'ingiz va kalitlaringiz sizda qoladi.",
      },
      {
        q: "Tranzaksiyalar qanchalik tez o'tadi?",
        a: "Real vaqtda. Tezlik tarmoqqa bog'liq, lekin biz jarayonni optimallashtiramiz va tranzaksiyalarni tezlashtirishni taklif qilamiz. Hyperliquid — soniyaning ulushida yakunlash.",
      },
      {
        q: "Shaxsni tasdiqlash kerakmi?",
        a: "Asosiy foydalanish uchun — yo'q. Hamyon yarating va darhol boshlang. Verifikatsiya faqat ayrim funksiyalar uchun kerak.",
      },
    ],
  },
  cta: {
    eyebrow: "Bugun boshlang",
    heading1: "Sinab ko'ring —",
    heading2: "30 soniya oladi.",
    lead: "Obunasiz va yashirin to'lovlarsiz. Aktivlarni boshqaring va eng yaxshi treyderlarni bugundan ko'chirib oling.",
    button: "Bepul hisob yaratish",
  },
  footer: {
    description:
      "Kriptovalyutani saqlang, yuboring va ayirboshlang — ortiqcha qadamlar va yashirin komissiyalarsiz. Hyperliquid perplari uchun copy trading kiritilgan.",
    copyright: "© 2026 Zifrovoy. Barcha huquqlar himoyalangan.",
    col1Title: "Mahsulot",
    col1Items: ["Hamyon", "Copy trading", "Ayirboshlash", "Xavfsizlik", "Narxlar"],
    col2Title: "Kompaniya",
    col2Items: ["Biz haqimizda", "Blog", "Karyera", "Aloqa"],
    col3Title: "Qo'llab-quvvatlash",
    col3Items: ["Yordam", "Hujjatlar", "Shartlar", "Maxfiylik"],
  },
};

const dicts: Record<Lang, Dict> = { ru, kk, ky, uz, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "zifrovoy.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "ru";
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && dicts[saved]) return saved;
    if (window.location.pathname.replace(/\/+$/, "").startsWith("/kg")) {
      return "ky";
    }
    return "ru";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang: setLangState, t: dicts[lang] }),
    [lang]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
