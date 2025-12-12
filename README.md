# Voice-Based-Customer-Support

<img width="1600" height="591" alt="image" src="https://github.com/user-attachments/assets/ecc85e6c-dedb-4909-88e0-fe6aaca8e343" />

Deployed Frontend on Vercel: https://voice-based-customer-support-bvad.vercel.app/

# Project Documentation

## 🏗️ Architecture
- **Frontend (React)**: Handles voice/text input, sends requests to backend, shows JSON results.
- **Backend (Node.js + Express)**: Provides `/api/conversation` endpoint, calls Gemini API, returns structured JSON.
- **Gemini API**: Processes text and generates ticket information in JSON format.

## 🎤 Gemini Voice Integration
- Voice input captured with browser’s `webkitSpeechRecognition`.
- Transcribed text is sent to backend.
- Backend uses Gemini (`gemini-2.5-flash`) to generate structured JSON.

## 🖥️ Frontend Responsibilities
- **Conversation.js**: Captures input (voice or text) and sends it to backend.
- **JsonModal.js**: Displays JSON output in a modal.
- **App.js**: Manages state and coordinates components.

## ⚙️ Backend Responsibilities
- Receives text from frontend.
- Calls Gemini API with a prompt.
- Ensures JSON response format and sends it back to frontend.

## 📦 JSON Output Generation
Gemini always returns JSON with:
- `ticketId` → Random ID like `ORD12345`
- `customerName` → Extracted or `"Unknown"`
- `issue` → Summarized problem
- `status` → `"Ticket created successfully"`

## 🚀 Deployment Steps
1. **Frontend**: Build React app (`npm run build`) and deploy (Netlify, Vercel, etc.).
2. **Backend**: Deploy Express server (Render, Railway, etc.), set `GEMINI_API_KEY` in environment.
3. **Integration**: Update frontend API URL to point to deployed backend.
4. **Test**: Speak or type → transcript sent → Gemini returns JSON → frontend shows modal.

