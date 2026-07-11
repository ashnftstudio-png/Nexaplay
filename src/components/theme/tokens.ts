export const themeTokens = {
  colors: {
    background: { base: "#070A12", elevated: "#0B1020", immersive: "#0E1224" },
    surface: { subtle: "rgba(255,255,255,0.04)", panel: "rgba(15,23,42,0.72)", strong: "#12182B", glass: "rgba(14,18,36,0.62)" },
    accent: { cyan: "#22D3EE", cyanSoft: "#A5F3FC", purple: "#A78BFA", purpleDeep: "#7C3AED" },
    state: { success: "#34D399", warning: "#FBBF24", error: "#FB7185" },
    neutral: { 50: "#F8FAFC", 100: "#F1F5F9", 200: "#E2E8F0", 300: "#CBD5E1", 400: "#94A3B8", 500: "#64748B", 600: "#475569", 700: "#334155", 800: "#1E293B", 900: "#0F172A", 950: "#020617" },
  },
  typography: { xs: "0.75rem", sm: "0.875rem", base: "1rem", lg: "1.125rem", xl: "1.25rem", "2xl": "1.5rem", "3xl": "1.875rem", "4xl": "2.25rem", "5xl": "3rem", "6xl": "3.75rem" },
  spacing: { 1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 5: "1.25rem", 6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem", 20: "5rem", 24: "6rem" },
  radii: { sm: "0.5rem", md: "0.75rem", lg: "1rem", xl: "1.25rem", "2xl": "1.5rem", "3xl": "2rem", full: "9999px" },
  shadows: { glow: "0 0 40px rgba(34,211,238,0.28)", panel: "0 24px 80px rgba(0,0,0,0.35)", purple: "0 0 48px rgba(167,139,250,0.24)" },
  blur: { sm: "8px", md: "16px", lg: "24px", xl: "32px" },
  zIndex: { base: 0, dropdown: 30, sticky: 40, drawer: 50, modal: 60, toast: 70, tooltip: 80 },
  duration: { fast: "120ms", normal: "200ms", slow: "320ms", slower: "500ms" },
} as const;
