
const db = require("../db/queries");

async function messageDetails(req, res) {
    const message = await db.getMessageById(req.params.id);
    res.render("messageDetail", { message: message });
};

module.exports = {
    messageDetails
}