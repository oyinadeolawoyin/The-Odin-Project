const prisma = require("../config/prismaClient");

async function createStory({ title, image, summary, tags, status, userId }) {
    return await prisma.story.create({
        data: {
            title: title,
            imgUrl: image,
            summary: summary,
            tags: tags,
            status: status,
            userId: userId
        }
    });
}

async function updateStory({ id, title, image, summary, tags, status }) {
    return await prisma.story.update({
        where: {
            id,
        },

        data: {
            title: title,
            imgUrl: image,
            summary: summary,
            tags: tags,
            status: status,
        }
    });
}

async function fetchStories(userId) {
  
  const stories = await prisma.story.findMany({ 
    where: { userId: userId },
    include: {
      user: {
        select: {
          username: true,
        }
      },
      reviews: true,
      chapters: true,
    }
  });
  const storiesIds = stories.map(v => v.id);


  const likes = await prisma.like.findMany({
    where: {
      likeableType: 'STORY',
      likeableId: { in: storiesIds },
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

  const likesByStoryId = groupBy(likes, 'likeableId');

  return stories.map(story => ({
    ...story,
    likes: likesByStoryId[story.id] || [],
  }));
}


async function fetchStory(id) {
    const story = await prisma.story.findUnique({
        where: { id: id },
        include: {
          user: {
            select: {
              username: true,
            }
          },
          reviews: true,
          chapters: true,
        }
    });
      
  const likes = await prisma.like.findMany({
    where: {
      likeableType: 'STORY',
      likeableId: id,
    },
    include: {
        user: {
          select: {
            username: true,
            country: true,
            gender: true,
          }
        },
    }
  });

  return {
    story,
    likes,
  };
}

async function deleteStory(id) {
    return await prisma.$transaction(async (tx) => {
        await tx.like.deleteMany({ where: { likeableId: id, likeableType: 'STORY' } });
        return await tx.story.delete({ where: { id } });
    });
}

async function createReview({ title, content, storyId, userId }) {
    return await prisma.review.create({
        data: {
            title: title,
            content: content,
            storyId: storyId,
            userId: userId
        }
    });
}

async function fetchReview(id) {
    const reviews = await prisma.review.findMany({
        where: { storyId: id },
        include: { 
            user: {
                select: {
                  username: true,
                }
            },
        },
    });
    
    const reviewIds = reviews.map(v => v.id);

    const likes = await prisma.like.findMany({
        where: {
        likeableType: 'STORY',
        likeableId: { in: reviewIds },
        },
        include: {
            user: {
              select: {
                username: true,
                country: true,
                gender: true,
              }
            },
        }
    });
    
    
    const groupBy = (array, key) =>
        array.reduce((acc, item) => {
        (acc[item[key]] = acc[item[key]] || []).push(item);
        return acc;
        }, {});

    const likesByReviewId = groupBy(likes, 'likeableId');

    return reviews.map(review => ({
        review,
        likes: likesByReviewId[review.id] || [],
    }));
}

async function deleteReview(id) {
    return await prisma.$transaction(async (tx) => {
        await tx.like.deleteMany({ where: { likeableId: id, likeableType: 'REVIEW' } });
        return await tx.review.delete({ where: { id } });
    });
}

async function createChapter({ title, content, storyId, userId }) {
    return await prisma.chapter.create({
        data: {
            title: title,
            content: content,
            storyId: storyId,
            userId: userId
        }
    });
}

async function fetchChapters(id) {
    const chapters = await prisma.chapter.findMany({
      where: {
        storyId: id
      }
    });

    const chapterIds = chapters.map(v => v.id);
  
    const comments = await prisma.comment.findMany({
      where: {
        commentableType: 'CHAPTER',
        commentableId: { in: chapterIds },
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
        likeableType: 'CHAPTER',
        likeableId: { in: chapterIds },
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
  
    const commentsByChapterId = groupBy(comments, 'commentableId');
    const likesByChapterId = groupBy(likes, 'likeableId');
  
    return chapters.map(chapter => ({
      ...chapter,
      comments: commentsByChapterId[chapter.id] || [],
      likes: likesByChapterId[chapter.id] || [],
    }));
}


async function fetchChapter(id) {
    const chapter = await prisma.chapter.findUnique({
        where: { id: id },
    });
      
    const comments = await prisma.comment.findMany({
        where: {
          commentableType: 'CHAPTER',
          commentableId: id,
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
        likeableType: 'CHAPTER',
        likeableId: id,
        },
        include: {
            user: {
                select: {
                    username: true,
                    country: true,
                    gender: true,
                }
            },
        }
    });

  return {
    chapter,
    likes,
    comments
  };
}

async function deleteChapter(id) {
    return await prisma.$transaction(async (tx) => {
        await tx.comment.deleteMany({ where: { commentableId: id, commentableType: 'CHAPTER' } });
        await tx.like.deleteMany({ where: { likeableId: id, likeableType: 'CHAPTER' } });
        return await tx.chapter.delete({ where: { id } });
    });
}

module.exports = {
    createStory,
    updateStory,
    fetchStories,
    fetchStory,
    deleteStory,
    
    createReview,
    fetchReview,
    deleteReview,

    createChapter,
    fetchChapters,
    fetchChapter,
    deleteChapter,
}