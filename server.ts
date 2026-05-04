import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Config check (safely)
  app.get("/api/config-check", (req, res) => {
    res.json({
      MAILGUN_API_KEY_SET: !!process.env.MAILGUN_API_KEY,
      MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN || "Not Set",
      MAILGUN_REGION: process.env.MAILGUN_REGION || "US (default)",
      RECEIVER: process.env.CONTACT_RECEIVER_EMAIL || "vision@cokreatemedia.com (default)",
      NODE_ENV: process.env.NODE_ENV || "development"
    });
  });

  // API Routes
  app.post("/api/contact", async (req, res) => {
    console.log("DEBUG: Received contact request body:", req.body);
    const { name, email, projectType, date, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    try {
      const apiKey = (process.env.MAILGUN_API_KEY || "").trim();
      const domain = (process.env.MAILGUN_DOMAIN || "mg.cokreatemedia.com").trim();
      const region = (process.env.MAILGUN_REGION || "").toUpperCase().trim();
      const receiverEmail = (process.env.CONTACT_RECEIVER_EMAIL || "vision@cokreatemedia.com").trim();

      if (!apiKey) {
        console.warn("Mailgun API key missing. Simulating success for testing.");
        return res.status(200).json({ message: "Inquiry received (Email service not yet configured with API Key)." });
      }

      // Mask API key for safe logging: "key-12...89ab"
      const maskedKey = apiKey.length > 8 
        ? `${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}`
        : "****";

      console.log(`DEBUG: Mailgun Config - Domain: [${domain}], Region: [${region || "US"}], Key: [${maskedKey}]`);

      const auth = Buffer.from(`api:${apiKey}`).toString("base64");
      const baseUrl = region === "EU" ? "https://api.eu.mailgun.net/v3" : "https://api.mailgun.net/v3";
      const apiUrl = `${baseUrl}/${domain}/messages`;
      
      console.log(`DEBUG: Target URL: ${apiUrl}`);

      const formData = new URLSearchParams();
      formData.append("from", `CoKreate Media <postmaster@${domain}>`);
      formData.append("to", receiverEmail);
      formData.append("subject", `New Booking Inquiry: ${projectType} from ${name}`);
      formData.append("h:Reply-To", email);
      formData.append("text", `
          New Inquiry from CoKreate Media Website:
          
          Name: ${name}
          Email: ${email}
          Project Type: ${projectType}
          Preferred Date: ${date || "Not specified"}
          
          Message:
          ${message}
      `);
      formData.append("html", `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #111; margin-bottom: 20px;">New Booking Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Preferred Date:</strong> ${date || "Not specified"}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px;">${message}</p>
          </div>
      `);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Authorization": `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const responseText = await response.text();
      let result;
      let isJson = false;

      try {
        result = JSON.parse(responseText);
        isJson = true;
      } catch (e) {
        result = { message: responseText || "No response body from Mailgun" };
      }

      console.log(`DEBUG: Mailgun Response Status: ${response.status}`);
      console.log(`DEBUG: Mailgun Response Body (truncated): ${responseText.substring(0, 200)}...`);

      if (response.ok) {
        res.status(200).json({ message: "Thank you! Your message has been sent." });
      } else {
        // Map common Mailgun errors
        let userMessage = `Mailgun Error ${response.status}: Failed to send.`;
        
        if (response.status === 401) {
          userMessage = `Verification Failed (401): The API Key was rejected. Please verify your API Key and ensure the domain "${domain}" is active in your Mailgun "Sending > Domains" list for the US region.`;
        }
        if (response.status === 403) {
          userMessage = `Forbidden (403): Mailgun rejected the request for "${domain}". This often means the domain is not verified. If this is a Sandbox domain, you MUST add "${receiverEmail}" to your "Authorized Recipients" list in the Mailgun dashboard.`;
        }
        if (response.status === 404) {
          userMessage = `Not Found (404): The domain "${domain}" was not found in your Mailgun account for the ${region || "US"} region.`;
        }

        res.status(response.status).json({ 
          message: userMessage,
          details: result,
          isHtmlError: !isJson && responseText.includes("<html>"),
          suggestedRegion: region === "EU" ? "US" : "EU"
        });
      }
    } catch (error) {
      console.error("Error processing contact request:", error);
      res.status(500).json({ message: "An unexpected error occurred. Please try again later." });
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

startServer().catch(err => {
  console.error("CRITICAL: Failed to start server:", err);
  process.exit(1);
});
