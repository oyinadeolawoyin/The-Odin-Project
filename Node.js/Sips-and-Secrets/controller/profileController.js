const db = require("../db/queries");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

async function profile(req, res) {
    let users = await db.getUser(req.params.username);
    let posts = await db.postByUser(req.params.username);
    res.render("profile", { user: users, posts: posts });
}

async function updateForm(req, res) {
    let user = await db.getUser(req.params.username);
    res.render("updateProfile", { user });
}

async function updateProfile(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).render("updateProfile", {
            errors:  errors.array(),
        });
    }   
    try {
        const { firstname, lastname, email, username, password } = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          await db.updateProfile(firstname, lastname, username, email, hashedPassword, req.user.id);
          res.redirect(`/profile/${req.params.username}`);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }      
}

async function posterProfile(req, res) {
    let poster = await db.getUser(req.params.username);
    let posts = await db.postByUser(req.params.username);
    res.render("postProfile", { poster, posts });
}

module.exports = {
    profile,
    updateForm,
    updateProfile,
    posterProfile
}