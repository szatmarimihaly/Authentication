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
            "hero-h1" : "Discover the World of Artificial Intelligence",
            "hero-p" : "With our web application, you can unlock the full potential of AI! Intelligent solutions, automation, and innovation—all in one place. Start creating today!",
            "whatWeDo" : "What we do?",
            "signUp" : "Sign Up",
            "signIn" : "Sign In",
            "signUpF" : "Sign Up",
            "username" : "Username",
            "password" : "Password",
            "password_confirmation" : "Confirm Password: ",
            "email" : "Email",
            "submitSignIn" : "Sign In",
            "submitSignUp" : "Sign Up",
            "createAccp" : "Don't have an account yet? Create an account",
            "loginAccp" : "Already have an account? Sign in to your account",
            "forgotPasswordP" : "Forgot your password?",
            "backToHome" : "Back to Home",

            "WelcomeUser" : "Welcome",
            "LogoutBtn" : "Log Out",
        }
    },

    hu : {
        translation: {
            "header-about" : "Rólunk",
            "header-company" : "Cég",
            "header-contact" : "Kapcsolat",
            "header-login" : "Bejelentkezés",
            "hero-h1" : "Fedezd fel a mesterséges intelligencia világát",
            "hero-p" : "Webalkalmazásunkkal az AI lehetőségeit maximálisan kihasználhatod! Intelligens megoldások, automatizáció és innováció egy helyen. Kezdj el alkotni még ma!",
            "whatWeDo" : "Mivel foglalkozunk?",
            "signUp" : "Regisztrálj most!",
            "signIn" : "Bejelentkezés",
            "signUpF" : "Regisztráció",
            "username" : "Felhasználónév",
            "password" : "Jelszó",
            "password_confirmation" : "Jelszó újra: ",
            "email" : "Email",
            "submitSignIn" : "Belépés",
            "submitSignUp" : "Regisztráció",
            "createAccp" : "Nincs még fiókja? Csináljon egy fiókot most!",
            "loginAccp" : "Van már fiókja? Lépjen be a fiókjába",
            "forgotPasswordP" : "Elfelejtette a jelszavát?",
            "backToHome" : "Vissza a főoldalra",

            
            "WelcomeUser" : "Üdvözlünk",
            "LogoutBtn" : "Kijelentkezés",
            
        }
    }
}
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng : 'en',
        fallbackLng: 'hu',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;