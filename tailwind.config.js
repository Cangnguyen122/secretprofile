/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(244, 114, 182, 0.28)",
        neon: "0 0 30px rgba(34, 197, 94, 0.35)",
      },
    },
  },
  plugins: [],
};
