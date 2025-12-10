/*
  Warnings:

  - Added the required column `laborerId` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "laborerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_laborerId_fkey" FOREIGN KEY ("laborerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
