const express= require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getCategories);
router.post("/category/:id/delete", categoryController.deleteCategory);
router.get("/category/:id/edit", categoryController.showedcategoryForm);
router.post("/category/:id/edit", categoryController.updateCategory);

module.exports = router;