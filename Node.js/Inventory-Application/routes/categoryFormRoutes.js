const express = require("express");
const router = express.Router();
const categoryForm = require("../controllers/categoryFromController");
const { body } = require("express-validator");

const alphaErr = "must contain only letters.";
const lengthErr1 = "must be 1–10 characters.";

const validateCategory = [
    body("name")
      .trim()
      .matches(/^[A-Za-z\s]+$/).withMessage(`Name ${alphaErr}`)
      .isLength({ min: 1, max: 10 }).withMessage(`Name ${lengthErr1}`)
      .escape(),
  
    body("description")
      .trim()
      .escape(),
];
  

router.get("/categoryForm", categoryForm.categoryForm);
router.post("/categoryForm", validateCategory, categoryForm.addCategory);

module.exports = router;