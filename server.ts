import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, projectType, date, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    try {
      // Configure your SMTP transporter here
      // For Gmail: use service: 'gmail' and auth: { user: YOUR_EMAIL, pass: YOUR_APP_PASSWORD }
      // For other services: use host, port, etc.
      
      const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || 'gmail',
        auth: {
          user: process.env.EMAIL_USER, // e.g. cokreatemedia@gmail.com
          pass: process.env.EMAIL_PASS, // App-specific password
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "cokreatemedia@gmail.com",
        subject: `New Booking Request: ${projectType} from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Project Type: ${projectType}
          Preferred Date: ${date}
          
          Message:
          ${message}
        `,
        html: `
          <h3>New Booking Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Preferred Date:</strong> ${date}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // In a real environment, we would send the email.
      // If credentials are missing, we'll simulate success in dev or throw error.
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("Email credentials missing. Simulating successful send.");
        return res.status(200).json({ message: "Simulated: Message received (Environment variables EMAIL_USER/EMAIL_PASS not set)" });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send message. Please try again later." });
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
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
