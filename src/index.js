import "dotenv/config";
import express from "express";
import { chat } from "./claude.js";

const app = express();
app.use(express.json());

/**
 * POST /api/chat
 * Body: { messages: [{role, content}, ...] }
 * Returns: { reply: string }
 */
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  try {
    const reply = await chat(messages);
    res.json({ reply });
  } catch (err) {
    console.error("Claude API error:", err.message);
    res.status(502).json({ error: "Failed to reach Claude API" });
  }
});

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "Sydney Elite Transfers AI assistant" });
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Sydney Elite Transfers server listening on port ${PORT}`);
});
