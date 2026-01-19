import { useState } from "react";
import products from "../data/products";

const NutriBot = ({ open, onClose }) => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi 👋 I’m NutriBot. Tell me your health goal and I’ll help you choose the right products.",
    },
  ]);
  const [input, setInput] = useState("");

  if (!open) return null;

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const text = input.toLowerCase();

    let reply =
      "I can help with diabetes care, protein nutrition, kids nutrition, or product recommendations 😊";

    if (text.includes("diabetes")) {
      reply =
        "For diabetes care, look for Low GI and High Fiber products. Would you like snacks or staples?";
    } else if (text.includes("protein")) {
      reply =
        "High protein products help with strength and recovery. You can check our protein-rich mixes.";
    } else if (text.includes("kids")) {
      reply =
        "Kid-friendly nutrition focuses on balanced ingredients and taste. I can suggest suitable products.";
    } else if (text.includes("recommend")) {
      const names = products.map((p) => p.name).join(", ");
      reply = `Here are some popular NutriAura products: ${names}`;
    } else if (text.includes("price")) {
      reply =
        "You can view product prices on the product page before adding them to the cart.";
    } else if (text.includes("delivery")) {
      reply =
        "Delivery details are shown during checkout. We aim for fast and safe delivery.";
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      { from: "bot", text: reply },
    ]);
    setInput("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "320px",
        height: "420px",
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
        zIndex: 1000,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          padding: "14px",
          borderBottom: "1px solid #eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 600,
        }}
      >
        NutriBot 🤖
        <span
          onClick={onClose}
          style={{ cursor: "pointer", fontSize: "18px" }}
        >
          ✕
        </span>
      </div>

      {/* CHAT BODY */}
      <div
        style={{
          flex: 1,
          padding: "12px",
          overflowY: "auto",
          fontSize: "14px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              textAlign: msg.from === "user" ? "right" : "left",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "14px",
                maxWidth: "80%",
                backgroundColor:
                  msg.from === "user" ? "#e1bee7" : "#f3f3f3",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div
        style={{
          display: "flex",
          padding: "10px",
          borderTop: "1px solid #eee",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask NutriBot..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            marginLeft: "8px",
            padding: "10px 14px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            background:
              "linear-gradient(135deg,#f06292,#8e24aa,#1e88e5)",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default NutriBot;
