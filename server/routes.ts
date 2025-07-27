import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }
      
      // In a real application, you would:
      // 1. Save the contact form submission to database
      // 2. Send an email notification
      // 3. Send a confirmation email to the user
      
      // For now, just log the submission
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ 
        message: "Message sent successfully" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real application, this would serve the actual resume file
    // For now, return information about the resume
    res.json({
      filename: "Kalla_Nithin_Resume.pdf",
      downloadUrl: "/resume.pdf"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
