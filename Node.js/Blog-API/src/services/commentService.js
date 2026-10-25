const prisma = require("../config/prismaClient");

async function createComment({ content, userId, id, EntityType}) {
    return await prisma.comment.create({
        data: {
            content: content,
            userId: userId,
            commentableId: id,
            commentableType: EntityType
        }
    })
}

async function createLike({ userId, id, EntityType }) {
  return await prisma.like.create({
    data: {
      userId: userId,
      likeableId: id,
      likeableType: EntityType,
    }
  });
}


async function createReply({ content, id, userId, EntityType, commentId }) {
    return await prisma.comment.create({
        data: {
            content: content,
            userId: userId,
            commentableId: id,
            commentableType: EntityType,
            parentId: commentId
        }
    })
}

async function createCommentlike({ id, userId, EntityType, commentId }) {
    return await prisma.like.create({
        data: {
            userId: userId,
            likeableId: id,
            likeableType: EntityType,
            commentId: commentId
        }
    })
}

module.exports = {
    createComment,
    createLike,
    createCommentlike,
    createReply
}