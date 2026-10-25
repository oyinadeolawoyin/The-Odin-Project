/*
  Warnings:

  - You are about to drop the column `likes` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `Chapter` table. All the data in the column will be lost.
  - You are about to drop the column `chapterId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `storyId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `Story` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `Story` table. All the data in the column will be lost.
  - Added the required column `commentableId` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commentableType` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('IMAGE', 'VIDEO', 'CHAPTER', 'STORY', 'REVIEW', 'POST');

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_chapterId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_storyId_fkey";

-- AlterTable
ALTER TABLE "Chapter" DROP COLUMN "likes",
DROP COLUMN "status",
DROP COLUMN "views";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "chapterId",
DROP COLUMN "likes",
DROP COLUMN "storyId",
ADD COLUMN     "commentableId" INTEGER NOT NULL,
ADD COLUMN     "commentableType" "EntityType" NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "likes",
ADD COLUMN     "content" TEXT NOT NULL,
ALTER COLUMN "rate" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "likes",
DROP COLUMN "views";

-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "likeableId" INTEGER NOT NULL,
    "likeableType" "EntityType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "commentId" INTEGER,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
