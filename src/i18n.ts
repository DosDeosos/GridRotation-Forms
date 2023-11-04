import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import en from "./assets/locales/en.json";
import th from "./assets/locales/th.json";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "th",
    fallbackLng: "th",
    debug: false,
    resources: { en: { translation: en }, th: { translation: th } },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
