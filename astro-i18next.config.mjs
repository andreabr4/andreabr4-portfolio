import en from "./public/locales/en/translation.json" assert {type: "json"};
import es from "./public/locales/es/translation.json" assert {type: "json"};

export default {
    defaultLocale: "es",
    locales: ["en", "es"],
    fallbackLng : "es",
    i18nextServer: {
      debug: true,
      resources: {
        en: {
          translation: {
              ...en
          }
        },
        es: {
          translation: {
              ...es
          }
        }
      },
      initImmediate: false,
      preload: true,
      backend: null
    },
    i18nextServerPlugins: {
      fsBackend: null
    }
  };



// /** @type {import('astro-i18next').AstroI18nextConfig} */
// export default {
//     defaultLocale: "es",
//     locales: ["en", "es"],
//   };