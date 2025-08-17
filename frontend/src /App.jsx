import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const newMsg = { sender: "You", text: input };
    setMessages([...messages, newMsg]);

    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await res.json();

    setMessages([
      ...messages,
      newMsg,
      { sender: "NETHUWH XMD AI BOT", text: data.reply }
    ]);
    setInput("");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-900 text-white rounded-2xl shadow-xl">
      <h1 className="text-xl font-bold text-center mb-4">
        💬 NETHUWH XMD AI BOT <br />
        <span className="text-sm">Created by Nethum Akash</span>
      </h1>
      <div className="h-80 overflow-y-auto border p-2 rounded bg-black">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.sender === "You" ? "text-right" : "text-left"}
          >
            <p>
              <b>{m.sender}:</b> {m.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded-l bg-gray-800 text-white"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 px-4 rounded-r hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
