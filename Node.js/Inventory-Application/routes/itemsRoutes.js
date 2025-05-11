const express= require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

router.get("/items/:id/items", itemsController.getCategory);

module.exports = router;