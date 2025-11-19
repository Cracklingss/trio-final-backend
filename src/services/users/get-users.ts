import UserRepository from "@/repositories/UserRepository";

export async function getAllUsersService() {
  const result = await UserRepository.findAll();

  return {
    status: "success",
    message: "Successfully fetched all users",
    data: result
  }
}

export async function getUserByEmailService(email: string, userType: string) {
  const result = await UserRepository.findByEmail(email, userType);

  return {
    status: "success",
    message: "Successfully fetched user",
    data: result
  }
}