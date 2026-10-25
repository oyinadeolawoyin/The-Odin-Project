const db = require("../db/queries");

async function post(req, res) {
    const post = await db.getPost(req.params.id);
    res.render("content", { title: post.title,  content: post });
}

async function editPostForm(req, res) {
    const post = await db.getPost(req.params.id);
    res.render("updateContent", { post });
}

async function updatePost(req, res) {
    const { title, content } = req.body;
    await db.updatePost(title, content, req.params.id);
    res.redirect("/");
}

async function deletePost(req, res) {
    let { id } = req.params;
    await db.deletePost(id);
    res.redirect("/");
}

module.exports = {
    post,
    editPostForm,
    updatePost,
    deletePost
}