import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
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

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
