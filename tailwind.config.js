/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  safelist: [
    "h-fit",
    "md:col-span-4",
    "pt-0",
    "md:col-span-8",
    "md:pt-20",
    "md:col-span-5",
    "md:col-span-7",
    "md:pt-10",
  ],
  theme: {
    extend: {
      fontFamily: {
        "general-sans": ["GeneralSans-Variable", "sans-serif"],
        cabinet: ["CabinetGrotesk-Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
