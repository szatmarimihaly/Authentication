import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en : {
        translation: {
            "header-about" : "About",
            "header-company" : "Company",
            "header-contact" : "Contact",
            "header-login" : "Login",
        }
    },

    hu : {
        translation: {
            "header-about" : "Rólunk",
            "header-company" : "Cég",
            "header-contact" : "Kapcsolat",
            "header-login" : "Bejelentkezés",
        }
    }
}
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng : 'hu',
        fallbackLng: 'hu',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;