import { useTranslation } from "react-i18next";
import SubmitBtn from "./SubmitBtn.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const LoginForm = () => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { login } = useAuth();

    const navigateRegister = () => {
        navigate("/Register");
    }

    const navigateHome = () => {
        navigate("/Home");
    }

    const handleLogin = async () => {
        const username = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        try{

            const response = await fetch('http://localhost:5001/api/auth/login', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if(response.ok){
                login(data.user, data.token);
                navigate("/Profile");
            }else {
                alert("Bejelentkezés sikertelen!");
            }

        }catch(err){
            console.error("Bejelentkezési hiba: ", err);
        }
    }


    return (
        <div className="flex flex-col items-center gap-2 bg-white rounded-lg mt-10 mr-70 ml-70">
            <button className="flex items-center mt-4" onClick={navigateHome}><i className="ri-arrow-left-s-line"></i>{t('backToHome')}</button>
            <h1 className="gradient-text text-3xl mt-4">{t('signIn')}</h1>

            <div className="flex flex-col w-120 mt-10">

                <input type="email"
                       placeholder={t('username')}

                       className="mb-4 p-2 border-2 rounded-xl focus:outline-none">
                </input>


                <input type="password"
                       placeholder={t('password')}

                       className="p-2 border-2 rounded-xl focus:outline-none">
                </input>
            </div>
            <SubmitBtn text={t('submitSignIn')} onClick={handleLogin}/>
            <div className="bg-gray-300 w-100 h-px mb-2"></div>
            <div className="flex flex-col gap-4 mt-4 mb-4">
                <button className="text-blue-400" onClick={navigateRegister}>{t('createAccp')}</button>
                <button className="text-blue-400 mb-3">{t('forgotPasswordP')}</button>
            </div>
        </div>
    )
}
export default LoginForm;


