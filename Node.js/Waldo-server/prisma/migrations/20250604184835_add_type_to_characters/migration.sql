/*
  Warnings:

  - Added the required column `type` to the `Characters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Characters" ADD COLUMN     "type" TEXT NOT NULL;
