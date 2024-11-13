// CredibilityScoring.js
import React, { useEffect, useState } from "react";

// Dummy source data to simulate credibility scoring
const trustedSources = {
  "trustednews.com": 90,
  "reliableupdates.org": 85,
  "unverifiedsource.net": 30,
  "fakenewsalert.io": 20,
};

function CredibilityScoring({ sourceUrl, onCredibilityCheck }) {
  const [credibilityScore, setCredibilityScore] = useState(0);
  const [isTrusted, setIsTrusted] = useState(false);

  // Function to calculate credibility score
  const calculateCredibilityScore = (url) => {
    const domain = new URL(url).hostname;
    // Check if domain exists in trusted sources
    const score = trustedSources[domain] || 50; // Default score if not in list
    return score;
  };

  useEffect(() => {
    if (sourceUrl) {
      // Step 1: Calculate credibility score based on source URL
      const score = calculateCredibilityScore(sourceUrl);
      setCredibilityScore(score);

      // Step 2: Determine if source is trusted
      setIsTrusted(score >= 70); // Threshold for trusted source

      // Step 3: Send result to parent component
      onCredibilityCheck({ score, isTrusted: score >= 70 });
    }
  }, [sourceUrl, onCredibilityCheck]);

  return (
    <div>
      <h3>Credibility Scoring & Source Verification</h3>
      <p>Source URL: {sourceUrl}</p>
      <p>Credibility Score: {credibilityScore}</p>
      <p>{isTrusted ? "This source is trusted." : "This source is not trusted."}</p>
    </div>
  );
}

export default CredibilityScoring;
