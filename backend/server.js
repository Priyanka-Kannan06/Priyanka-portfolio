const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY"
});

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are an AI assistant that answers questions about Priyanka, a full stack developer who built projects like RenalEase."
      },
      {
        role: "user",
        content: userMessage
      }
    ]
  });

  res.json({
    reply: completion.choices[0].message.content
  });
});

app.listen(5000, () => {
  console.log("AI server running on port 5000");
});