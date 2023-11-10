// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize the i18n object
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // English translations go here
        }
      },
      fr: {
        translation: {
          // French translations go here
        }
      },
      de: {
        translation: {
          // German translations go here
        }
      }
    },
    lng: 'en', // Set the initial language
    fallbackLng: 'en', // Set the fallback language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
