import React, { useState } from "react";
import axios from "axios";

function Conversation({ onComplete }) {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/conversation", {
        audioText: inputText,
      });
      onComplete(res.data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const startVoice = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      setInputText(event.results[0][0].transcript);
    };
    recognition.start();
  };

  return (
    <div className="mt-4">
      <h3>Voice Conversation</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Say something or type..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="btn btn-secondary mt-3 me-2" onClick={startVoice}>
        🎤 Speak
      </button>
      <button
        className="btn btn-success mt-3"
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Processing..." : "Send"}
      </button>
    </div>
  );
}

export default Conversation;
