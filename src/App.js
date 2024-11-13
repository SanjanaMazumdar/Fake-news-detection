import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("FAKE");
  const [score, setScore] = useState(40);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);

  const messages = [
    "This content appears suspicious. Be cautious!",
    "Our algorithm suggests this might not be reliable.",
    "Verification needed. Content might be misleading.",
    "Content authenticity is questionable.",
    "Potential misinformation detected."
  ];

  const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  const handlePrediction = () => {
    const newResult = result === "FAKE" ? "REAL" : "FAKE";
    setResult(newResult);
    setScore(Math.floor(Math.random() * 100));
    generateMessage();
  };

  const scoreBarColor = result === "REAL" ? "#28a745" : "#e94560";

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <h1>Fake News Detection System</h1>

      {/* Text Input */}
      <textarea placeholder="Enter the content you want to verify..."></textarea>

      {/* Image Upload */}
      <div className={`image-upload ${image ? "has-image" : ""}`}>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Uploaded Preview" className="image-preview" />}
      </div>

      {/* Submit Button */}
      <button onClick={handlePrediction}>Submit for Verification</button>

      {/* Result Section */}
      <div className="result-section">
        <div className="result-text" style={{ color: result === "REAL" ? "#28a745" : "#e94560" }}>
          {result}
        </div>
        <div className="score-bar">
          <div
            style={{
              width: `${score}%`,
              backgroundColor: scoreBarColor
            }}
          ></div>
        </div>
        <p>Score: {score}/100</p>
        <p className="dynamic-message">Explanation: {message}</p>
      </div>
    </div>
  );
}

export default App;
