const db = require("../db/queries");

async function getCategory(req, res) {
    const categoryItems = await db.getCategoryItems(req.params.id);
    if (!categoryItems) {
        return res.status(404).send("Item not found");
    }
    res.render("items", { categoryName: categoryItems[0]?.category_name, category: categoryItems });
}

module.exports = {
    getCategory
};