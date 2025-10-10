import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
      detection: {
      order: ['cookie','localStorage', 'navigator'], // Custom order
      caches: ['cookie','localStorage'], // Where to cache detected language
    },
    backend: {
      // Use Vite's BASE_URL so paths resolve correctly when the app is deployed
      // (public/ is served from the site root, so combine with the configured base)
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;