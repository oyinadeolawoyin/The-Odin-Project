const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.post("/gameRecord", userController.createGameRecord);
router.get("/records", userController.fetchRecords);

module.exports = router;