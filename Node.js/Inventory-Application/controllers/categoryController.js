const db = require("../db/queries");

async function getCategories(req, res) {
    try {
        const categories = await db.getCategories();
        if (!categories) {
            return res.status(404).render("index", {
                errors: [{ msg: "Categories not found" }],
                categories: [],
            });
        }
        res.render("index", { categories: categories, errors: [] });
    } catch (err) {
        console.error(err.message);
        res.status(500).render("index", {
            errors: [{ msg: "Categories not found" }],
            categories: [],
        });
    }
}

async function deleteCategory(req, res) {
    let { id } = req.params;
    await db.deleteCategory(id);
    res.redirect("/");
}

async function showedcategoryForm(req, res) {
    const category = await db.getCategory(req.params.id);
    res.render("editCategory", { category });
}

async function updateCategory(req, res) {
    const { name, description } = req.body;
    await db.updateCategory(req.params.id, name, description);
    res.redirect(`/`);
}

module.exports = {
    getCategories,
    deleteCategory,
    showedcategoryForm,
    updateCategory
};