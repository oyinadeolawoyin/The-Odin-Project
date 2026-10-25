const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

router.post("/create-post", postController.post);
router.get("/", postController.fetchPost);
router.delete("/:id", postController.deletePost);

module.exports = router;