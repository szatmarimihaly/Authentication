require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;

//Middleware-ek
app.use(cors());
app.use(express.json());

//Test-route
app.get("/", (req, res) =>{
    res.send("API is running...");
});

//Adatbázis kapcsolódás
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(`MongoDB nem csatlakozott ${err}`));

app.listen(PORT, () => {
    console.log(`A szerver port: ${PORT}`);
});



