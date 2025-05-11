import React, { createContext, useState, useEffect } from "react";
import { getQuestionsByLevel } from "../data/questions";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // State untuk menyimpan data pemain
  const [playerName, setPlayerName] = useState("");

  // State untuk level dan soal
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);

  // State untuk lives
  const [lives, setLives] = useState(3);

  // State untuk jawaban
  const [karnaughMap, setKarnaughMap] = useState([]);

  // State untuk progress pemain
  const [completedLevels, setCompletedLevels] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing"); // 'playing', 'won', 'lost'

  // Load questions berdasarkan level
  useEffect(() => {
    const levelQuestions = getQuestionsByLevel(currentLevel);
    setQuestions(levelQuestions);

    // Set active question
    if (levelQuestions.length > 0 && currentQuestion <= levelQuestions.length) {
      setActiveQuestion(levelQuestions[currentQuestion - 1]);

      // Initialize karnaugh map based on question size
      const question = levelQuestions[currentQuestion - 1];
      const mapSize = question.mapSize || { rows: 2, cols: 2 };
      initializeKarnaughMap(mapSize.rows, mapSize.cols);
    }
  }, [currentLevel, currentQuestion]);

  // Initialize empty Karnaugh Map
  const initializeKarnaughMap = (rows, cols) => {
    const newMap = Array(rows)
      .fill()
      .map(() => Array(cols).fill("X"));
    setKarnaughMap(newMap);
  };

  // Update Karnaugh Map value at specific cell
  const updateKarnaughMapCell = (row, col) => {
    const newMap = [...karnaughMap];
    // Rotate between X, 0, 1
    if (newMap[row][col] === "X") {
      newMap[row][col] = "0";
    } else if (newMap[row][col] === "0") {
      newMap[row][col] = "1";
    } else {
      newMap[row][col] = "X";
    }
    setKarnaughMap(newMap);
  };

  // Verify answer
  const verifyAnswer = () => {
    if (!activeQuestion) return false;

    // Check if all cells are filled (no X)
    const hasUnfilledCells = karnaughMap.some((row) =>
      row.some((cell) => cell === "X")
    );
    if (hasUnfilledCells) {
      return {
        result: false,
        message: "Semua sel harus diisi dengan 0 atau 1.",
      };
    }

    // Compare with correct answer
    const isCorrect =
      JSON.stringify(karnaughMap) ===
      JSON.stringify(activeQuestion.correctAnswer);

    if (isCorrect) {
      // Update completed levels
      if (!completedLevels.includes(`${currentLevel}-${currentQuestion}`)) {
        setCompletedLevels([
          ...completedLevels,
          `${currentLevel}-${currentQuestion}`,
        ]);
      }

      // Go to next question or level
      if (currentQuestion < 3) {
        return {
          result: true,
          message: "Hebat! Jawaban kamu benar.",
          action: "nextQuestion",
        };
      } else if (currentLevel < 3) {
        return {
          result: true,
          message: "Selamat! Kamu telah menyelesaikan Level " + currentLevel,
          action: "nextLevel",
        };
      } else {
        // Game completed
        setGameStatus("won");
        return {
          result: true,
          message: "Selamat! Kamu telah menyelesaikan semua level!",
          action: "gameCompleted",
        };
      }
    } else {
      // Wrong answer
      const newLives = lives - 1;
      setLives(newLives);

      if (newLives <= 0) {
        setGameStatus("lost");
        return {
          result: false,
          message: "Game Over! Nyawa telah habis.",
          action: "gameover",
        };
      }

      return {
        result: false,
        message: "Jawaban salah. Coba lagi!",
        action: "tryAgain",
      };
    }
  };

  // Move to next question
  const goToNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setLives(3); // Reset lives
  };

  // Move to next level
  const goToNextLevel = () => {
    setCurrentLevel(currentLevel + 1);
    setCurrentQuestion(1);
    setLives(3); // Reset lives
  };

  // Reset game
  const resetGame = () => {
    setCurrentLevel(1);
    setCurrentQuestion(1);
    setLives(3);
    setGameStatus("playing");
    initializeKarnaughMap(2, 2); // Default size for level 1
  };

  // Start game with player name
  const startGame = (name) => {
    setPlayerName(name);
    resetGame();
  };

  return (
    <GameContext.Provider
      value={{
        playerName,
        currentLevel,
        currentQuestion,
        questions,
        activeQuestion,
        lives,
        karnaughMap,
        completedLevels,
        gameStatus,
        startGame,
        verifyAnswer,
        updateKarnaughMapCell,
        goToNextQuestion,
        goToNextLevel,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
