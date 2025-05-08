const express = require("express");
require('dotenv').config();
const app = express();
const homeRoutes = require("./routes/homeRouter");
const messageRoutes = require("./routes/messageRouter");
const messageDetailsRoutes = require("./routes/messageDetailsRouter");


const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assestsPath = path.join(__dirname, "public");
app.use(express.static(assestsPath));

app.use(express.urlencoded({ extended: false }));


app.use('/', homeRoutes);
app.use("/new", messageRoutes);
app.use("/", messageDetailsRoutes);


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port: ${PORT}`);
});