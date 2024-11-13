// src/components/FactChecking.js
import React, { useState, useEffect } from "react";

function FactChecking({ text, onFactCheckComplete }) {
  const [factCheckResult, setFactCheckResult] = useState("");

  useEffect(() => {
    if (text) {
      // Mock function to simulate claim matching and fact-checking
      const performFactCheck = (inputText) => {
        // Example mock results based on keywords
        if (inputText.includes("COVID-19 vaccine")) {
          return "Claim Verified: The COVID-19 vaccine is effective in reducing severe cases.";
        } else if (inputText.includes("5G causes illness")) {
          return "Claim Disproven: Scientific evidence shows 5G does not cause illness.";
        } else {
          return "No matching claims found in the database.";
        }
      };

      // Set fact-checking result
      const result = performFactCheck(text);
      setFactCheckResult(result);

      // Pass the result to the main application
      onFactCheckComplete(result);
    }
  }, [text, onFactCheckComplete]);

  return (
    <div>
      <h3>Automated Fact-Checking Results:</h3>
      <p>{factCheckResult}</p>
    </div>
  );
}

export default FactChecking;
