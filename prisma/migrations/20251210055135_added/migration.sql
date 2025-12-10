-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "customerId" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "laborerId" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
