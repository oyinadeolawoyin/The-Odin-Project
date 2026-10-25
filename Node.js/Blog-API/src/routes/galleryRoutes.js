const express = require("express");
const router = express.Router();
const galleryController = require("../controller/galleryController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/uploadImage", upload.single("file"), galleryController.uploadImage);
router.post("/uploadVideo", upload.single("file"), galleryController.uploadVideo);
router.get("/images", galleryController.fetchImages);
router.get("/videos", galleryController.fetchVideos);
router.delete("/images/:imageId", galleryController.deleteImage);
router.delete("/videos/:videoId", galleryController.deleteVideo);

router.post("/images/:imageId/post-comment", galleryController.imageComment);
router.post("/videos/:videoId/post-comment", galleryController.videoComment);
router.post("/images/:imageId/like", galleryController.imageLike);
router.post("/videos/:videoId/like", galleryController.videoLike);
router.post("/images/:imageId/comments/:commentId/reply", galleryController.imageCommentReply);
router.post("/videos/:videoId/comments/:commentId/reply", galleryController.videoCommentReply);
router.post("/images/:imageId/comments/:commentId/like", galleryController.imageCommentLike);
router.post("/videos/:videoId/comments/:commentId/like", galleryController.videoCommentLike);

module.exports = router;