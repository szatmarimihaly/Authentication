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

            "WhyH1" : "Why Choose EDU.Ai?",

            "Card1Title": "Personalized Learning",
            "Card1Text": "EDU.AI constantly monitors your progress and provides the best learning experience tailored to your preferences. It offers a unique learning path that helps you reach your goals and deepen your knowledge in the most effective way",

            "Card2Title": "Automatic Videos and Texts",
            "Card2Text": "EDU.AI automatically generates instructional videos and texts in various subjects. This ensures that you always receive the most suitable learning material, helping you better understand the topic and grasp the subject matter",

            "Card3Title": "Wide Range of Subjects",
            "Card3Text": "EDU.AI offers support in every subject, continuously expanding to cover all educational needs. Whether it’s mathematics, history, or any other subject, here you will find the help you need",

            "Card4Title": "Innovative Solutions",
            "Card4Text": "EDU.AI leverages the latest technological innovations to enhance the learning experience. The AI is constantly evolving to provide you with the best educational experience possible",

            "Card5Title": "Learn Anytime, Anywhere",
            "Card5Text": "EDU.AI is easily accessible on any device, allowing you to learn anytime and anywhere. No more classrooms are needed, as the knowledge will always be at your fingertips, whether on a mobile phone, tablet, or computer",

            "Card6Title": "Community Learning",
            "Card6Text": "EDU.AI gives you the opportunity to learn with others. Share your knowledge, learn from others’ experiences, and discover how you can achieve the best results through social learning",
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

            "WhyH1" : "Miért válassza az EDU.Ai-t?",
            
            "Card1Title" : "Személyre szabott tanulás",
            "Card1Text" : "Az EDU.AI folyamatosan figyeli a fejlődésedet, és az általad preferált tanulási módok alapján biztosítja a legjobb tanulási élményt. Egyedi tanulási útvonalat kínál, amely segít a céljaid elérésében és a tudásod elmélyítésében",

            "Card2Title" : "Automatikus videók és szövegek",
            "Card2Text" : "Az EDU.AI automatikusan generál oktatóvideókat és szövegeket a különböző tantárgyakban. Ezzel biztosítja, hogy mindig a legmegfelelőbb tananyagot kapd, ami segít abban, hogy még jobban megértsd a témát",

            "Card3Title" : "Széles tantárgyi kínálat",
            "Card3Text" : "Az EDU.AI minden tantárgyban segítséget nyújt, és folyamatosan bővül, hogy minden oktatási igényt kielégítsen. Legyen szó matematikáról, történelemről vagy bármilyen más tantárgyról, itt mindenki megtalálja a szükséges segítséget",

            "Card4Title" : "Innovatív megoldások",
            "Card4Text" : "Az EDU.AI a legújabb technológiai újításokat alkalmazza a tanulási élmény javítása érdekében. A mesterséges intelligencia folyamatosan fejlődik, hogy a legjobb oktatási élményt biztosítsa számodra",

            "Card5Title" : "Tanulás bárhol, bármikor",
            "Card5Text" : "Az EDU.AI könnyedén elérhető bármilyen eszközön, így bárhol és bármikor tanulhatsz. Nincs szükség többé tanteremre, hiszen a tudás mindig kéznél lesz, legyen szó mobiltelefonról, tabletről vagy számítógépről",

            "Card6Title" : "Közösségi tanulás",
            "Card6Text" : "Az EDU.AI lehetőséget ad arra, hogy másokkal együtt tanulj. Oszd meg a tudásodat, tudd meg, hogyan érheted el a legjobb eredményeket a közösségi tanulás révén, és tanulj mások tapasztalataiból",
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