import React, { useState } from "react";

function UserInput({ onSubmit }) {
  // input text ko store karne ke liye state
  const [inputText, setInputText] = useState("");

  // Jab bhi user textarea mein kuch type kare
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Submit button pe click karne par ye function chalega
  const handleSubmit = () => {
    if (inputText.trim() === "") {
      alert("Please enter some content for verification.");
      return;
    }
    // Input text ko parent component ko bheje ya verification function ko call kare
    onSubmit(inputText);
    // Textarea ko clear kar de
    setInputText("");
  };

  return (
    <div className="user-input-container">
      <h2>User Input</h2>
      <textarea
        placeholder="Enter the content you want to verify..."
        value={inputText}
        onChange={handleInputChange}
        rows="5"
        style={{ width: "100%", padding: "10px", marginTop: "10px" }}
      ></textarea>
      <button onClick={handleSubmit} style={buttonStyle}>
        Submit for Verification
      </button>
    </div>
  );
}

// Button ka simple styling
const buttonStyle = {
  padding: "10px 20px",
  marginTop: "10px",
  backgroundColor: "#007acc",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default UserInput;
