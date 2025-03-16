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
    <div className = "flex items-center justify-between text-white p-6">
        <div className = "">
            <h1 className = "text-3xl">EDU.Ai</h1>
        </div>

        <div className = "">
            <h1>Payment</h1>
        </div>

        
        <div className = "">
            <button className = "bg-red-700 px-4 py-2 rounded-xl font-semibold transition-duration: 300 hover:bg-red-900" onClick={handleLogout}>{t('LogoutBtn')}</button>
        </div>
    </div>
  );
};

export default ProfilePage;