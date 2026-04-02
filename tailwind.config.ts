import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#C5A059', // Metallic Gold Logo
          600: '#B48A3F',
          700: '#a16207',
          800: '#854d0e',
          900: '#78350f',
          950: '#451a03',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0A1E35', // Refined Deep Logo Blue
          950: '#050f1b',
        },
        mint: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#00D4FF', // Mint Aurora Glow
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          900: '#134e4a',
        },
        clean: {
          50: '#FDFCFF', 
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(10, 30, 53, 0.08)",
        "glass-hover": "0 8px 48px 0 rgba(197, 160, 89, 0.15)", // Gold-tinted shadow
        panel: "0 10px 40px -10px rgba(10, 30, 53, 0.1)",
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.05)"
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at 15% 20%, rgba(14, 165, 233, 0.08), transparent 42%), radial-gradient(circle at 85% 10%, rgba(20, 184, 166, 0.08), transparent 34%), radial-gradient(circle at 50% 120%, rgba(14, 165, 233, 0.1), transparent 35%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "shine": "shine 1.5s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        shine: {
          "100%": { transform: "translateX(150%)" },
        },
      }
    }
  },
  plugins: []
};

export default config;
