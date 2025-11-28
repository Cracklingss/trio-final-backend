import { PrismaClient, Prisma } from "@prisma/client";
import * as UserInterfaces from "@/types/user";

const prisma = new PrismaClient();

class UserRepository {
  async findAll() {
    const [laborers, customers] = await Promise.all([
      prisma.laborers.findMany({ orderBy: { displayName: "asc" } }),
      prisma.customers.findMany({ orderBy: { displayName: "asc" } }),
    ]);

    const users = [ ...laborers, ...customers ];

    return users;
  }

  async findByEmail (email: string) {
    const result = await this.findAll();

    const user = result.find((i) => i.email === email);

    return user;
  }

  async createLaborer(data: UserInterfaces.CreateUserData) {
    const result = await this.findByEmail(data.email);

    if(result){
      if(data.email === result.email){
        return null
      }
    }

    return await prisma.laborers.create({
      data,
    });
  }

  async createCustomer(data: UserInterfaces.CreateUserData) {
    const result = await this.findByEmail(data.email);

    if(result){
      if(data.email === result.email){
        return null
      }
    }

    return await prisma.customers.create({
      data,
    });
  }

  

  async updateLaborer(email: string, data: Partial<UserInterfaces.LaborerData>) {
    return await prisma.laborers.update({ where: { email }, data });
  }

  async updateCustomer(email: string, data: Partial<UserInterfaces.CustomerData>) {
    return await prisma.customers.update({ where: { email }, data });
  }

  async hardDelete(email: string, userType: string) {
    if (userType === "customer") {
      return await prisma.customers.delete({ where: { email } });
    } else if (userType === "laborer") {
      return await prisma.laborers.delete({ where: { email } });
    } else {
      return null;
    }
  }

  async softDelete(email: string, userType: string) {
    if (userType === "customer") {
      return await prisma.customers.update({
        where: { email },
        data: { isActive: false },
      });
    } else if (userType === "laborer") {
      return await prisma.laborers.update({
        where: { email },
        data: { isActive: false },
      });
    } else {
      return null;
    }
  }

  async reactivate(email: string, userType: string) {
    if (userType === "customer") {
      return await prisma.customers.update({
        where: { email },
        data: { isActive: true },
      });
    } else if (userType === "laborer") {
      return await prisma.laborers.update({
        where: { email },
        data: { isActive: true },
      });
    } else {
      return null;
    }
  }
}

export default new UserRepository();
