import UserRepositories from "@/repositories/UserRepository";
import bcrypt from "bcryptjs";

export async function forgotPasswordService(email: string, newPassword: string) {
  // Get user
  const user = await UserRepositories.findByEmail(email);

  // Check if user exists
  if(!user) {
    return {
      status: "error",
      message: "User doesn't exists"
    }
  }

  if(!newPassword) {
    return {
      status: "error",
      message: "Password doesn't exists"
    }
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update Password
  await UserRepositories.update(email, { password: hashedPassword });

  return {
    status: "success",
    message: "Succcessfully changed password"
  }
}