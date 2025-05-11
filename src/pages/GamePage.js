import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import LivesIndicator from "../components/LivesIndicator";
import LevelIndicator from "../components/LevelIndicator";
import KarnaughMap from "../components/KarnaughMap";
import LogicGate from "../components/LogicGate";
import GameControls from "../components/GameControls";
import "../styles/GamePage.css";

const GamePage = () => {
  const { playerName, activeQuestion, gameStatus } = useContext(GameContext);
  const navigate = useNavigate();

  // Redirect to start page if no player name
  useEffect(() => {
    if (!playerName) {
      navigate("/");
    }
  }, [playerName, navigate]);

  if (!activeQuestion) {
    return (
      <div className="game-page loading">
        <div className="loading-message">Memuat soal...</div>
      </div>
    );
  }

  return (
    <div className="game-page">
      <header className="game-header">
        <div className="player-info">
          <span className="player-name">Pemain: {playerName}</span>
        </div>
        <div className="game-indicators">
          <LevelIndicator />
          <LivesIndicator />
        </div>
      </header>

      <div className="game-content">
        <div className="question-panel">
          <h2 className="question-title">{activeQuestion.title}</h2>
          <p className="question-description">{activeQuestion.description}</p>
        </div>

        <div className="game-panels">
          <div className="left-panel">
            <LogicGate
              gateType={activeQuestion.gateType}
              variables={activeQuestion.variables}
            />
          </div>

          <div className="right-panel">
            <KarnaughMap />
          </div>
        </div>

        <GameControls />
      </div>
    </div>
  );
};

export default GamePage;
