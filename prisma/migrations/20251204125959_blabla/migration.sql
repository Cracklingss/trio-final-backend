/*
  Warnings:

  - Added the required column `laborerId` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "laborerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_laborerId_fkey" FOREIGN KEY ("laborerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
