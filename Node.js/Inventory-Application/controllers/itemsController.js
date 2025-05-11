const db = require("../db/queries");

async function getCategory(req, res) {
    try {
        const categoryItems = await db.getCategoryItems(req.params.id);
        if (!categoryItems || categoryItems.length === 0) {
            return res.status(404).render("items", {
                categoryName: "Stories",
                category: [],
                errors: [{ msg: "No items found for this category" }]
            });
        }
        res.render("items", {
            categoryName: categoryItems[0]?.category_name,
            category: categoryItems,
            errors: []
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).render("items", {
            categoryName: "Stories",
            category: [],
            errors: [{ msg: "No items found" }]
        });
    }
}

module.exports = {
    getCategory
};