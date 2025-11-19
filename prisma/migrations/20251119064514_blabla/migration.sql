/*
  Warnings:

  - Added the required column `typeOfUser` to the `ReportedUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReportedUsers" ADD COLUMN     "typeOfUser" TEXT NOT NULL;
