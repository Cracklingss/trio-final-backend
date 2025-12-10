import UserRepository from "@/repositories/UserRepository";
import bcrypt from "bcryptjs";

export async function changePasswordService(id: string, currentPassword: string, newPassword: string) {
  //Check email exists
  const user = await UserRepository.findById(id);
  if(!user) {
    return {
      status: "error",
      message: "User not found"
    }
  }

  //Validate old password
  const validPass = await bcrypt.compare(currentPassword, user.password!);
  if(!validPass) {
    return {
      status: "error",
      message: "Wrong password"
    }
  }

  //Hash password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  //Change password
  await UserRepository.update(user.email!, {
    password: hashedPassword
  })

  return {
    status: "success",
    message: "Password changed successfully!"
  }
}