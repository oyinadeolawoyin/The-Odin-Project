const express = require("express");
const router = express.Router();
const memberForm = require("../controller/memberFormController");
 

router.get("/", memberForm.memberForm);
router.post("/", memberForm.createMember);

module.exports = router;