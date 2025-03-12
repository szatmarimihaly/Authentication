const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Minden mező kitöltése kötelező!" });
    }

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Ez az e-mail cím már használatban van!" });
        }

        const user = await User.create({ username, email, password });

        if (user) {
            res.status(201).json({
                _id: user.id,
                username: user.username,
                email: user.email,
                token: generateToken(user.id),
            });
        } else {
            res.status(400).json({ message: "Hibás felhasználói adatok!" });
        }
    } catch (err) {
        res.status(500).json({ message: "Szerverhiba!", error: err.message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user.id,
                username: user.username,
                email: user.email,
                token: generateToken(user.id),
            });
        } else {
            res.status(401).json({ message: "Hibás bejelentkezési adatok!" });
        }
    } catch (err) {
        res.status(500).json({ message: "Szerverhiba!", error: err.message });
    }
};

module.exports = { registerUser, loginUser };
