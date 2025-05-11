const db = require("../db/queries");
const { validationResult } = require("express-validator");

function categoryForm(req, res) {
   res.render("categoryForm") 
};

async function addCategory(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("categoryForm", {
      title: "Create category",
      errors: errors.array(),
    });
  }

  const { name, description } = req.body;
  try {
    const existingCategoryId = await db.getCategoryId(name);
    if (existingCategoryId) {
        return res.render("categoryForm", {
          title: "Create category",
          errors: [{ msg: "Category already exists!" }],
        });
    }
    await db.addCategory(name, description);
    res.redirect("/");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}


module.exports = {
    categoryForm,
    addCategory
}