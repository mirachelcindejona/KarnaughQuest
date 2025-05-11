import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import "../styles/StartPage.css";

const StartPage = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { startGame } = useContext(GameContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Nama tidak boleh kosong!");
      return;
    }

    // Start the game with player name
    startGame(name);

    // Navigate to game page
    navigate("/game");
  };

  return (
    <div className="start-page">
      <div className="game-title">
        <h1>Petualangan Peta Karnaugh</h1>
        <p className="subtitle">Belajar Logika Digital dengan Menyenangkan</p>
      </div>

      <div className="start-card">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="player-name">Masukkan Nama Anda:</label>
            <input
              type="text"
              id="player-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className={error ? "error" : ""}
            />
            {error && <span className="error-message">{error}</span>}
          </div>

          <button type="submit" className="start-button">
            Mulai Permainan
          </button>
        </form>
      </div>

      <div className="game-info">
        <h2>Tentang Game</h2>
        <div className="info-card">
          <h3>Apa itu Peta Karnaugh?</h3>
          <p>
            Peta Karnaugh (K-Map) adalah metode penyederhanaan ekspresi Boolean
            yang banyak digunakan dalam desain sistem digital. Game ini
            dirancang untuk membantu kamu memahami konsep ini dengan cara yang
            interaktif dan menyenangkan!
          </p>

          <h3>Cara Bermain</h3>
          <ul>
            <li>
              Game terdiri dari 3 level dengan tingkat kesulitan bertingkat
            </li>
            <li>Setiap level memiliki 3 soal yang harus diselesaikan</li>
            <li>Pada setiap soal, kamu akan disajikan gerbang logika</li>
            <li>
              Tugasmu adalah mengisi Peta Karnaugh sesuai dengan fungsi gerbang
              tersebut
            </li>
            <li>Kamu memiliki 3 nyawa untuk setiap soal</li>
            <li>Jawaban salah akan mengurangi nyawa</li>
          </ul>

          <h3>Ayo Mulai Petualanganmu!</h3>
          <p>
            Masukkan nama dan klik "Mulai Permainan" untuk memulai perjalanan
            menjadi ahli Peta Karnaugh!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
