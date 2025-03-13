import { useTranslation } from "react-i18next";
import WhatBtn from "./WhatBtn.jsx";
import SignUpBtn from "./SignUpBtn.jsx";
import { useNavigate } from "react-router-dom";

const Main = () => {

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate("/Register");
    }

    return (
        <>
            <div className = "flex justify-evenly items-center m-30 gap-10">
                <div className = "flex flex-col justify-between items-center gap-10 w-160">
                    <h1 className = "gradient-text text-center text-3xl">{t('hero-h1')}</h1>
                    <p className = "text-xl text-center ">{t('hero-p')}</p>
                    <div className = "flex justify-evenly gap-10">
                        <WhatBtn text = {t('whatWeDo')}/>
                        <SignUpBtn text = {t('signUp')} onClick={navigateRegister}/>
                    </div>
                </div>

                <div className = "">
                    <img src = "/ai.webp" alt = "Ai World" className = "w-100"></img>
                </div>
            </div>
        </>
    )
}
export default Main;


