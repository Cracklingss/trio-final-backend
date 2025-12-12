/*
  Warnings:

  - You are about to drop the column `rate` on the `Reviews` table. All the data in the column will be lost.
  - Added the required column `laborerId` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "rate",
ADD COLUMN     "laborerId" TEXT NOT NULL,
ADD COLUMN     "laborerRate" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_laborerId_fkey" FOREIGN KEY ("laborerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
