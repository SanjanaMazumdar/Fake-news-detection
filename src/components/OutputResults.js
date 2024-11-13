// src/components/OutputResults.js
import React from "react";

function OutputResults({ score, explanation }) {
  return (
    <div>
      <h2>Final Output Results</h2>
      <p><strong>Credibility Score:</strong> {score} / 100</p>
      <p><strong>Explanation:</strong> {explanation}</p>
      {score > 70 ? (
        <p style={{ color: "green" }}>
          This content appears to be reliable.
        </p>
      ) : score > 40 ? (
        <p style={{ color: "orange" }}>
          This content may have questionable reliability. Consider further verification.
        </p>
      ) : (
        <p style={{ color: "red" }}>
          This content appears to be unreliable. Exercise caution before trusting it.
        </p>
      )}
    </div>
  );
}

export default OutputResults;
