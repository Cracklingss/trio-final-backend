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

  async findByEmail (email: string, userType: string) {
    if(userType === "customer") {
      const user = await prisma.customers.findUnique({ where: { email } });

      if(user) {
        return {
          ...user,
          userType: "customer",
        }
      }

      return null
    } else if(userType === "laborer") {
      const user = await prisma.laborers.findUnique({ where: { email } });
      
      if(user) {
        return {
          ...user,
          userType: "laborer",
        }
      }

      return null;
    } else {
      return null;
    }
  }

  async createLaborer(data: UserInterfaces.LaborerData) {
    return await prisma.laborers.create({
      data: data as Prisma.LaborersCreateInput,
    });
  }

  async createCustomer(data: UserInterfaces.CustomerData) {
    return await prisma.customers.create({
      data: data as Prisma.CustomersCreateInput,
    });
  }

  async createUser(
    userType: "laborer" | "customer",
    data: UserInterfaces.LaborerData | UserInterfaces.CustomerData
  ) {
    if (userType === "laborer") {
      return await prisma.laborers.create({
        data: data as Prisma.LaborersCreateInput,
      });
    } else if (userType === "customer") {
      return await prisma.customers.create({
        data: data as Prisma.CustomersCreateInput,
      });
    } else {
      return null;
    }
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
