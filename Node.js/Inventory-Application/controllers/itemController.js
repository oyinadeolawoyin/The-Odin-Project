const db = require("../db/queries");

async function itemDetails(req, res) {
    const item = await db.getItem(req.params.id);
    res.render("item", { itemName: item.name,  item: item})
}

async function deleteItem(req, res) {
    let { id } = req.params;
    await db.deleteItem(id);
    res.redirect("/");
}

async function showeditForm(req, res) {
    const item = await db.getItem(req.params.id);
    res.render("editItem", { item });
}

async function updateItem(req, res) {
    const { name, description, price, quantity } = req.body;
    await db.updateItem(req.params.id, name, description, price, quantity);
    res.redirect(`/item/${req.params.id}`);
}

module.exports = {
    itemDetails,
    deleteItem,
    showeditForm,
    updateItem
}