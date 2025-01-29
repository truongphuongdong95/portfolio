import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(186px, 1fr))",
      },
    },
    screens: {
      "mobile-xs": "320px",
      // => @media (min-width: 320px) { ... }
      "mobile-sm": "380px",
      // => @media (min-width: 380px) { ... },
      sm: "640px",
      // => @media (min-width: 640px) { ... },
      md: "768px",
      // => @media (min-width: 768px) { ... },
      lg: "1024px",
      // => @media (min-width: 1024px) { ... },
    },
  },
  plugins: [],
} satisfies Config;
