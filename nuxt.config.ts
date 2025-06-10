// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: [
        "@/assets/css/default.css",
        "@/assets/css/global.css"
  ],
  ui: {
    prefix: 'Glass'
  },
  modules: ["@nuxt/icon", "@nuxt/ui", "@nuxtjs/tailwindcss"],
});