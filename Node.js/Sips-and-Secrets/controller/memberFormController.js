const db = require("../db/queries");

function memberForm(req, res) {
    res.render("memberForm");
}

async function createMember(req, res) {
    const { username, passcodeMember, passcodeAdmin } = req.body;

    if (req.isAuthenticated && req.isAuthenticated() && passcodeMember === "MEMBER" && passcodeAdmin === "") {
        await db.createMember(username, true);
        res.redirect("/");
    } 
    else if (req.isAuthenticated && req.isAuthenticated() && passcodeMember === "" && passcodeAdmin === "ADMIN") {
        await db.createAdmin(username, true);
        res.redirect("/");
    }
    else if (req.isAuthenticated && req.isAuthenticated() && passcodeMember === "MEMBER" && passcodeAdmin === "ADMIN") {
        await db.createMembers(username, true, true);
        res.redirect(`/`);
    }
    else {
        res.render("memberForm", {
            errors: [{ msg: "Incorrect Passcodes. Not signed up yet? Sign up." }],
        });
    }
}


module.exports = {
    memberForm,
    createMember
}