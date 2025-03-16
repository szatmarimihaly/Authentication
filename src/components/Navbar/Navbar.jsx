import NavbarBtn from "./NavbarBtn.jsx";
import NavbarLang from "./NavbarLang.jsx";
import { useTranslation } from "react-i18next";
import LoginBtn from "./LoginBtn.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const { t, i18n } = useTranslation();

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/Login");
    }

    return(
        <div className = "flex items-center justify-between mt-2 p-4 mr-10 ml-10 rounded-xl text-lg">
            <img className = "w-50" src = "/eduai.png" alt = "EDU.Ai"></img>
            <NavbarLang/>
            <NavbarBtn text = {t('header-about')} />
            <NavbarBtn text = {t('header-company')} />
            <NavbarBtn text = {t('header-contact')} />
            <LoginBtn text = {t('header-login')} onClick={navigateLogin}/>

        </div>
    )

}
export default Navbar;

