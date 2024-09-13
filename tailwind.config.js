/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {},
    container: {
      padding: {
        md: "10rem"
      }
    }
  },
  plugins: [],
}

