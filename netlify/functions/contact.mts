// Netlify Function v2 (ES module)
export default async (req: Request) => {
  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return new Response(JSON.stringify({ error: "Server configuration error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Use Resend REST API directly to avoid module bundling issues
    const sendEmail = async (payload: object) => {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Resend API error: ${res.status} - ${err}`);
      }
      return res.json();
    };

    // 1. Send notification to Uday
    await sendEmail({
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
    await sendEmail({
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
  } catch (error: any) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email", details: error?.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
