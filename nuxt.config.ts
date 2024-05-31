import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const publicWebUrl = process.env.PUBLIC_WEB_URL || "https://os.ewe.moe";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
    "nuxt-seo-experiments",
    "nuxt-route-meta",
    [
      "nuxt-content-git",
      {
        createdAtName: "gitCreatedAt",
        updatedAtName: "gitUpdatedAt",
      },
    ],
  ],
  routeRules: {
    "/blog/6": { redirect: "/blog/202405-progress-report" },
    "/blog/5": { redirect: "/blog/202404-progress-report" },
    "/blog/2": { redirect: "/blog/202403-eweos-roadmap" },
  },
  runtimeConfig: {
    public: {
      siteUrl: publicWebUrl,
    },
  },
  site: {
    url: publicWebUrl,
    name: "eweOS",
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  pages: true,
  css: ["@mdi/font/css/materialdesignicons.min.css"],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
    },
  },
  app: {
    head: {
      titleTemplate: "eweOS | %s",
      meta: [
        {
          name: "keywords",
          content:
            "eweOS,Linux,distro,distribution,ewe,musl,lightweight,busybox,rolling-release",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
    },
  },
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "eweOS",
      url: "https://os.ewe.moe",
      logo: "https://os.ewe.moe/icon.png",
    },
  },
});
