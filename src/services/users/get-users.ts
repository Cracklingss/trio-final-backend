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
  console.log("fasdfads", result);

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