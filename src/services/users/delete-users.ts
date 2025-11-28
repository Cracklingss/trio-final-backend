import UserRepository from "@/repositories/UserRepository";

export async function  hardDeleteUserService(email: string) {
  // Check if user exists
  const userExist = await UserRepository.findByEmail(email);
  if (!userExist) {
    return { status: "error", message: "User not found" };
  }

  // Delete user from the database
  await UserRepository.hardDelete(email);

  return {
    status: "success",
    message: "User deleted from the database!",
  }
}

export async function softDeleteUserService(email: string) {
  // Check if user exists
  const userExist = await UserRepository.findByEmail(email);
  if (!userExist) {
    return { status: "error", message: "User not found" };
  }

  // Validate if use is already deactivated
  if(!userExist.isActive) {
    return { status: "error", message: "User is already deactivated" };
  }

  // isActive = false
  await UserRepository.softDelete(email);

  return {
    status: "success",
    message: "User deactivated",
  }
}