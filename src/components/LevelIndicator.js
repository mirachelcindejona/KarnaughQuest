import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import "../styles/Indicators.css";

const LevelIndicator = () => {
  const { currentLevel, currentQuestion } = useContext(GameContext);

  return (
    <div className="level-indicator">
      <div className="level-display">
        <span className="indicator-label">Level: </span>
        <span className="indicator-value">{currentLevel}</span>
      </div>
      <div className="question-display">
        <span className="indicator-label">Soal: </span>
        <span className="indicator-value">{currentQuestion}/3</span>
      </div>
    </div>
  );
};

export default LevelIndicator;
