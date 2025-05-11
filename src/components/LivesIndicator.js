import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import "../styles/Indicators.css";

const LivesIndicator = () => {
  const { lives } = useContext(GameContext);

  return (
    <div className="lives-indicator">
      <span className="indicator-label">Nyawa: </span>
      {[...Array(3)].map((_, index) => (
        <span
          key={index}
          className={`heart-icon ${index < lives ? "filled" : "empty"}`}
        >
          {index < lives ? "❤️" : "🖤"}
        </span>
      ))}
    </div>
  );
};

export default LivesIndicator;
