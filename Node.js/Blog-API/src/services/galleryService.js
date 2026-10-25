const prisma = require("../config/prismaClient");

async function uploadImage({ caption, url, userId }) {
    return await prisma.image.create({
        data: {
          caption,
          url,
          userId
        }
    });
}

async function uploadVideo({ caption, url, userId }) {
    return await prisma.video.create({
        data: {
          caption,
          url,
          userId
        }
    });
}

async function fetchVideos({ userId }) {
  const videos = await prisma.video.findMany({ 
    where: { userId },
    include: {
        user: {
          select: {
            username: true,
            country: true,
            gender: true
          }
        },
    },
 });
  const videoIds = videos.map(v => v.id);

  const comments = await prisma.comment.findMany({
    where: {
      commentableType: 'VIDEO',
      commentableId: { in: videoIds },
    },
    include: {
      user: {
        select: {
          username: true,
          country: true,
          gender: true
        }
      },
      replies: {
        include: {
          user: {
            select: {
              username: true,
              country: true,
              gender: true
            }
          },
          likes: {
            include: {
              user: {
                select: {
                  username: true,
                  country: true,
                  gender: true
                }
              }
            }
          }
        }
      },
      likes: {
        include: {
          user: {
            select: {
              username: true,
              country: true,
              gender: true
            }
          }
        }
      }
    }
  });

  const likes = await prisma.like.findMany({
    where: {
      likeableType: 'VIDEO',
      likeableId: { in: videoIds },
    },
    include: {
        user: {
            select: {
            username: true,
            country: true,
            gender: true
            }
        },
    },
  });

  const groupBy = (array, key) =>
    array.reduce((acc, item) => {
      (acc[item[key]] = acc[item[key]] || []).push(item);
      return acc;
    }, {});

  const commentsByVideoId = groupBy(comments, 'commentableId');
  const likesByVideoId = groupBy(likes, 'likeableId');

  return videos.map(video => ({
    video,
    comments: commentsByVideoId[video.id] || [],
    likes: likesByVideoId[video.id] || [],
  }));
}

async function fetchImages({ userId }) {
  const images = await prisma.image.findMany({ 
    where: { userId },
    include: {
        user: {
          select: {
            username: true,
            country: true,
            gender: true
          }
        }
    }
 });
  const imageIds = images.map(v => v.id);

  const comments = await prisma.comment.findMany({
    where: {
      commentableType: 'IMAGE',
      commentableId: { in: imageIds },
    },
    include: {
      user: {
        select: {
          username: true,
          country: true,
          gender: true
        }
      },
      replies: {
        include: {
          user: {
            select: {
              username: true,
              country: true,
              gender: true
            }
          },
          likes: {
            include: {
              user: {
                select: {
                  username: true,
                  country: true,
                  gender: true
                }
              }
            }
          }
        }
      },
      likes: {
        include: {
          user: {
            select: {
              username: true,
              country: true,
              gender: true
            }
          }
        }
      }
    }
  });
  

  const likes = await prisma.like.findMany({
    where: {
      likeableType: 'IMAGE',
      likeableId: { in: imageIds },
    },
    include: {
        user: {
            select: {
            username: true,
            country: true,
            gender: true
            }
        },
    }
  });

  const groupBy = (array, key) =>
    array.reduce((acc, item) => {
      (acc[item[key]] = acc[item[key]] || []).push(item);
      return acc;
    }, {});

  const commentsByImageId = groupBy(comments, 'commentableId');
  const likesByImageId = groupBy(likes, 'likeableId');

  return images.map(image => ({
    image,
    comments: commentsByImageId[image.id] || [],
    likes: likesByImageId[image.id] || [],
  }));
}

async function deleteImage(id) {
    return await prisma.$transaction(async (tx) => {
        await tx.comment.deleteMany({ where: { commentableId: id, commentableType: 'IMAGE' } });
        await tx.like.deleteMany({ where: { likeableId: id, likeableType: 'IMAGE' } });
        return await tx.image.delete({ where: { id } });
    });
}

async function deleteVideo(id) {
    return await prisma.$transaction(async (tx) => {
        await tx.comment.deleteMany({ where: { commentableId: id, commentableType: 'VIDEO' } });
        await tx.like.deleteMany({ where: { likeableId: id, likeableType: 'VIDEO' } });
        return await tx.video.delete({ where: { id } });
    });
}

module.exports = {
    uploadImage,
    uploadVideo,
    fetchVideos,
    fetchImages,
    deleteImage,
    deleteVideo
};