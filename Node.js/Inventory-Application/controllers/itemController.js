const db = require("../db/queries");

async function itemDetails(req, res) {
    console.log("get", req.params.id);
    const item = await db.getItem(req.params.id);
    if (!item) {
        return res.status(404).send("Item not found");
    }
    res.render("item", { itemName: item.name,  item: item})
}

async function deleteItem(req, res) {
    let { id } = req.params;
    await db.deleteItem(id);
    res.redirect("/");
}

async function showeditForm(req, res) {
    const item = await db.getItem(req.params.id);
    if (!item) return res.status(404).send("Item not found");
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