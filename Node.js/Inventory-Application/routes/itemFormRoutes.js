const express = require("express");
const router = express.Router();
const itemForm = require("../controllers/itemFormController");
const { body } = require("express-validator");

const alphaErr = "must contain only letters.";
const lengthErr1 = "must be 1–10 characters.";

const validateItem = [
    body("name")
      .trim()
      .matches(/^[A-Za-z\s]+$/).withMessage(`Description ${alphaErr}`)
      .isLength({ min: 1, max: 10 }).withMessage(`Name ${lengthErr1}`)
      .escape(),
  
    body("description")
      .trim()
      .escape(),
];

router.get("/itemForm", itemForm.itemForm);
router.post("/itemForm", validateItem, itemForm.addItem);

module.exports = router;