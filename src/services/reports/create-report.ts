import ReportRepository from "@/repositories/ReportRepository";
import { ReportsData } from "@/types/reports";

export async function createReportService(data: ReportsData) {
  // Check if there's no empty fields
  if (!data.reasons || !data.reportedUser || !data.description) {
    return {
      status: "error",
      message: "Missing fields!",
    };
  }

  // Create reported user
  const result = await ReportRepository.create({
    userId: data.userId,
    reportedUser: data.reportedUser,
    userType: data.userType,
    reasons: data.reasons,
    others: data.others,
    description: data.description,
  });

  return {
    status: "success",
    message: "Successfully created reported user",
    data: result,
  };
}
