import UserRepositories from "@/repositories/UserRepository";
import bcrypt from "bcryptjs";

export async function forgotPasswordService(email: string, password: string) {
  // Get user
  const result = await UserRepositories.findByEmail(email);

  // Hash password
  // const hashedPassword = await UserRepositories.

  // Update user
}