import express from "express";
import { parseUserMessage } from "../utils/aiParser.js";
import { intentHandlers } from "../utils/intentHandlers.js";
import { greetingMessage, fallbackMessage } from "../utils/messages.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const userMessage = req.body?.text?.trim();
  if (!userMessage) return res.status(400).json({ error: "Message required." });

  try {
    // Greetings
    if (["hi", "hello", "hey", "start"].includes(userMessage.toLowerCase())) {
      return res.json({ reply: greetingMessage });
    }

    const { intent, name, quantity, price } = await parseUserMessage(userMessage);
    const handler = intentHandlers[intent];

    const reply = handler
      ? await handler({ name, quantity, price })
      : fallbackMessage;

    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while processing your request." });
  }
});

export default router;
