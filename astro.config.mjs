import { defineConfig } from 'astro/config';
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // experimental: {
  //   integrations: true,
  // },
  integrations: [
    tailwind(),
    // astroI18next({
    //   baseLanguage: "es",
    //   i18next: {
    //     debug: true,
    //     supportedLngs: ["en", "es"],
    //   }
    // })
  ]
});