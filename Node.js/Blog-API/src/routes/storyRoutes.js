const express = require("express");
const router = express.Router();
const storyController = require("../controller/storyController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/", storyController.fetchStories);
router.get("/:id", storyController.fetchStory);
router.post("/create", upload.single("file"), storyController.createStory);
router.post("/:id", upload.single("file"), storyController.updateStory);
router.delete("/:id", storyController.deleteStory);

router.post("/:id/create-review", storyController.review);
router.get("/:id/reviews", storyController.fetchReview);
router.delete("/:id/reviews/:reviewId", storyController.deleteReview);

router.post("/:id/create-chapter", storyController.chapter);
router.get("/:id/chapters", storyController.fetchChapters);
router.get("/:id/chapters/:chapterId", storyController.fetchChapter);
router.delete("/:id/chapters/:chapterId", storyController.deleteChapter);

router.post("/:id/chapters/:chapterId/post-comment", storyController.chapterComment);
router.post("/:id/chapters/:chapterId/like", storyController.chapterLike);
router.post("/:id/chapters/:chapterId/comments/:commentId/reply", storyController.commentReply);
router.post("/:id/chapters/:chapterId/comments/:commentId/like", storyController.commentLike);

module.exports = router;