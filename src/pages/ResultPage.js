import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import "../styles/ResultPage.css";

const ResultPage = () => {
  const { playerName, completedLevels, gameStatus, resetGame } =
    useContext(GameContext);

  const navigate = useNavigate();

  // Redirect to start page if no player name
  useEffect(() => {
    if (!playerName) {
      navigate("/");
    }
  }, [playerName, navigate]);

  // Calculate stats
  const totalQuestions = 9;
  const completedQuestions = completedLevels.length;
  const completionPercentage = Math.round(
    (completedQuestions / totalQuestions) * 100
  );

  const getCompletedLevelCount = (levelNum) => {
    return completedLevels.filter((item) => item.startsWith(`${levelNum}-`))
      .length;
  };

  const level1Complete = getCompletedLevelCount(1);
  const level2Complete = getCompletedLevelCount(2);
  const level3Complete = getCompletedLevelCount(3);

  const handlePlayAgain = () => {
    resetGame();
    navigate("/game");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="result-page">
      <div className="result-card">
        <h1 className="result-title">
          {gameStatus === "won"
            ? "🎉 Selamat! 🎉"
            : "👏Terima Kasih Sudah Bermain!👏"}
        </h1>

        <div className="player-result">
          <h2>Hasil Petualangan</h2>
          <p className="player-name">Pemain: {playerName}</p>

          <div className="stats-container">
            <div className="stats-item">
              <span className="stats-label">Status:</span>
              <span
                className={`stats-value ${
                  gameStatus === "won" ? "success" : "normal"
                }`}
              >
                {gameStatus === "won"
                  ? "Menyelesaikan Game"
                  : "Game Belum Selesai"}
              </span>
            </div>

            <div className="stats-item">
              <span className="stats-label">Progres:</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
                <span className="progress-text">{completionPercentage}%</span>
              </div>
            </div>

            <div className="level-stats">
              <div className="level-stats-item">
                <span className="level-label">Level 1:</span>
                <span className="level-value">{level1Complete}/3 soal</span>
              </div>
              <div className="level-stats-item">
                <span className="level-label">Level 2:</span>
                <span className="level-value">{level2Complete}/3 soal</span>
              </div>
              <div className="level-stats-item">
                <span className="level-label">Level 3:</span>
                <span className="level-value">{level3Complete}/3 soal</span>
              </div>
            </div>
          </div>
        </div>

        {gameStatus === "won" && (
          <div className="congratulations">
            <h3>
              Hebat! Kamu berhasil menyelesaikan petualangan Peta Karnaugh!
            </h3>
            <p>
              Kamu telah membuktikan penguasaan terhadap Peta Karnaugh dan
              gerbang-gerbang logika. Skill yang kamu dapatkan akan sangat
              berguna dalam desain sistem digital!
            </p>
          </div>
        )}

        {gameStatus === "lost" && (
          <div className="encouragement">
            <h3>Jangan menyerah!</h3>
            <p>
              Peta Karnaugh memang membutuhkan latihan untuk dikuasai. Teruslah
              berlatih dan kamu pasti bisa menyelesaikan semua level!
            </p>
          </div>
        )}

        <div className="result-buttons">
          <button className="play-again-button" onClick={handlePlayAgain}>
            Main Lagi
          </button>
          <button className="home-button" onClick={handleBackToHome}>
            Kembali ke Menu Utama
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
