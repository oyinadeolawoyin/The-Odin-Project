const express = require("express");
const app = express();
const db = require("./db");

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assestsPath = path.join(__dirname, "public");
app.use(express.static(assestsPath));

app.use(express.urlencoded({ extended: false }));

const link = [
    { href: "new", text: "Write New Message" }
]

app.get("/", (req, res) => {
    res.render("index", { link: link, messages: db.messages });
});

app.get("/new", (req, res) => {
    res.render("new");
});

app.post("/new", (req, res) => {
    const { user, text } = req.body;

    db.messages.push({
        id: (db.messages.length),
        text,
        user,
        added: new Date()
    });

    res.redirect("/");
});

app.get("/messageDetail/:id", (req, res) => {
    const message = db.messages[req.params.id];
    
    res.render("messageDetail", { message: message });
});


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port: ${PORT}`);
});