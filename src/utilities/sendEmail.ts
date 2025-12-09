// lib/sendEmail.ts
"use server";
import nodemailer from "nodemailer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function sendEmail(toEmail: string, code: string) {
  const normalizedEmail = toEmail.toLowerCase();

  // store code in database (10 min expiration)
  await prisma.passwordRecovery.create({
    data: {
      email: normalizedEmail,
      code,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
  });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Kugi <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Account Forgot Password",
      html: `<h1>Hello User!</h1><p>Here is your recovery code: ${code}</p>`,
    });

    return { status: "success" };
  } catch (error: any) {
    console.error("Email sending error:", error);
    return { status: "error", message: error.message };
  }
}

export async function verifyCode(toEmail: string, inputCode: string) {
  const normalizedEmail = toEmail.toLowerCase();

  const record = await prisma.passwordRecovery.findFirst({
    where: {
      email: normalizedEmail,
      code: inputCode,
      expiresAt: { gt: new Date() }, // code still valid
    },
    orderBy: { createdAt: "desc" },
  });

  return { status: "success", data: record !== null };
}
