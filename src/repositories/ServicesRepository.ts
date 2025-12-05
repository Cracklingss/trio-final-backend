import { Prisma, PrismaClient } from "@prisma/client";
import { ServiceData } from "@/types/service";

const prisma = new PrismaClient();

class ServiceRepository {
  async findAll() {
    return await prisma.services.findMany({ orderBy: { name: "asc" } });
  }

  async findById(id: string) {
    return await prisma.services.findFirst({ where: { id } });
  }

  async findAllActive() {
    return await prisma.services.findMany({ where: { isActive: true }, include: { laborer: true } });
  }

  async create(data: ServiceData) {
    return await prisma.services.create({ data });
  }

  async update(id: string, data: Partial<ServiceData>) {
    return await prisma.services.update({ where: { id },data });
  }

  async hardDelete(id: string) {
    return await prisma.services.delete({ where: { id } });
  }

  async softDelete(id: string) {
    return await prisma.services.update({ where: { id }, data: { isActive: false } });
  }

  async reactivate(id: string) {
    return await prisma.services.update({ where: { id }, data: { isActive: true } });
  }
}

export default new ServiceRepository();