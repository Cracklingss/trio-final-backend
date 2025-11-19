import ReportRepository from "@/repositories/ReportRepository";

export async function getReportsService() {
  // Fetch reported users
  const result = await ReportRepository.findAll();

  return {
    status: "success",
    message: "Successfully fetched reported users",
    data: result,
  };
}

export async function getReportByIdService(id: string) {
  // Check if ID is provided
  if (!id) {
    return {
      status: "error",
      message: "ID is not provided",
      data: null,
    };
  }

  // Fetch report by id
  const result = await ReportRepository.findById(id);

  // Check if report exists
  if (!result) {
    return {
      status: "error",
      message: "Report does not exist",
      data: null
    };
  }

  return {
    status: "success",
    message: "Successfully fetched reported users by ID",
    data: result,
  };
}
