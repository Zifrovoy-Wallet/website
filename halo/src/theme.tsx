import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";

export type Variant = "default" | "kg";

export type CtaMedia = { type: "video"; src: string } | { type: "image"; src: string };

export interface Theme {
  variant: Variant;
  bodyBg: string;
  dark: string;
  tint: string;
  accent: string;
  /** CTA / primary-button background */
  cta: string;
  /** CTA / primary-button hover background */
  ctaHover: string;
  /** Color of the page-level dot pattern (rgba string) */
  patternDot: string;
  /** Full CSS background-image value (url(...)) for the page ornament pattern */
  patternUrl: string;
  /** rgba triple used in gradient overlays (e.g. "214,207,237") */
  tintRgb: string;
  /** rgba triple for the darker shade in overlays (perps section) */
  darkAccentRgb: string;
  /** Avatar gradient on dark cards (e.g. testimonial dark card) */
  avatarGradOnDark: string;
  /** Avatar gradient on light/tint cards */
  avatarGradOnLight: string;
  /** Avatar text color on dark cards (sits on the light gradient) */
  avatarTextOnDark: string;
  /** Hover star color on dark testimonial cards */
  starOnDark: string;
  /** Bloom color for phone mockups on dark cards */
  bloomOnDarkRgba: string;
  assets: {
    hero: string;
    perps: string;
    social: string;
    socialPoster?: string;
    infoCard: string;
    cta: CtaMedia;
  };
}

/** Intricate rosette ornament tiled at 80×80. Two concentric rings, a
 *  central diamond, 8 rays (4 cardinal + 4 diagonal) reaching between
 *  the rings, plus tiny dots at the tile edges that form a secondary
 *  rhythm between motifs. Color + opacity baked in per theme; encoded
 *  as a data URL so it ships as a single background-image. */
const ornamentSvg = (hex: string, opacity: number) =>
  `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'>` +
  `<g fill='none' stroke='${hex}' stroke-width='0.9' opacity='${opacity}' stroke-linecap='round'>` +
  `<circle cx='40' cy='40' r='24'/>` +
  `<circle cx='40' cy='40' r='12'/>` +
  `<path d='M40 34L46 40L40 46L34 40Z'/>` +
  `<path d='M40 28V16M40 52V64M28 40H16M52 40H64'/>` +
  `<path d='M48.5 31.5L57 23M48.5 48.5L57 57M31.5 48.5L23 57M31.5 31.5L23 23'/>` +
  `<circle cx='40' cy='4' r='1.2'/>` +
  `<circle cx='40' cy='76' r='1.2'/>` +
  `<circle cx='4' cy='40' r='1.2'/>` +
  `<circle cx='76' cy='40' r='1.2'/>` +
  `</g></svg>`;

const ornamentUrl = (hex: string, opacity: number) =>
  `url("data:image/svg+xml;utf8,${ornamentSvg(hex.replace("#", "%23"), opacity)}")`;

const themes: Record<Variant, Theme> = {
  default: {
    variant: "default",
    bodyBg: "#F5F5F5",
    dark: "#2B2644",
    tint: "#E8E0F5",
    accent: "#C7B5F0",
    cta: "#000000",
    ctaHover: "#1F2937",
    patternDot: "rgba(43,38,68,0.07)",
    patternUrl: "none",
    tintRgb: "214,207,237",
    darkAccentRgb: "180,170,210",
    avatarGradOnDark: "linear-gradient(135deg, #E8E0F5, #8B7AC4)",
    avatarGradOnLight: "linear-gradient(135deg, #5A4F8A, #2B2644)",
    avatarTextOnDark: "#2B2644",
    starOnDark: "#C7B5F0",
    bloomOnDarkRgba: "167,139,250",
    assets: {
      hero: "/hero.mp4",
      perps: "/perps.mp4",
      social: "/social.mp4",
      socialPoster: "/social-bg.png",
      infoCard: "/card.png",
      cta: { type: "video", src: "/usecase.mp4" },
    },
  },
  kg: {
    variant: "kg",
    bodyBg: "#ECB389",
    dark: "#9A2A2D",
    tint: "#FBEAC8",
    accent: "#D9A45E",
    cta: "#9A2A2D",
    ctaHover: "#761F22",
    patternDot: "rgba(122,26,31,0.11)",
    patternUrl: ornamentUrl("#7A1A1F", 0.18),
    tintRgb: "251,234,200",
    darkAccentRgb: "217,164,94",
    avatarGradOnDark: "linear-gradient(135deg, #FBEAC8, #C77B38)",
    avatarGradOnLight: "linear-gradient(135deg, #B83232, #6F1A1D)",
    avatarTextOnDark: "#6F1A1D",
    starOnDark: "#F5D188",
    bloomOnDarkRgba: "217,164,94",
    assets: {
      hero: "/kg/hero.mp4",
      perps: "/kg/perps.mp4",
      social: "/kg/social.mp4",
      infoCard: "/kg/card.png",
      cta: { type: "video", src: "/kg/cta.mp4" },
    },
  },
};

function detectVariantFromPath(): Variant {
  if (typeof window === "undefined") return "default";
  return window.location.pathname.replace(/\/+$/, "").startsWith("/kg")
    ? "kg"
    : "default";
}

const ThemeContext = createContext<Theme | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const variant: Variant = useMemo(() => detectVariantFromPath(), []);
  const theme = themes[variant];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--body-bg", theme.bodyBg);
    root.style.setProperty("--dark", theme.dark);
    root.style.setProperty("--tint", theme.tint);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--cta-bg", theme.cta);
    root.style.setProperty("--cta-bg-hover", theme.ctaHover);
    root.style.setProperty("--pattern-dot", theme.patternDot);
    root.style.setProperty("--pattern-url", theme.patternUrl);
    root.dataset.variant = theme.variant;
  }, [theme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
