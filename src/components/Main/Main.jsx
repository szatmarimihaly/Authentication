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
            <div className = "flex flex-col justify-evenly items-center gap-10">
                <div className = "flex flex-col justify-between items-center">
                    <h1 className = "text-7xl mb-20 mt-10 text-center cursor-default">Discover the <span className = "gradient-text text-8xl">World of </span> Artificial Intelligence</h1>
                    <p className = "text-2xl text-center text-center mr-30 ml-30 mb-12 cursor-default">{t('hero-p')}</p>
                    <div className = "flex justify-evenly gap-10">
                        <WhatBtn text = {t('whatWeDo')}/>
                        <SignUpBtn text = {t('signUp')} onClick={navigateRegister}/>
                    </div>
                </div>

                <div className = "mt-20">
                    <img src = "/ai.webp" alt = "Ai World" className = "w-200"></img>
                </div>
            </div>
        </>
    )
}
export default Main;


