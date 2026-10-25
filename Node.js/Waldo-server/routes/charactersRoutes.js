const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/charatersController");

router.get("/", charactersController.characters);

module.exports = router;