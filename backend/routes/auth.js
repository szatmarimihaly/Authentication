const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// REGISZTRÁCIÓ
router.post("/register", async (req, res) => {
    try {
        // Jelszó hash-elése
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Új felhasználó létrehozása
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // Mentés az adatbázisba
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        console.log("Error: ", err);
        res.status(500).json({ error: err.message });
    }
});

// BEJELENTKEZÉS
router.post("/login", async (req, res) => {
    try {
        // Ellenőrizzük, hogy létezik-e a felhasználó
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(400).json({ error: "Hibás felhasználónév vagy jelszó" });

        // Jelszó ellenőrzése
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ error: "Hibás felhasználónév vagy jelszó" });

        // JWT token generálása
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
