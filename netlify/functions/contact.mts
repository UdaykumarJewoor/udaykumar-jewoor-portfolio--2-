import type { Context } from "@netlify/functions";
import { Resend } from "resend";

export default async (req: Request, context: Context) => {
  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // 1. Send notification to Uday
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "uday07894@gmail.com",
      subject: `New Message: ${subject || "No Subject"}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2. Send thank you to the sender
    await resend.emails.send({
      from: "Udaykumar Jewoor <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out to me through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br><strong>Udaykumar Jewoor</strong></p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
