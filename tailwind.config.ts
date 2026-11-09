import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      colors: {
        // Dynamic Theme Tokens using CSS Variables
        brand: {
          50: "var(--c-brand-50)",
          100: "var(--c-brand-100)",
          200: "var(--c-brand-200)",
          700: "var(--c-brand-700)",
          800: "var(--c-brand-800)",
          900: "var(--c-brand-900)",
        },
        accent: {
          400: "var(--c-accent-400)",
          500: "var(--c-accent-500)",
          600: "var(--c-accent-600)",
          700: "var(--c-accent-700)",
        },
        surface: {
          bg: "var(--c-bg)",
          card: "var(--c-card)",
          subtle: "var(--c-subtle)",
          border: "var(--c-border)",
        },
        ink: {
          900: "var(--c-text-900)",
          700: "var(--c-text-700)",
          500: "var(--c-text-500)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
