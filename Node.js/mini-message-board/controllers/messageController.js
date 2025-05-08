const db = require("../db/queries");

async function newMessageForm(req, res) {
    res.render("new")
};

async function creatNewMessage(req, res) {
    const { user, text } = req.body;
    await db.insertMessages(text, user, new Date());
    res.redirect("/");
};

module.exports = {
    newMessageForm,
    creatNewMessage
}