const db = require("../db/queries");

const link = [
    { href: "new", text: "Write New Message" }
];

async function getMessages(req, res) {
    const messages = await db.getMessages();
    res.render("index", { link: link, messages: messages });
};

module.exports = {
    getMessages
};