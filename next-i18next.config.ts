// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import path from 'path';

const langs = ['en', 'fr'];

module.exports = {
  i18n: {
    locales: langs,
    defaultLocale: 'en',
  },
  localePath: path.resolve('./public/locales'),
};

// (async () =>
//   await i18n
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//       fallbackLng: 'en',
//       lng: 'en',
//       debug: false,
//       ns: ['translation'],
//       defaultNS: 'translation',
//       whitelist: langs,
//       backend: {
//         loadPath: `/locales/{{lng}}/{{ns}}.json`,
//       },
//       react: {
//         useSuspense: false,
//       },
//     }))();

// export default i18n;
