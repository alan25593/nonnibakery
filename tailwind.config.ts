import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-contacto": 'url("/assets/Banners/contacto.webp")',
        "banner-home": 'url("/assets/Banners/inicio.webp")',
        "banner-discount": 'url("/assets/Banners/home.webp")',
        "banner-trending-1": 'url("/assets/img/torta.webp")',
        "banner-trending-2": 'url("/assets/img/muffin.webp")',
        "banner-trending-3": 'url("/assets/img/personalizado.webp")',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        vanilla: {
          light: '#fdf5e6', // Color claro
          DEFAULT: '#f5deb3', // Color base
          dark: '#d2b48c', // Color oscuro
        },
        coffee: {
          light: '#d2a679',
          DEFAULT: '#a0522d',
          dark: '#8b4513',
        },
        purple: "#9747FF", 
        "gray-light": "#F5F5F5",
        
      },
      fontFamily: {
        sans: ["var(--font-tenor-sans)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        "mrs-saint-delafield": ["var(--font-mrs-saint-delafield)", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "redcoach-lg": "0px 4px 16px 0px rgba(0, 0, 0, 0.10)",
        "redcoach-sm": "0px 3px 15px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
