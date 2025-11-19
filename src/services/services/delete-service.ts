import ServicesRepository from "@/repositories/ServicesRepository";

export async function hardDeleteServiceService(id: string) {
  // Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "ID is not provided",
      data: null
    }
  }

  // Check if service exists
  const serviceExists = await ServicesRepository.findById(id);
  if(!serviceExists) {
    return {
      status: "error",
      message: "Service doesn't exists",
      data: null
    }
  }

  // Hard delete service
  const result = await ServicesRepository.hardDelete(id);

  return {
    status: "success",
    message: "Successfully deleted service",
    data: result
  }
}

export async function softDeleteServiceService(id: string) {
  // Check if ID is provided
  if(!id) {
    return {
      status: "error",
      message: "ID is not provided",
      data: null
    }
  }

  // Check if service is deactivated
  const serviceActive = await ServicesRepository.findById(id);
  if(!serviceActive?.isActive) {
    return {
      status: "error",
      message: "Service is already deactivated",
      data: null
    }
  }

  // Deactivate service
  const result = await ServicesRepository.softDelete(id);

  return {
    status: "success",
    message: "Successfully deactivated service",
    data: result
  }
}