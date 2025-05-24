import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4-turbo"),
    system:
      "You are CofounderAI, an experienced, proactive, and insightful startup cofounder. You help the user brainstorm, challenge their ideas, and provide strategic, actionable advice. You ask clarifying questions, suggest improvements, and think like a real business partner. Be supportive, candid, and creative. Use concise, clear language.",
    messages,
  });

  return result.toDataStreamResponse();
}
