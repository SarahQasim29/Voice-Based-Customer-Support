import React from "react";

function LandingPage({ onStart }) {
  return (
    <div className="text-center">
      <h1>Voice-Based Customer Support</h1>
      <p className="lead">Resolve your issues with a simple voice conversation.</p>
      <button className="btn btn-primary btn-lg" onClick={onStart}>
        🎤 Start Conversation
      </button>
    </div>
  );
}

export default LandingPage;
