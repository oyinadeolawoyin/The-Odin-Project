const storyService = require("../services/storyService");
const commentService = require("../services/commentService");
const  { uploadFile } = require("./fileController");


async function createStory(req, res) {
    const { title, summary, tags, status } = req.body;
    const file = req.file;
    const userId = req.user.id;
    
    console.log("Request received:", { title, summary, tags, status, hasFile: !!file, userId });
    try {
        if (file) {
            console.log("Uploading file...");
            const image = await uploadFile(file);
            console.log("File uploaded:", image);
 
            if (req.user.role === "ADMIN") {
                console.log("Creating story...");
                const newStory = await storyService.createStory({ 
                    title, 
                    image, 
                    summary, 
                    tags, 
                    status, 
                    userId 
                });
                console.log("Story created");
                res.status(201).json({ story: newStory }); 
            } else {
               res.status(403).json({ message: "you are Only admin is permitted to create a story" });
            }  
        } else {
            res.status(400).json({ message: "File is required to create a story." });
        }
    } catch(error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function updateStory(req, res) {
    console.log("lok")
    const { title, summary, tags, status } = req.body;
    const file = req.file;
    const id = Number(req.params.id);
    console.log("Request received from update:", { title, summary, tags, status, hasFile: !!file }); 
    try {
        if (file) {
            console.log("Uploading file...");
            const image = await uploadFile(file);
            console.log("File uploaded:", image);

            if (req.user.role === "ADMIN") {
                const storyUpdate = await storyService.updateStory({ id, title, image, summary, tags, status });
                res.status(201).json({ story: storyUpdate }); 
            }else {
                res.status(403).json({ message: "Only admin is permitted to update a story" });
            }
        } else {
            res.status(400).json({ message: "File is required to create a story." });
        }
        
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

async function fetchStories(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            const stories = await storyService.fetchStories(Number(req.user.id));

            if (stories.length === 0) {
                return res.status(404).json({ message: "No Stories Yet." });
            }

            res.status(201).json({ stories: stories });
        }else {
            res.status(403).json({ message: "Only admin is permitted to fetch stories" });
        }
    } catch(error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function fetchStory(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            const story = await storyService.fetchStory(Number(req.params.id));

            res.status(201).json({ story: story });
        }else {
            res.status(403).json({ message: "Only admin is permitted to fetch story" });
        }
    } catch(error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function deleteStory(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            await storyService.deleteStory(Number(req.params.id));
            res.status(201).json({ message: "Story deleted." });
        } else {
            res.status(403).json({ message: "Only admin is permitted to delete Story" });
        }
    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function review(req, res) {
    const { title, content } = req.body;

    try {
        const userId = Number(req.user.id);
        const storyId = Number(req.params.id);
        await storyService.createReview({ title, content, storyId, userId });
        res.status(201).json({ message: "Review posted." }); 
    } catch(error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function fetchReview(req, res) {
    try {
        const reviews = await storyService.fetchReview(Number(req.params.id));
        if (reviews.length === 0) {
            return res.status(404).json({ message: "No Review Yet." });
        }
        res.status(201).json({ reviews: reviews });

    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function deleteReview(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            await storyService.deleteReview(Number(req.params.reviewId));
            res.status(201).json({ message: "Review deleted." });
        } else {
            res.status(403).json({ message: "Only admin is permitted to delete posts" });
        }
    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function chapter(req, res) {
    const { title, content } = req.body;

    try {
        const userId = Number(req.user.id);
        const storyId = Number(req.params.id);
        await storyService.createChapter({ title, content, storyId, userId });
        res.status(201).json({ message: "Chapter posted." }); 
    } catch(error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function fetchChapters(req, res) {
    try {
        const chapters = await storyService.fetchChapters(Number(req.params.id));
        if (chapters.length === 0) {
            return res.status(404).json({ message: "No Chapter Yet." });
        }
        res.status(201).json({ chapters: chapters });

    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function fetchChapter(req, res) {
    try {
        const chapter = await storyService.fetchChapter(Number(req.params.chapterId));
       
        res.status(201).json({ chapter: chapter });

    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function deleteChapter(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            await storyService.deleteChapter(Number(req.params.chapterId));
            res.status(201).json({ message: "Chapter deleted." });
        } else {
            res.status(403).json({ message: "Only admin is permitted to delete posts" });
        }
    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function chapterComment(req, res) {
    const { content } = req.body;

    try {
        const id = Number(req.params.chapterId);
        const userId = Number(req.user.id);
        const EntityType = "CHAPTER";

        await commentService.createComment({ content, userId, id, EntityType });
        res.status(201).json({ message: "comment posted." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function chapterLike(req, res) {
    try {
        const id = Number(req.params.chapterId);
        const userId = Number(req.user.id);
        const EntityType = "CHAPTER";

        await commentService.createLike({ userId, id,  EntityType });
        res.status(201).json({ message: "Liked!" });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function commentReply(req, res) {
    const { content } = req.body;

    try {
        const id = Number(req.params.chapterId);
        const userId = Number(req.user.id);
        const EntityType = "CHAPTER";
        const commentId = Number(req.params.commentId);

        await commentService.createReply({ content,id, userId, EntityType, commentId });
        res.status(201).json({ message: "Reply posted!." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function commentLike(req, res) {
    try {
        const id = Number(req.params.chapterId);
        const userId = Number(req.user.id);
        const commentId = Number(req.params.commentId);
        const EntityType = "CHAPTER";

        await commentService.createCommentlike({ id, userId, EntityType, commentId });
        res.status(201).json({ message: "Liked!." });
    } catch (error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}




module.exports = {
    createStory,
    updateStory,
    fetchStories,
    fetchStory,
    deleteStory,

    review,
    fetchReview,
    deleteReview,

    chapter,
    fetchChapters,
    fetchChapter,
    deleteChapter,
    
    chapterComment,
    commentLike,
    chapterLike,
    commentLike,
    commentReply
}