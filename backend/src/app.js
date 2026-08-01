import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Lumos Backend is Running 🚀",
  });
});

// Auth Routes
app.use("/api/auth", authRoutes);

export default app;