// PreProcessing.js
import React from "react";

function PreProcessing({ text, onPreProcessed }) {
  // Step 1: Text ko lowercase mein convert karna
  const lowerCasedText = text.toLowerCase();

  // Step 2: Punctuation ko remove karna
  const textWithoutPunctuation = lowerCasedText.replace(/[.,/#!$%^&*;:{}=_`~()]/g, "");

  // Step 3: Extra spaces ko trim karna
  const cleanedText = textWithoutPunctuation.replace(/\s\s+/g, " ").trim();

  // Step 4: Pre-processed text ko parent component ya agle step ko bhejna
  React.useEffect(() => {
    onPreProcessed(cleanedText);
  }, [cleanedText, onPreProcessed]);

  return (
    <div>
      <h3>Pre-Processing Result</h3>
      <p>{cleanedText}</p>
    </div>
  );
}

export default PreProcessing;
