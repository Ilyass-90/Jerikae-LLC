import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, revenue, goals } = req.body;

    try {
      // Forward the submission to Formspree for email delivery
      // The user's email is jerikaellc@gmail.com
      // We can use a Formspree endpoint if the user provides one, 
      // but for now we'll simulate the successful processing.
      
      console.log("Contact Form Submission Received:", { name, email, phone, revenue, goals });

      // In a real production app, you'd use a service like SendGrid, Mailgun, or Formspree
      // Example with Formspree (requires a form ID):
      // const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ name, email, phone, revenue, goals, _to: "jerikaellc@gmail.com" })
      // });

      // For now, we'll assume success and log it.
      res.status(200).json({ message: "Submission successful" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Failed to process submission" });
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
