import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Predefined replies (ඔයා වගේම msg කරනවා වගේ)
const replies = [
  "හ්ම් ❤️ මචං කෙසේද?",
  "හොඳේ ඉන්නේ, ඔයාවද?",
  "මම තමයි NETHUWH XMD AI BOT – හැදුවේ Nethum Akash 😎",
  "අද හොඳට busy 🔥",
  "ඔයා මට msg දුන්නේ මොකක්ද කියන්න 🙂"
];

app.post("/chat", (req, res) => {
  const reply = replies[Math.floor(Math.random() * replies.length)];
  res.json({ reply });
});

app.listen(5000, () => console.log("✅ NETHUWH XMD AI BOT backend running..."));
