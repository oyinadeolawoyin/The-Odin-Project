const prisma = require("../config/prismaClient");

async function fetchUsers(userRole) {
  return await prisma.user.findMany({
      where: { role: userRole },
      include: {
        reviews: true,
        images: true,
        videos: true,
        stories: true,
        chapters: true,
        posts: true,
        comments: true,
        likes: true
    }
  });
}

async function deleteUser(id) {
    return await prisma.user.delete({
        where: {
            id
        }
    });
}

module.exports = {
    fetchUsers,
    deleteUser
}