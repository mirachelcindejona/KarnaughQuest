import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import "../styles/GameControls.css";

const GameControls = () => {
  const {
    verifyAnswer,
    goToNextQuestion,
    goToNextLevel,
    activeQuestion,
    gameStatus,
  } = useContext(GameContext);

  const [feedback, setFeedback] = useState({
    message: "",
    isCorrect: false,
    show: false,
  });
  const [showExplanation, setShowExplanation] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    const result = verifyAnswer();

    if (result) {
      setFeedback({
        message: result.message,
        isCorrect: result.result,
        show: true,
        action: result.action,
      });

      if (result.result) {
        setShowExplanation(true);
      }

      if (result.action === "gameCompleted" || result.action === "gameover") {
        // Redirect to result page after 2 seconds
        setTimeout(() => {
          navigate("/result");
        }, 2000);
      }
    }
  };

  const handleNext = () => {
    setFeedback({ message: "", isCorrect: false, show: false });
    setShowExplanation(false);

    if (feedback.action === "nextQuestion") {
      goToNextQuestion();
    } else if (feedback.action === "nextLevel") {
      goToNextLevel();
    }
  };

  const handleBackToMenu = () => {
    navigate("/");
  };

  // Disable the verify button if game is over
  const isVerifyDisabled = gameStatus !== "playing";

  return (
    <div className="game-controls">
      {/* Feedback area */}
      {feedback.show && (
        <div className={`feedback ${feedback.isCorrect ? "success" : "error"}`}>
          <p>{feedback.message}</p>
        </div>
      )}

      {/* Explanation area (shown only when answer is correct) */}
      {showExplanation && activeQuestion && (
        <div className="explanation">
          <h4>Penjelasan:</h4>
          <p>{activeQuestion.explanation}</p>
        </div>
      )}

      {/* Control buttons */}
      <div className="control-buttons">
        <button
          className="verify-button"
          onClick={handleVerify}
          disabled={isVerifyDisabled}
        >
          Periksa Jawaban
        </button>

        {feedback.isCorrect && (
          <button className="next-button" onClick={handleNext}>
            {feedback.action === "nextLevel"
              ? "Level Berikutnya"
              : "Soal Berikutnya"}
          </button>
        )}

        <button className="menu-button" onClick={handleBackToMenu}>
          Kembali ke Menu
        </button>
      </div>
    </div>
  );
};

export default GameControls;
