const db = require("../db/queries");

async function getCategories(req, res) {
    const categories = await db.getCategories();
    if (!categories) {
        return res.status(404).send("Item not found");
    }
    res.render("index", { categories: categories });
}

async function deleteCategory(req, res) {
    let { id } = req.params;
    await db.deleteCategory(id);
    res.redirect("/");
}

async function showedcategoryForm(req, res) {
    const category = await db.getCategory(req.params.id);
    if (!category) return res.status(404).send("Category not found");
    res.render("editCategory", { category });
}

async function updateCategory(req, res) {
    const { name, description } = req.body;
    console.log("na", name, "de", description);
    await db.updateCategory(req.params.id, name, description);
    res.redirect(`/`);
}

module.exports = {
    getCategories,
    deleteCategory,
    showedcategoryForm,
    updateCategory
};