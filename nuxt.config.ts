// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  srcDir: "src/",
  build: {
    transpile: ["vuetify"],
  },
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "nuxt-gtag",
    "@nuxtjs/i18n",
  ],
  gtag: {
    id: process.env.GTAG_ID,
    initCommands: [
      // Setup up consent mode
      [
        "consent",
        "default",
        {
          ad_user_data: "denied",
          ad_personalization: "denied",
          ad_storage: "denied",
          analytics_storage: "denied",
          wait_for_update: 500,
        },
      ],
    ],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      {
        code: "en",
        language: "en-US",
      },
      { code: "fr", language: "fr-FR" },
      { code: "de", language: "de-DE" },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
    },
  },
});
