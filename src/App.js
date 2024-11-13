import React, { useState } from "react";
import UserInput from "./components/UserInput";
import PreProcessing from "./components/PreProcessing";
import MultilingualDetection from "./components/MultilingualDetection";
import CredibilityScoring from "./components/CredibilityScoring";
import ContentAnalysis from "./components/ContentAnalysis";
import FactChecking from "./components/FactChecking";
import AdversarialDetection from "./components/AdversarialDetection";
import ScoringAndExplanation from "./components/ScoringAndExplanation";
import OutputResults from "./components/OutputResults";
import UserFeedback from "./components/UserFeedback"; // Assuming you need this import

function App() {
  const [submittedContent, setSubmittedContent] = useState("");
  const [preProcessedContent, setPreProcessedContent] = useState("");
  const [detectedContent, setDetectedContent] = useState({});
  const [credibilityResult, setCredibilityResult] = useState({});
  const [analysisResult, setAnalysisResult] = useState({});
  const [factCheckResult, setFactCheckResult] = useState("");
  const [adversarialDetectionResult, setAdversarialDetectionResult] = useState("");
  const [finalScore, setFinalScore] = useState({ score: 0, explanation: "" });
  const [feedbackData, setFeedbackData] = useState(null);

  const handleUserInputSubmit = (text) => setSubmittedContent(text);
  const handlePreProcessed = (cleanedText) => setPreProcessedContent(cleanedText);
  const handleMultilingualDetection = (result) => setDetectedContent(result);
  const handleCredibilityCheck = (result) => setCredibilityResult(result);
  const handleAnalysisComplete = (result) => setAnalysisResult(result);
  const handleFactCheckComplete = (result) => setFactCheckResult(result);
  const handleAdversarialDetectionComplete = (result) => setAdversarialDetectionResult(result);
  const handleScoringComplete = (scoreData) => setFinalScore(scoreData);
  const handleSubmitFeedback = (feedback) => {
    setFeedbackData(feedback);
    console.log("User Feedback:", feedback);
  };

  return (
    <div className="App">
      <h1>Fake News Detection System</h1>
      <UserInput onSubmit={handleUserInputSubmit} />
      {submittedContent && <PreProcessing text={submittedContent} onPreProcessed={handlePreProcessed} />}
      {preProcessedContent && <MultilingualDetection text={preProcessedContent} onDetected={handleMultilingualDetection} />}
      {detectedContent.content && <CredibilityScoring sourceUrl="https://trustednews.com/article123" onCredibilityCheck={handleCredibilityCheck} />}
      {credibilityResult.score && <ContentAnalysis text={submittedContent} image={null} audio={null} onAnalysisComplete={handleAnalysisComplete} />}
      {analysisResult.textAnalysis && <FactChecking text={submittedContent} onFactCheckComplete={handleFactCheckComplete} />}
      {factCheckResult && <AdversarialDetection text={submittedContent} onAdversarialDetectionComplete={handleAdversarialDetectionComplete} />}
      {adversarialDetectionResult && (
        <ScoringAndExplanation
          credibilityResult={credibilityResult}
          analysisResult={analysisResult}
          adversarialResult={adversarialDetectionResult}
          onScoringComplete={handleScoringComplete}
        />
      )}
      {finalScore.score > 0 && <OutputResults score={finalScore.score} explanation={finalScore.explanation} />}
      {finalScore.score > 0 && <UserFeedback onSubmitFeedback={handleSubmitFeedback} />}
    </div>
  );
}

export default App;
