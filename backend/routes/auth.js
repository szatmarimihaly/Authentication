const express = require('express'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require('../middleWare/authMiddleware');

const router = express.Router();

router.post('/register', async (req, res) => {
    try{

        const {username, email, password} = req.body;
        
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({message : "User already exists"});

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password : hashedPassword,
        })

        const user = await newUser.save();
        res.status(201).json({ message : "User created successfully", user });
    }catch(err){
        res.status(500).json({message : err.message});
    }
});

router.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if(!user) return res.status(400).json({message : "User does not exist"});

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(400).json({message : "Invalid password"});

        const token = jwt.sign({ id : user._id, username : user.username }, process.env.JWT_SECRET, { expiresIn : '1h' });
        res.json({ token, user : {id : user._id, username : user.username, email : user.email } });
    }catch(err){
        res.status(500).json({message : err.message});
    }
});

router.get('/me', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Hiba a felhasználói adatok lekérésekor" });
    }
});

module.exports = router;

