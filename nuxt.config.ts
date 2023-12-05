// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "nuxt-icon"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  css: ["@/assets/css/global.scss"],
});
