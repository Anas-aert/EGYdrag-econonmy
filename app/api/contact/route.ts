import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { from, to, message } = await req.json();

    if (!from || !to || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🚫 منع Outlook فقط
    const domain = from.split("@")[1]?.toLowerCase();
    if (
      domain?.includes("outlook") ||
      domain?.includes("hotmail") ||
      domain?.includes("live")
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Outlook/Hotmail emails are not supported. Please use a Gmail or another provider.",
          unsupported_provider: true,
        },
        { status: 400 }
      );
    }

    // ✔ الإعدادات الصحيحة (Gmail فقط)
    const transporter = nodemailer.createTransport({
      host: process.env.GMAIL_HOST,
      port: Number(process.env.GMAIL_PORT),
      secure: process.env.GMAIL_SECURE === "true",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✔ إرسال الإيميل إليك
    await transporter.sendMail({
      to,
      from: process.env.GMAIL_USER,
      replyTo: from,
      subject: `Contact Message from ${from}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // ✔ إرسال تأكيد للمستخدم
    await transporter.sendMail({
      to: from,
      from: process.env.GMAIL_USER,
      subject: "Message Received Successfully",
      html: `
        <h2>Your message was received</h2>
        <p>Thanks for contacting us!</p>
        <p><em>${message}</em></p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
