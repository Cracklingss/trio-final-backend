/*
  Warnings:

  - You are about to drop the column `typeOfUser` on the `ReportedUsers` table. All the data in the column will be lost.
  - You are about to drop the column `displayName` on the `Users` table. All the data in the column will be lost.
  - Added the required column `userType` to the `ReportedUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReportedUsers" DROP COLUMN "typeOfUser",
ADD COLUMN     "userType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "displayName";

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profilePicture" TEXT NOT NULL,
    "custmerName" TEXT NOT NULL,
    "rate" INTEGER NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);
