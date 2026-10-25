const express = require("express");
const router = express.Router();
const contentFormController = require("../controller/contentFormController");
const { body } = require("express-validator");

const validateForm = [
    body("title")
    .trim()
    .isLength({ min: 2, max: 10 }).withMessage("title must be between 2 and 10 characters.")
    .escape(),

    body("content")
    .trim()
    .escape(),    
]

router.get("/", contentFormController.getcontentForm);
router.post("/", validateForm, contentFormController.createContent);

module.exports = router;