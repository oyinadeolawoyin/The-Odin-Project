const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");


const userRoutes = require("./routes/userRoutes");
const charactersRoutes = require("./routes/charactersRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:5173", "https://photo-tagger-odin-project.netlify.app"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

app.use("/api/user", userRoutes);
app.use("/api/characters", charactersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));