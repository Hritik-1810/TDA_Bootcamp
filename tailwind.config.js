/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171829",
        navy: "#1a1a2e",
        gold: "#e2b714",
        coral: "#e63946",
        teal: "#2a9d8f",
        sky: "#4a90d9"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(23, 24, 41, 0.08)"
      }
    }
  },
  plugins: []
};
