const express = require("express");
const router = express.Router();
const profileController = require("../controller/profileController");
const { body } = require("express-validator");

const validateForm = [
    body("firstname")
    .matches(/^[A-Za-z\s]+$/).withMessage("First name must contain only letters and spaces.")
    .trim()
    .isLength({ min: 2, max: 10 }).withMessage("First name must be between 2 and 10 characters.")
    .escape(),


    body("lastname")
    .matches(/^[A-Za-z\s]+$/).withMessage("Last name must contain only letters and spaces.")
    .trim()
    .isLength({ min: 2, max: 10 }).withMessage("Last name must be between 2 and 10 characters.")
    .escape(),


    body("username")
    .matches(/^[A-Za-z0-9_.-]+$/)
    .withMessage("Username can only contain letters, numbers, underscores, dots, or dashes.")
    .trim()
    .isLength({ min: 3, max: 15 }).withMessage("Username must be between 3 and 15 characters.")
    .escape(),
  

    body("email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .normalizeEmail(),
    
    body("password")
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters long.")
    .matches(/[a-z]/).withMessage("Password must contain at least one lowercase letter.")
    .matches(/[A-Z]/).withMessage("Password must contain at least one uppercase letter.")
    .matches(/[0-9]/).withMessage("Password must contain at least one number.")
    .matches(/[\W_]/).withMessage("Password must contain at least one special character.")
    
]

router.get("/:username", profileController.profile);
router.get("/post/:username", profileController.posterProfile);
router.get("/:username/edit", profileController.updateForm);
router.post("/:username/edit", validateForm,  profileController.updateProfile);

module.exports = router;