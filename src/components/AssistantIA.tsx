"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
}

// ─── Suggestion chips ─────────────────────────────────────────────────────────

const SUGGESTIONS = [
  "Explique-moi le triton et son rôle dans la cadence V7–I",
  "Quelle est la différence entre le mode dorien et le mode éolien ?",
  "Analyse cette progression : Dm7 – G7 – CMaj7",
  "Comment éviter les quintes parallèles à 4 voix ?",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AssistantIA() {
  const [messages,         setMessages]         = useState<Message[]>([]);
  const [input,            setInput]            = useState("");
  const [isLoading,        setIsLoading]        = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [error,            setError]            = useState<string | null>(null);

  const bottomRef  = useRef<HTMLDivElement>(null);
  const inputRef   = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on new content
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  // ─── Send message ───────────────────────────────────────────────────────────

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setStreamingContent("");
    setError(null);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Erreur serveur" }));
        throw new Error(err.error ?? "Erreur serveur");
      }

      // La réponse arrive en flux : on affiche le texte au fil de sa génération
      // plutôt que de laisser l'utilisateur devant un écran figé.
      const reader = res.body?.getReader();
      if (!reader) throw new Error("Réponse illisible");

      const decoder = new TextDecoder();
      let full = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setStreamingContent(full);
      }

      setMessages(prev => [...prev, { role: "assistant", content: full }]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur de connexion");
    } finally {
      setStreamingContent("");
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  // ─── Render ─────────────────────────────────────────────────────────────────

  const isEmpty = messages.length === 0 && !isLoading;

  return (
    <main style={{ minHeight: "100vh", background: "#f4f1ec", padding: "2rem 1rem", display: "flex", flexDirection: "column" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#5C3D6E", textTransform: "uppercase" }}>
              Harmonia · IA
            </div>
            <span style={{
              fontSize: 9, fontWeight: 800, background: "#E9C97E", color: "#3a2547",
              padding: "2px 6px", borderRadius: 4, letterSpacing: "0.06em",
            }}>
              PRO
            </span>
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: "#1a1a1a", margin: "0 0 6px", fontFamily: "Georgia, serif" }}>
            Assistant IA — Professeur virtuel
          </h1>
          <p style={{ fontSize: 13, color: "#777", margin: 0 }}>
            Posez vos questions de théorie musicale. Disponible 24h/24.
          </p>
        </div>

        {/* ── Chat container ── */}
        <div style={{
          flex: 1,
          background: "#fff",
          borderRadius: 14,
          border: "0.5px solid #e8e3db",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        }}>

          {/* Messages area */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 20px 12px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            minHeight: 400,
            maxHeight: "60vh",
          }}>

            {/* Welcome message */}
            {isEmpty && (
              <div style={{ textAlign: "center", paddingTop: "2rem" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>🎵</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>
                  Bonjour ! Je suis votre professeur virtuel Harmonia.
                </div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 24, lineHeight: 1.6 }}>
                  Posez-moi n'importe quelle question sur la théorie musicale,<br />
                  l'harmonie, le contrepoint ou les modes.
                </div>
                {/* Suggestion chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                  {SUGGESTIONS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(s)}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 20,
                        border: "0.5px solid #d5cfc6",
                        background: "#f4f1ec",
                        color: "#555",
                        fontSize: 12,
                        cursor: "pointer",
                        fontFamily: "system-ui, sans-serif",
                        textAlign: "left",
                        maxWidth: 340,
                        lineHeight: 1.4,
                        transition: "background .15s",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat messages */}
            {messages.map((msg, i) => (
              <ChatBubble key={i} message={msg} />
            ))}

            {/* Streaming / loading */}
            {isLoading && (
              <ChatBubble
                message={{ role: "assistant", content: streamingContent }}
                isStreaming
              />
            )}

            {/* Error */}
            {error && (
              <div style={{
                padding: "10px 14px",
                borderRadius: 8,
                background: "#FEEEEA",
                border: "0.5px solid #F5B5AA",
                fontSize: 13,
                color: "#CC2200",
                fontFamily: "system-ui, sans-serif",
              }}>
                ⚠️ {error}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input area */}
          <div style={{
            borderTop: "0.5px solid #f0ece6",
            padding: "14px 16px",
            display: "flex",
            gap: 10,
            alignItems: "flex-end",
            background: "#faf8f5",
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Posez votre question… (Entrée pour envoyer, Maj+Entrée pour aller à la ligne)"
              disabled={isLoading}
              rows={1}
              style={{
                flex: 1,
                resize: "none",
                padding: "10px 14px",
                borderRadius: 10,
                border: "0.5px solid #d5cfc6",
                background: "#fff",
                fontSize: 13,
                color: "#1a1a1a",
                outline: "none",
                fontFamily: "system-ui, sans-serif",
                lineHeight: 1.5,
                maxHeight: 120,
                overflowY: "auto",
                opacity: isLoading ? 0.6 : 1,
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              style={{
                padding: "10px 18px",
                borderRadius: 10,
                border: "none",
                background: isLoading || !input.trim() ? "#d5cfc6" : "#5C3D6E",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                cursor: isLoading || !input.trim() ? "default" : "pointer",
                fontFamily: "system-ui, sans-serif",
                whiteSpace: "nowrap",
                transition: "background .15s",
                flexShrink: 0,
              }}
            >
              {isLoading ? "…" : "Envoyer ↑"}
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div style={{ fontSize: 11, color: "#767676", textAlign: "center", marginTop: 10, fontFamily: "system-ui, sans-serif" }}>
          Propulsé par Claude (Anthropic) · Les réponses peuvent contenir des erreurs — vérifiez les informations importantes.
        </div>
      </div>
    </main>
  );
}

// ─── Chat bubble ──────────────────────────────────────────────────────────────

function ChatBubble({ message, isStreaming = false }: { message: Message; isStreaming?: boolean }) {
  const isUser = message.role === "user";

  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
    }}>
      {!isUser && (
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "#5C3D6E",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, flexShrink: 0, marginRight: 10, marginTop: 2,
        }}>
          🎵
        </div>
      )}
      <div style={{
        maxWidth: "72%",
        padding: "10px 14px",
        borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
        background: isUser ? "#5C3D6E" : "#f4f1ec",
        color: isUser ? "#fff" : "#1a1a1a",
        fontSize: 13,
        lineHeight: 1.65,
        fontFamily: "system-ui, sans-serif",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        position: "relative",
      }}>
        {isStreaming && !message.content ? (
          <span style={{ display: "inline-flex", gap: 4, alignItems: "center" }}>
            <Dot delay={0} /> <Dot delay={0.2} /> <Dot delay={0.4} />
          </span>
        ) : (
          message.content
        )}
        {isStreaming && message.content && (
          <span style={{
            display: "inline-block",
            width: 2, height: 13,
            background: "#5C3D6E",
            marginLeft: 2,
            verticalAlign: "middle",
            animation: "blink 0.7s infinite",
          }} />
        )}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span style={{
      width: 6, height: 6,
      borderRadius: "50%",
      background: "#aaa",
      display: "inline-block",
      animation: `bounce 1s ${delay}s infinite ease-in-out`,
    }} />
  );
}
