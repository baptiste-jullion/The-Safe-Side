// https://nuxt.com/docs/api/configuration/nuxt-config
import viteCompression from "vite-plugin-compression";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/seo",
    "nuxt-marquee",
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "DM+Sans": [400, 500],
          "Just+Me+Again+Down+Here": true,
        },
      },
    ],
    [
      "nuxt-mail",
      {
        message: {
          to: "baptistejullion+nuxtmail@gmail.com",
        },
        smtp: {
          host: "smtp.gmail.com",
          port: 587,
          auth: {
            user: "baptistejullion@gmail.com",
            pass: "ggpu pvkh sgab jjak",
          },
        },
      },
    ],
    "@nuxtjs/strapi",
  ],
  strapi: {
    version: "v4",
    prefix: "/api",
  },
  runtimeConfig: {
    public: {
      strapiBaseUri: process.env.STRAPI_URL_UPLOADS,
    },
    apiToken: process.env.STRAPI_TOKEN,
    apiUri: process.env.STRAPI_URL,
  },
  css: ["@/assets/global.scss"],
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
    },
  },
  site: { name: "The Safe Side" },
  vite: {
    plugins: [viteCompression()],
  },
});
