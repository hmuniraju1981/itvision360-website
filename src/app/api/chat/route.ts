import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { retrieveRelevantChunks } from "@/lib/knowledge-base";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `You are the official AI assistant for ITVision360, a premier technology solutions company. You provide helpful, accurate, and professional answers about ITVision360's services, capabilities, leadership, and company information.

IMPORTANT RULES:
- Only answer questions related to ITVision360, its services, leadership, and technology solutions.
- Be concise, professional, and friendly.
- If someone asks something unrelated to ITVision360, politely redirect them to ask about ITVision360's services.
- Use the provided context to answer questions accurately.
- If you don't have specific information, say so honestly and suggest contacting info@itvision360.com.
- Format responses in a readable way with short paragraphs.
- When discussing services, highlight key value propositions.`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key not configured. Please set GROQ_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    // RAG: Retrieve relevant chunks
    const relevantChunks = retrieveRelevantChunks(message, 5);
    const context = relevantChunks.map((c) => c.content).join("\n\n");

    // Build messages array
    const messages: { role: "system" | "user" | "assistant"; content: string }[] = [
      {
        role: "system",
        content: `${SYSTEM_PROMPT}\n\nRELEVANT CONTEXT:\n${context}`,
      },
    ];

    // Add conversation history (last 6 messages)
    if (history && Array.isArray(history)) {
      const recentHistory = history.slice(-6);
      for (const msg of recentHistory) {
        messages.push({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        });
      }
    }

    // Add current message
    messages.push({ role: "user", content: message });

    const chatCompletion = await groq.chat.completions.create({
      messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.4,
      max_tokens: 512,
    });

    const reply = chatCompletion.choices[0]?.message?.content || "I apologize, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage = error instanceof Error ? error.message : "An error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
