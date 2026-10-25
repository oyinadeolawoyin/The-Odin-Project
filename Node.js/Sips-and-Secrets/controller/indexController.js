const db = require("../db/queries")

async function homePage(req, res) {
    try {
        const posts = await db.getPosts();
        if (!posts) {
            return res.status(404).render("index", {
                errors: [{ msg: "Posts not found" }],
                posts: [],
            });
        }
        res.render("index", { posts: posts, errors: [] });
    } catch (err) {
        console.error(err.message);
        res.status(500).render("index", {
            errors: [{ msg: "Posts not found" }],
            posts: [],
        });
    }
}

module.exports = {
    homePage,
}