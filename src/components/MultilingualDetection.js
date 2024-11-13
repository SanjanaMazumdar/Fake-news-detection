// MultilingualDetection.js
import React, { useState, useEffect } from "react";

function MultilingualDetection({ text, onDetected }) {
  const [language, setLanguage] = useState("unknown");
  const [translatedText, setTranslatedText] = useState(text);

  // Dummy function to simulate language detection
  const detectLanguage = (inputText) => {
    // Simple logic: Agar input mein koi special characters ya non-English words hain toh "Hindi" assume karenge.
    return /[अ-ह]/.test(inputText) ? "Hindi" : "English";
  };

  // Dummy function to simulate translation
  const translateText = (inputText, lang) => {
    if (lang === "Hindi") {
      return "Translated Text in English";
    }
    return inputText;
  };

  useEffect(() => {
    // Step 1: Language detect karna
    const detectedLang = detectLanguage(text);
    setLanguage(detectedLang);

    // Step 2: Translate agar zaroorat ho
    const finalText = detectedLang !== "English" ? translateText(text, detectedLang) : text;
    setTranslatedText(finalText);

    // Step 3: Result ko agle component ya function ko pass karna
    onDetected({ language: detectedLang, content: finalText });
  }, [text, onDetected]);

  return (
    <div>
      <h3>Multilingual Detection & Translation</h3>
      <p>Detected Language: {language}</p>
      <p>Processed Content: {translatedText}</p>
    </div>
  );
}

export default MultilingualDetection;
