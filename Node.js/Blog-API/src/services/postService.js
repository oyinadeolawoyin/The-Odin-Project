const prisma = require("../config/prismaClient");

async function createPost({ title, content, userId }) {
    console.log("CONpoo", content);
    return await prisma.post.create({
        data: {
            title,
            content,
            userId
        }
    });
}

async function fetchPosts(userId) {
  return await prisma.post.findMany({
    where: {
      userId: userId
    }
  });
}

async function deletePost(id) {
    return await prisma.post.delete({
        where: {
            id
        }
    });
}

module.exports = {
    createPost,
    fetchPosts,
    deletePost
}