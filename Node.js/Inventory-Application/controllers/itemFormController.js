const db = require("../db/queries");
const { validationResult } = require("express-validator");

async function itemForm(req, res) {
   res.render("itemForm") 
};

async function addItem(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("categoryForm", {
        title: "Create category",
        errors: errors.array(),
      });
    }

    const { name, description, price, quanity, category } = req.body;
    try {
        const category_id = await db.getCategoryId(category);
        await db.addItem(name, description, price, quanity, category_id);
        res.redirect("/");
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

module.exports = {
    itemForm,
    addItem,
}