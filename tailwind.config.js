/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", lg: "2rem", xl: "5rem" } },
    extend: {
      colors: { ink:"#000000", paper:"#FFFFFF", muted:"#AAAAAA", lime:"#C6FF00" },
      borderRadius: { xl: "24px", "2xl": "32px" },
fontFamily: {
  sans: ['var(--font-inter)', 'sans-serif'],
  serif: ['var(--font-playfair)', 'serif'],
  script: ['var(--font-vibes)', 'cursive'],
}
      boxShadow: { soft:"0 8px 24px rgba(0,0,0,.12)", glow:"0 12px 40px rgba(198,255,0,.35)" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
