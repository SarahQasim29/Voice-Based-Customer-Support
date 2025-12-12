import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Conversation from "./components/Conversation";
import JsonModal from "./components/JsonModal";

function App() {
  const [conversationStarted, setConversationStarted] = useState(false);
  const [jsonResult, setJsonResult] = useState(null);

  return (
    <div className="container mt-5">
      {!conversationStarted ? (
        <LandingPage onStart={() => setConversationStarted(true)} />
      ) : (
        <Conversation onComplete={(data) => setJsonResult(data)} />
      )}
      {jsonResult && (
        <JsonModal jsonData={jsonResult} onClose={() => setJsonResult(null)} />
      )}
    </div>
  );
}

export default App;
