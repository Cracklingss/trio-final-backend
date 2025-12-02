import UserRepository from "@/repositories/UserRepository";

export async function getAllUsersService() {
  const result = await UserRepository.findAll();

  return {
    status: "success",
    message: "Successfully fetched all users",
    data: result
  }
}

export async function getUserByEmailService(email: string) {
  const result = await UserRepository.findByEmail(email);

  if(result === null) {
    return {
      status: "error",
      message: "User not found"
    }
  }

  return {
    status: "success",
    message: "Successfully fetched user",
    data: result
  }
}

export async function getUserByIdService(id: string) {
  const result = await UserRepository.findById(id);

  if(result === null) {
    return {
      status: "error",
      message: "User not found"
    }
  }

  return {
    status: "success",
    message: "Successfully fetched user",
    data: result
  }
}