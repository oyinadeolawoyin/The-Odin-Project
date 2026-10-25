const galleryService = require("../services/galleryService");
const commentService = require("../services/commentService");
const  { uploadFile } = require("./fileController");

async function uploadImage(req, res) {
    const { caption } = req.body;
    const file = req.file;

    try {
        if (file) {
            const url = await uploadFile(file); 

            if (req.user.role === "ADMIN") {
                const userId = Number(req.user.id);
                const image = await galleryService.uploadImage({ caption, url, userId });
                res.status(201).json({ image: image });
            } else {
                res.status(403).json({ message: "Only admin is permitted to upload image" });
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function uploadVideo(req, res) {
    const { caption } = req.body;
    const file = req.file;

    try {
        if (file) {
            const url = await uploadFile(file); 
            if (req.user.role === "ADMIN") {
                const userId = Number(req.user.id);
                const video = await galleryService.uploadVideo({ caption, url, userId });
                res.status(201).json({ video: video });
        } 
        } else {
            res.status(403).json({ message: "Only admin is permitted to upload video" });
        }
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
}

async function fetchVideos(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            const userId = req.user.id;
            const videos = await galleryService.fetchVideos({ userId });

            if (videos.length === 0) {
                return res.status(404).json({ message: "No Videos Yet." });
            }

            res.status(201).json({ videos: videos });
        } else {
            res.status(403).json({ message: "Only admin is permitted to upload video" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function fetchImages(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            const userId = req.user.id;
            const images = await galleryService.fetchImages({ userId });

            if (images.length === 0) {
                return res.status(404).json({ message: "No Images Yet." });
            }

            res.status(200).json({ images: images });
        } else {
            res.status(403).json({ message: "Only admin is permitted to upload video" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function deleteImage(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            await galleryService.deleteImage(Number(req.params.imageId));
            res.status(201).json({ message: "Image deleted." });
        } else {
            res.status(403).json({ message: "Only admin is permitted to delete Image" });
        }
    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function deleteVideo(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            await galleryService.deleteVideo(Number(req.params.videoId));
            res.status(201).json({ message: "video deleted." });
        } else {
            res.status(403).json({ message: "Only admin is permitted to delete Video" });
        }
    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function imageComment(req, res) {
    const { content } = req.body;

    try {
        const id = Number(req.params.imageId);
        const userId = Number(req.user.id);
        const EntityType = "IMAGE";

        await commentService.createComment({ content, userId, id, EntityType });
        res.status(201).json({ message: "comment posted." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function videoComment(req, res) {
    const { content } = req.body;

    try {
        const id = Number(req.params.videoId);
        const userId = Number(req.user.id);
        const EntityType = "VIDEO";

        await commentService.createComment({ content, userId, id, EntityType });
        res.status(201).json({ message: "comment posted." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function imageLike(req, res) {
    try {
        const id = Number(req.params.imageId);
        const userId = Number(req.user.id);
        const EntityType = "IMAGE";

        await commentService.createLike({ userId, id,  EntityType });
        res.status(201).json({ message: "Liked!" });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function videoLike(req, res) {
    try {
        const id = Number(req.params.videoId);
        const userId = Number(req.user.id);
        const EntityType = "VIDEO";

        await commentService.createLike({ userId, id,  EntityType });
        res.status(201).json({ message: "Liked!" });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function imageCommentReply(req, res) {
    const { content } = req.body;

    try {
        const id = Number(req.params.imageId);
        const userId = Number(req.user.id);
        const EntityType = "IMAGE";
        const commentId = Number(req.params.commentId);

        await commentService.createReply({ content, id, userId, EntityType, commentId });
        res.status(201).json({ message: "Reply posted!." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function videoCommentReply(req, res) {
    const { content } = req.body;

    try {
        const id = Number(req.params.videoId);
        const userId = Number(req.user.id);
        const EntityType = "VIDEO";
        const commentId = Number(req.params.commentId);

        await commentService.createReply({ content, id, userId, EntityType, commentId });
        res.status(201).json({ message: "Reply posted!." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function imageCommentLike(req, res) {
    try {
        const id = Number(req.params.imageId);
        const userId = Number(req.user.id);
        const commentId = Number(req.params.commentId);
        const EntityType = "IMAGE";

        await commentService.createCommentlike({ id, userId, EntityType, commentId });
        res.status(201).json({ message: "Liked!." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function videoCommentLike(req, res) {
    try {
        const id = Number(req.params.videoId);
        const userId = Number(req.user.id);
        const commentId = Number(req.params.commentId);
        const EntityType = "VIDEO";

        await commentService.createCommentlike({ id, userId, EntityType, commentId });
        res.status(201).json({ message: "Liked!." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}


module.exports = {
    uploadImage,
    uploadVideo,
    fetchVideos,
    fetchImages,
    deleteImage,
    deleteVideo,

    imageComment,
    videoComment,
    imageLike,
    videoLike,
    imageCommentReply,
    videoCommentReply,
    imageCommentLike,
    videoCommentLike
}