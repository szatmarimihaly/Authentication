require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB().then(() => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/auth", require("./routes/authRoutes"));

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}).catch((err) => {
    console.error("❌ Failed to connect to DB", err);
    process.exit(1);
});
