require("dotenv").config(); // Környezeti változók beolvasása
// Importáljuk a szükséges csomagokat
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const authenticateToken = require("./middleWare/authMiddleware"); 


// Express alkalmazás létrehozása
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware-k beállítása
app.use(express.json()); // JSON adatok feldolgozása
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Teszt route az API működésének ellenőrzésére
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Védett route
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: "Hozzáférés engedélyezve" });
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