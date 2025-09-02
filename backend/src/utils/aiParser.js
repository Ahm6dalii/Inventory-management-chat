import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config({ quiet: true });

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function parseUserMessage(message) {
  const prompt = `
You are a friendly chatbot that manages inventory in MongoDB.
Return JSON in this format:
{
  "intent": "add-item | update-item | delete-item | view-items | view-item",
  "name": "string or null",
  "quantity": number or null,
  "price": number or null
}

User message: "${message}"
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = (response.text ?? "").replace(/```json|```/g, "").trim();
    return JSON.parse(text);
  } catch {
    return { intent: "unknown" };
  }
}
