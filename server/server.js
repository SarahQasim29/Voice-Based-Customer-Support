const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/conversation", async (req, res) => {
  try {
    const { audioText } = req.body;

    // ✅ Use the model your project actually has access to
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      You are a customer support assistant.
      The customer says: "${audioText}".
      Extract a structured JSON with fields:
      - ticketId (generate a random ID like ORD12345)
      - customerName (guess from text or use "Unknown")
      - issue (summarize the problem)
      - status (always "Ticket created successfully").
    `;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json" }
    });

    const responseText = result.response.text();
    res.json(JSON.parse(responseText));
  } catch (error) {
    console.error("Error in /api/conversation:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
