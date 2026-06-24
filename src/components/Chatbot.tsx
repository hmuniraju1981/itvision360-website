"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const prescreenQuestions = [
  "What services does ITVision360 offer?",
  "Tell me about AI Strategy & Enablement",
  "Who is the CTO of ITVision360?",
  "How can I contact ITVision360?",
  "What industries does ITVision360 serve?",
  "What is ITVision360's technology expertise?",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = { role: "user", content: content.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content.trim(),
          history: messages.slice(-6),
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `Sorry, I encountered an issue: ${data.error}` },
        ]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-red-500/90 hover:bg-red-500 rotate-0"
            : "bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 animate-glow"
        }`}
      >
        {isOpen ? <X size={22} className="text-white" /> : <MessageCircle size={22} className="text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[560px] max-h-[calc(100vh-8rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-dark-950/98 backdrop-blur-xl">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">ITVision360 AI Assistant</h3>
                <p className="text-xs text-gray-400">Powered by AI • Ask me anything</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.length === 0 ? (
              <div className="space-y-4">
                {/* Welcome */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-gray-300">
                      Hi! I&apos;m the ITVision360 AI assistant. I can help you learn about our services, technology expertise, leadership, and how we can help your organization. What would you like to know?
                    </p>
                  </div>
                </div>

                {/* Pre-screen Questions */}
                <div className="pl-9">
                  <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                    <Sparkles size={12} /> Suggested questions
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {prescreenQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        className="text-xs px-3 py-2 bg-primary-500/10 border border-primary-500/20 rounded-xl text-primary-300 hover:bg-primary-500/20 hover:border-primary-500/40 transition-all text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex items-start gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        msg.role === "user"
                          ? "bg-accent-500/20 border border-accent-500/30"
                          : "bg-gradient-to-br from-primary-500 to-accent-500"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <User size={14} className="text-accent-400" />
                      ) : (
                        <Bot size={14} className="text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                        msg.role === "user"
                          ? "bg-primary-600/20 border border-primary-500/20 rounded-tr-sm"
                          : "bg-white/[0.04] border border-white/10 rounded-tl-sm"
                      }`}
                    >
                      <p className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Show suggestions again after a response */}
                {messages.length > 0 && !isLoading && (
                  <div className="pl-9 pt-2">
                    <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                      <Sparkles size={12} /> Ask more
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prescreenQuestions.slice(0, 3).map((q, i) => (
                        <button
                          key={i}
                          onClick={() => sendMessage(q)}
                          className="text-xs px-2.5 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-lg text-primary-300 hover:bg-primary-500/20 transition-all text-left"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="px-4 py-3 border-t border-white/10 bg-dark-950/50">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about ITVision360..."
                disabled={isLoading}
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/40 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center text-white disabled:opacity-30 hover:from-primary-500 hover:to-accent-500 transition-all shrink-0"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
