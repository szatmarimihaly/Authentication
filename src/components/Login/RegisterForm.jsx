import { useTranslation } from "react-i18next";
import SubmitBtn from "./SubmitBtn.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";


const RegisterForm = () => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { login } = useAuth();

    const navigateLogin = () => {
        navigate("/Login");
    }

    const navigateHome = () => {
        navigate("/Home");
    }

    const handleRegister = async () => {
        const username = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;
    
        try {
          const response = await fetch("http://localhost:5001/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
          });
          const data = await response.json();
          if (response.ok) {
            alert("Sikeres regisztráció!");
            // Automatikus bejelentkezés a regisztráció után
            const loginResponse = await fetch("http://localhost:5001/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password }),
            });
            const loginData = await loginResponse.json();
            if (loginResponse.ok) {
              login(loginData.user, loginData.token); // Bejelentkezési adatok mentése
              navigate("/Profile"); // Átirányítás a profil oldalra
            } else {
              throw new Error(loginData.message || "Bejelentkezés sikertelen");
            }
          } else {
            throw new Error(data.message || "Regisztráció sikertelen");
          }
        } catch (error) {
          console.error("Regisztrációs hiba:", error);
          alert(error.message);
        }
      };

    return (
        <div className="flex flex-col items-center gap-2 bg-white rounded-lg mt-10 mr-70 ml-70">
            <button className="flex items-center mt-2" onClick={navigateHome}><i className="ri-arrow-left-s-line"></i>{t('backToHome')}</button>
            <h1 className="gradient-text text-3xl mt-4">{t('signUpF')}</h1>

            <div className="flex flex-col w-120 mt-10">

                <input type="text"
                       placeholder={t('username')}

                       className="mb-4 p-2 border-2 rounded-xl focus:outline-none">
                </input>

                <input type="email"
                       placeholder={t('email')}

                       className="mb-4 p-2 border-2 rounded-xl focus:outline-none">
                </input>


                <input type="password"
                       placeholder={t('password')}

                       className="p-2 border-2 rounded-xl focus:outline-none">
                </input>
            </div>
            <SubmitBtn text={t('submitSignUp')} onClick={handleRegister}/>
            <div className="bg-gray-300 w-100 h-px mb-2"></div>
            <div className="flex flex-col gap-4 mt-4 mb-4">
                <button className="text-blue-400" onClick={navigateLogin}>{t('loginAccp')}</button>
            </div>
        </div>
    )
}
export default RegisterForm;


