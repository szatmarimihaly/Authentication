require("dotenv").config(); // Környezeti változók beolvasása
// Importáljuk a szükséges csomagokat
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Express alkalmazás létrehozása
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware-k beállítása
app.use(express.json()); // JSON adatok feldolgozása
app.use(cors()); // Kliens oldali kérések engedélyezése

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Teszt route az API működésének ellenőrzésére
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Adatbázis kapcsolódás
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Database connection error:", err));

// Szerver elindítása
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
