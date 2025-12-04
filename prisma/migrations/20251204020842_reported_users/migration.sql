/*
  Warnings:

  - You are about to drop the column `reason` on the `ReportedUsers` table. All the data in the column will be lost.
  - You are about to drop the column `reportedAcc` on the `ReportedUsers` table. All the data in the column will be lost.
  - You are about to drop the column `whatHappened` on the `ReportedUsers` table. All the data in the column will be lost.
  - Added the required column `description` to the `ReportedUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reasons` to the `ReportedUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reportedUser` to the `ReportedUsers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReportedUsers" DROP COLUMN "reason",
DROP COLUMN "reportedAcc",
DROP COLUMN "whatHappened",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "reasons" TEXT NOT NULL,
ADD COLUMN     "reportedUser" TEXT NOT NULL;
