const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/fans", userController.fetchUsers);
router.delete("/fans/:id", userController.deleteUser);

module.exports = router;