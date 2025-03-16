import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProfilePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth(); // <-- loading állapot használata

  // Ha nincs bejelentkezve, irányítsd át a főoldalra
  useEffect(() => {
    if (!loading && !user) {
      navigate("/Home");
    }
  }, [user, loading, navigate]);

  // Ha még betöltődnek az adatok, ne renderelj semmit
  if (loading) {
    return null;
  }

  // Ha nincs felhasználó, de a loading befejeződött, ne renderelj semmit
  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout(); // Kijelentkezés
    navigate("/Home"); // Átirányítás a főoldalra
  };

  return (
    <div>
      <h1>
        {t("WelcomeUser")}, {user.username}!
      </h1>
      <button onClick={handleLogout}>{t("LogoutBtn")}</button>
    </div>
  );
};

export default ProfilePage;