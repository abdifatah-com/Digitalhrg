import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      first_name,
      last_name,
      email,
      company_name,
      help,
      company_size,
      info,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    const mailOptions = {
      from: process.env.ZOHO_USER,
      to: process.env.ZOHO_USER, // Send to your own inbox
      subject: "Contact Form Submission",
      html: `
        <h1>Contact Form</h1>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${company_name}</p>
        <p><strong>Company Size:</strong> ${company_size}</p>
        <p><strong>Help:</strong> ${help}</p>
        <p><strong>Info:</strong> ${info}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json("Email has been sent ✅");
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json("Failed to send email ❌");
  }
}
