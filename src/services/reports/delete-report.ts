import ReportRepository from "@/repositories/ReportRepository";

export async function deleteReportService(id: string) {
  // Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "ID is not provided",
      data: null
    }
  }

  // Check if report exists
  const reportExist = await ReportRepository.findById(id);
  if(!reportExist) {
    return {
      status: "error",
      message: "Report doesn't exist",
      data: null
    }
  }

  const result = await ReportRepository.delete(id);

  return {
    status: "success",
    message: "Succesfully deleted report",
    data: result
  }
}
