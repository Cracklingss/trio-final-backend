/*
  Warnings:

  - Added the required column `isActive` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Laborers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customers" ADD COLUMN     "isActive" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Laborers" ADD COLUMN     "isActive" BOOLEAN NOT NULL;
