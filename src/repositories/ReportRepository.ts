import { PrismaClient } from "@prisma/client";
import { ReportsData } from "@/types/reports";

const prisma = new PrismaClient();

class ReportRepository {
  async findAll() {
    return await prisma.reportedUsers.findMany({
      orderBy: { reportedAcc: "asc" },
    });
  }

  async findById(id: string) {
    return await prisma.reportedUsers.findFirst({ where: { id } });
  }

  async create(data: ReportsData) {
    return await prisma.reportedUsers.create({ data });
  }

  async delete(id: string) {
    return await prisma.reportedUsers.delete({ where: { id } });
  }
}

export default new ReportRepository();
