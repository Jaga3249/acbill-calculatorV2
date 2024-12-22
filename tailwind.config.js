import animatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        primaryGray: "#CDCDCD",
        primaryWhite: "#F3F3F3",
        primaryBlack: "#000000",
        primaryGreen: "#6FCC39",
        septenaryWhite: "#FFFFFF",
        secondaryWhite: "#D5D5D5",
        secondaryBlack: "#191919",
        secondaryGray: "#33363A",
        tertiaryWhite: "#CBD5E1",
        tertiaryGray: "#6A6A6A",
        querternaryWhite: "#C6C6C6",
        quinaryWhite: "#F5F5F5",
        quinaryGray: "#696969",
        senaryWhite: "#EFEFEF",
        senaryGray: "#F4F4F4",
        septenaryGray: "#717171",
        customBlack: "#33363A",
        octonaryGray: "#AFADAD",
        primaryBlue: "#2563EB",
        tertiaryBlack: "#2C2D2F",
        quaternaryBlack: "#191919",
        lightGray: "#6A6A6A",
        secondaryGreen: "#299219",
        tertiaryGreen: "#EBFFDD",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
