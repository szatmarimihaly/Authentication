import { useTranslation } from "react-i18next";

const NavbarLang = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'hu' : 'en';
        i18n.changeLanguage(newLang);
    }

    return(
        <button className = "w-20 text-lg rounded bg-transparent text-white hover:text-white hover:rounded transition duration-300 ease"
                onClick={changeLanguage}>{i18n.language === 'hu' ? 'HU' : 'EN'}</button>
    );

}
export default NavbarLang;