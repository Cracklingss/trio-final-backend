import { PrismaClient } from "@prisma/client";
import { BookingsData } from "@/types/bookings"

const prisma = new PrismaClient();

class BookingRepository {
  async findAll() {
      return await prisma.bookings.findMany();
    }
  
    async findById(id: string) {
      return await prisma.bookings.findFirst({ where: { id }, include: { customer: true, laborer: true } });
    }
  
    async findAllActive() {
      return await prisma.bookings.findMany({ where: { isActive: true } });
    }
  
    async create(data: BookingsData) {
      return await prisma.bookings.create({ data });
    }
  
    async update(id: string, data: Partial<BookingsData>) {
      return await prisma.bookings.update({ where: { id }, data });
    }
  
    async hardDelete(id: string) {
      return await prisma.bookings.delete({ where: { id } });
    }
  
    async softDelete(id: string) {
      return await prisma.bookings.update({ where: { id }, data: { isActive: false } });
    }
  
    async reactivate(id: string) {
      return await prisma.bookings.update({ where: { id }, data: { isActive: true } });
    }
}

export default new BookingRepository();