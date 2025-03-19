import { useTranslation } from "react-i18next";
import WhatBtn from "./WhatBtn.jsx";
import SignUpBtn from "./SignUpBtn.jsx";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";
import { useMemo } from "react";

const Main = () => {

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate("/Register");
    }

    const cardData = useMemo(() => [
    {
        id : 1,
        title : t('Card1Title'),
        text : t('Card1Text'),
        icon : <i className="ri-bar-chart-grouped-fill text-8xl bg-custom-icon"></i>,
    },
    {
        id : 2,
        title : t('Card2Title'),
        text : t('Card2Text'),
        icon : <i className="ri-robot-2-fill text-8xl bg-custom-icon"></i>,
    },
    {
        id : 3,
        title : t('Card3Title'),
        text : t('Card3Text'),
        icon : <i className="ri-graduation-cap-fill text-8xl bg-custom-icon"></i>,
    },
    {
        id : 4,
        title : t('Card4Title'),
        text : t('Card4Text'),
        icon : <i className="ri-lightbulb-flash-fill text-8xl bg-custom-icon"></i>,
    },
    {
        id : 5,
        title : t('Card5Title'),
        text : t('Card5Text'),
        icon : <i className="ri-smartphone-fill text-8xl bg-custom-icon"></i>,
    },
    {
        id : 6,
        title : t('Card6Title'),
        text : t('Card6Text'),
        icon : <i className="ri-team-fill text-8xl bg-custom-icon"></i>,
    },
], [t]);

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

                <div className = "mt-20 mb-10">
                    <img src = "/ai.webp" alt = "Ai World" className = "w-150 rounded"></img>
                </div>

                <h1 className = "gradient-text text-6xl mb-10">{t('WhyH1')}</h1>
                <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-6">
                    {cardData.map((card) => (
                      <Card key = {card.id} title = {card.title} text = {card.text} icon = {card.icon}/>  
                    ))}
                </div>


            </div>
        </>
    )
}
export default Main;


