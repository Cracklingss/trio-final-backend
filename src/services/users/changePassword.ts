// import UserRepository from "@/repositories/UserRepository";
// import bcrypt from "bcryptjs";

// export async function changePasswordService(email: string, password: string ,userType: string) {
//   //Check email exists
//   const user = await UserRepository.findByEmail(email);
//   if(!user) {
//     return {
//       status: "error",
//       message: "User not found"
//     }
//   }

//   //Validate old password
//   const validPass = await bcrypt.compare(password, user.password);
//   if(!validPass) {
//     return {
//       status: "error",
//       message: "Wrong password"
//     }
//   }

//   //Hash password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   //Change password
//   if(user.userType === "customer") {
//     await UserRepository.updateCustomer(email, { password: hashedPassword });
//   } else if(user.userType === "laborer") {
//     await UserRepository.updateLaborer(email, { password: hashedPassword });
//   }

//   return {
//     status: "success",
//     message: "Password changed successfully!"
//   }
// }