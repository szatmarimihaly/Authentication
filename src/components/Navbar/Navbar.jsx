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
        <div className = "flex items-center justify-evenly mt-4 text-lg">
            <img className = "w-40" src = "/logo.png" alt = "EDU.Ai"></img>
            <NavbarLang/>
            <NavbarBtn text = {t('header-about')} />
            <NavbarBtn text = {t('header-company')} />
            <NavbarBtn text = {t('header-contact')} />
            <LoginBtn text = {t('header-login')} onClick={navigateLogin}/>

        </div>
    )

}
export default Navbar;

