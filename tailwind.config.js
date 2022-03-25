module.exports = {
  // 어느 컴포넌트 혹은 page에서 Tailwind를 사용할 것인지 Tailwind에게 말해줌
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
