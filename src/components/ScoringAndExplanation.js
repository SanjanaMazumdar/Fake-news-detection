// src/components/ScoringAndExplanation.js
import React, { useEffect, useState } from "react";

function ScoringAndExplanation({ credibilityResult, analysisResult, adversarialResult, onScoringComplete }) {
  const [score, setScore] = useState(0);
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    const calculateScore = () => {
      // Initial score base
      let finalScore = 50;

      // Adjust score based on credibility check
      if (credibilityResult.score) {
        finalScore += credibilityResult.score > 70 ? 20 : -20;
      }

      // Adjust score based on content analysis results
      if (analysisResult.textAnalysis === "neutral") {
        finalScore += 10;
      } else if (analysisResult.textAnalysis === "negative") {
        finalScore -= 20;
      }

      // Adjust score based on adversarial detection
      if (adversarialResult.includes("detected")) {
        finalScore -= 30;
      }

      // Limit score between 0 and 100
      finalScore = Math.max(0, Math.min(finalScore, 100));

      // Generate an explanation based on score factors
      let explanationText = "Credibility assessment summary:\n";
      explanationText += credibilityResult.score ? `Credibility Score from source: ${credibilityResult.score}. ` : "";
      explanationText += `Text analysis indicated a "${analysisResult.textAnalysis}" tone. `;
      explanationText += adversarialResult.includes("detected")
        ? "Adversarial patterns were detected, reducing the credibility score. "
        : "No adversarial patterns were found. ";

      setScore(finalScore);
      setExplanation(explanationText);

      // Send final score and explanation back to the main app
      onScoringComplete({ score: finalScore, explanation: explanationText });
    };

    calculateScore();
  }, [credibilityResult, analysisResult, adversarialResult, onScoringComplete]);

  return (
    <div>
      <h3>Final Credibility Score:</h3>
      <p><strong>Score:</strong> {score}/100</p>
      <p><strong>Explanation:</strong> {explanation}</p>
    </div>
  );
}

export default ScoringAndExplanation;
