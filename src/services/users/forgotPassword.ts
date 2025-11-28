import UserRepositories from "@/repositories/UserRepository";

export async function forgotPasswordService(email: string) {
  const result = await UserRepositories.findByEmail(email);

  
}