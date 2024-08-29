/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Căn giữa container
        padding: '1rem', // Thêm khoảng cách padding theo yêu cầu
      },
    },
  },
  plugins: [],
}
