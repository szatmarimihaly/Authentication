import { useTranslation } from "react-i18next";
import SubmitBtn from "./SubmitBtn.jsx";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate("/Register");
    }

    return (
        <div className="flex flex-col items-center gap-2 bg-white rounded-lg mt-10 mr-70 ml-70">
            <h1 className="gradient-text text-3xl mt-4">{t('signIn')}</h1>

            <div className="flex flex-col w-120 mt-10">

                <input type="email"
                       placeholder={t('username')}

                       className="mb-4 p-2 border-2 rounded-xl focus:outline-none">
                </input>


                <input type="password"
                       placeholder={t('password')}

                       className="mb-4 p-2 border-2 rounded-xl focus:outline-none">
                </input>
            </div>
            <SubmitBtn text={t('submitSignIn')}/>
            <div className="bg-gray-300 w-100 h-px mt-2 mb-2"></div>
            <div className="flex flex-col gap-4 mt-4 mb-4">
                <button className="text-blue-400" onClick={navigateRegister}>{t('createAccp')}</button>
                <button className="text-blue-400 mb-3">{t('forgotPasswordP')}</button>
            </div>
        </div>
    )
}
export default LoginForm;


