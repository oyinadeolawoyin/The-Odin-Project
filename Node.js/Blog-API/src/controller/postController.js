const postService = require("../services/postService");

async function post(req, res) {
    const { title, content } = req.body;
   
    try {
        if (req.user.role === "ADMIN") {
            const userId = req.user.id;
            await postService.createPost({ title, content, userId });
            res.status(201).json({ message: "Post created." }); 
        } else {
            res.status(403).json({ message: "Only admin is permitted to create a post" });
        }
        
    } catch(error) {
        res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function fetchPost(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            const posts = await postService.fetchPosts(req.user.id);

            if (posts.length === 0) {
                return res.status(404).json({ message: "No posts Yet." });
            }

            res.status(201).json({ posts: posts });
        } else {
            res.status(403).json({ message: "Only admin is permitted to get posts" });
        }
    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

async function deletePost(req, res) {
    try {
        if (req.user.role === "ADMIN") {
            await postService.deletePost(Number(req.params.id));
            res.status(201).json({ message: "Post deleted." });
        } else {
            res.status(403).json({ message: "Only admin is permitted to delete posts" });
        }
    } catch (error) {
            res.status(500).json({ error: error.message || "Something went wrong" });
    }
}

module.exports = {
    post,
    fetchPost,
    deletePost
}