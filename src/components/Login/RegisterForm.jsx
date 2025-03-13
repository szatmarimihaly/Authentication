import { useTranslation } from "react-i18next";
import SubmitBtn from "./SubmitBtn.jsx";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/Login");
    }

    return (
        <div className="flex flex-col items-center gap-2 bg-white rounded-lg mt-10 mr-70 ml-70">
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

                       className="mb-4 p-2 border-2 rounded-xl focus:outline-none">
                </input>
            </div>
            <SubmitBtn text={t('submitSignUp')}/>
            <div className="bg-gray-300 w-100 h-px mt-2 mb-2"></div>
            <div className="flex flex-col gap-4 mt-4 mb-4">
                <button className="text-blue-400" onClick={navigateLogin}>{t('loginAccp')}</button>
            </div>
        </div>
    )
}
export default RegisterForm;


