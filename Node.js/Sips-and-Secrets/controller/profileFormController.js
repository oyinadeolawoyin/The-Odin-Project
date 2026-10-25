const { validationResult } = require("express-validator");
const db = require("../db/queries");
const bcrypt = require("bcrypt");

function getProfileForm(req, res) {
    res.render("profileForm");
}

async function createProfile(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("profileForm", {
            errors:  errors.array(),
        });
    }
    
    try {
        const { firstname, lastname, email, username, password, confirm } = req.body;
      
        if (password === confirm) {
          const hashedPassword = await bcrypt.hash(password, 10);
          await db.createProfile(firstname, lastname, username, email, hashedPassword);
          res.redirect("/logIn");
        } else {
          res.render("profileForm", {
            errors: [{ msg: "Please make sure both password fields match." }],
          });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }      
}

module.exports = {
    getProfileForm,
    createProfile
}