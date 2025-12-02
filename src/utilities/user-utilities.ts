import { Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { getUserByEmailService } from "@/services/users"

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET!;

class UserUtilities {
  async createToken(req: Request, res: Response) {
    const { email } = req.body;
    const { data } = await getUserByEmailService(email);
    console.log("user by email", data);

    // Create a token
    const payload = { email: email, role: data?.userType, onBoarded: data?.onBoarded };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    console.log("payload", payload);

    // Send token to cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 100,
    });

    return res
      .status(200)
      .json({ status: "success", message: "Create token done!" });
  }

  async deleteToken(req: Request, res: Response) {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    })

    return res.status(200).json({ status: "success", message: "Token deleted!" });
  }
}

export default new UserUtilities();
