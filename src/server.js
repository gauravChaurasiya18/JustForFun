import express from "express";
import serverless from "serverless-http";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from "./lib/db.js";

const app = express();

// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// Connect DB safely
connectDB().catch(err => console.error("DB connection failed:", err));

// Export serverless handler
export default serverless(app);
