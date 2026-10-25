const { validationResult } = require("express-validator");
const db = require("../db/queries");

function getcontentForm(req, res) {
    res.render("contentForm");
}

async function createContent(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("contentForm", {
            errors:  errors.array(),
        });
    }   
    try {
        const { title, content } = req.body;
        await db.createContent(title, content, new Date(), req.user.id);
          res.redirect("/");
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }      
}

module.exports = {
   getcontentForm,
    createContent
}