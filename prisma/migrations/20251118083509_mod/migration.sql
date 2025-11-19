-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
