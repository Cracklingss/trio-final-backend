import { PrismaClient } from "@prisma/client";
import * as UserInterfaces from "@/types/user";

const prisma = new PrismaClient();

class UserRepository {
  async findAll() {
    return await prisma.users.findMany();
  }

  async findByEmail (email: string) {
    return await prisma.users.findFirst({ where: { email } });
  }

  async findById(id: string) {
    return await prisma.users.findFirst({ where: { id } });
  }
  
  async create(data: UserInterfaces.CreateUserData) {
    return await prisma.users.create({ data });
  }

  async update(email: string, data: Partial<UserInterfaces.CreateUserData>) {
    return await prisma.users.update({ where: { email }, data });
  }

  async hardDelete(email: string) {
    return await prisma.users.delete({ where: { email } });
  }

  async softDelete(email: string) {
    return await prisma.users.update({ where: { email }, data: { isActive: false } })
  }

  async reactivate(email: string) {
    return await prisma.users.update({ where: { email }, data: { isActive: true }});
  }
}

export default new UserRepository();
