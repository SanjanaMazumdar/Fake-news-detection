// src/components/AdversarialDetection.js
import React, { useState, useEffect } from "react";

function AdversarialDetection({ text, onAdversarialDetectionComplete }) {
  const [adversarialResult, setAdversarialResult] = useState("");

  useEffect(() => {
    if (text) {
      // Simulated function for adversarial pattern detection
      const detectAdversarialPatterns = (inputText) => {
        // Simple mock detection logic for adversarial patterns
        const patternDetected =
          /(\W+|[0-9]+)/.test(inputText) || // Checks for non-alphabet characters or numeric patterns
          inputText.includes("f@ke") || // Example of intentional misspelling
          inputText.includes("f.a.k.e"); // Example of inserting special characters to evade detection

        return patternDetected
          ? "Adversarial patterns detected: The text may attempt to evade detection."
          : "No adversarial patterns detected.";
      };

      const result = detectAdversarialPatterns(text);
      setAdversarialResult(result);

      // Send result back to main application
      onAdversarialDetectionComplete(result);
    }
  }, [text, onAdversarialDetectionComplete]);

  return (
    <div>
      <h3>Adversarial Detection Results:</h3>
      <p>{adversarialResult}</p>
    </div>
  );
}

export default AdversarialDetection;
