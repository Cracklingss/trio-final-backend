import { PrismaClient } from "@prisma/client";
import { ReviewsData } from "@/types/reviews"

const prisma = new PrismaClient();

class ReviewRepository {
  async create(data: ReviewsData) {
    return await prisma.reviews.create({ data });
  }
  
  async findAll() {
    return await prisma.reviews.findMany();
  }

  async findById(id: string) {
    return await prisma.reviews.findFirst({ where: {id} });
  }

  async update(id: string, data: Partial<ReviewsData>) {
    return await prisma.reviews.update({where: {id}, data})
  }

  async delete(id: string) {
    return await prisma.reviews.delete({where: {id}});
  }
}

export default new ReviewRepository();