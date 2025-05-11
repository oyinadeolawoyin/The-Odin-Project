const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.get("/:id", itemController.itemDetails);
router.post("/:id/delete", itemController.deleteItem);
router.get("/:id/edit", itemController.showeditForm);
router.post("/:id/edit", itemController.updateItem);


module.exports = router;