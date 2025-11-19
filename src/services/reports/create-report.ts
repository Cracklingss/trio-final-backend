import ReportRepository from "@/repositories/ReportRepository";
import { ReportsData } from "@/types/reports";

export async function createReportService(data: ReportsData) {
  // Check if there's no empty fields
  if (!data.reason || !data.reportedAcc || !data.whatHappened) {
    return {
      status: "error",
      message: "Missing fields!",
      data: null,
    };
  }

  // Create reported user
  const result = await ReportRepository.create({
    reportedAcc: data.reportedAcc,
    typeOfUser: data.typeOfUser,
    reason: data.reason,
    others: data.others,
    whatHappened: data.whatHappened,
  });

  return {
    status: "success",
    message: "Successfully created reported user",
    data: result,
  };
}
