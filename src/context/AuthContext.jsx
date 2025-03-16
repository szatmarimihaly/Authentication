import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true); // <-- Új loading állapot

  // Felhasználói adatok betöltése a token alapján (oldal frissítésekor)
  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const response = await fetch("http://localhost:5001/api/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const userData = await response.json();
          if (response.ok) {
            setUser(userData); // Felhasználói adatok beállítása
          } else {
            logout(); // Hibás token esetén kijelentkeztetés
          }
        } catch (error) {
          console.error("Hiba a felhasználói adatok lekérésekor:", error);
          logout(); // Hibás token esetén kijelentkeztetés
        }
      }
      setLoading(false); // Adatok betöltése befejeződött
    };

    fetchUserData();
  }, [token]);

  const login = (userData, token) => {
    sessionStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
