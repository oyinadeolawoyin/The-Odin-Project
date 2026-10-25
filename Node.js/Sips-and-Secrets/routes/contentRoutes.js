const express = require("express");
const router = express.Router();
const contentController = require("../controller/contentController");


router.get("/:id", contentController.post);
router.get("/:id/update", contentController.editPostForm);
router.post("/:id/update", contentController.updatePost);
router.post("/:id/delete", contentController.deletePost);

module.exports = router;