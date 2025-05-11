import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import "../styles/KarnaughMap.css";

const KarnaughMap = () => {
  const { activeQuestion, karnaughMap, updateKarnaughMapCell } =
    useContext(GameContext);

  if (!activeQuestion) {
    return <div className="karnaugh-loading">Loading...</div>;
  }

  const { mapSize, rowLabels, colLabels } = activeQuestion;

  const totalCols = mapSize.cols + 1; // +1 for row labels
  const totalRows = mapSize.rows + 1; // +1 for column labels

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${totalCols}, 1fr)`,
    gridTemplateRows: `repeat(${totalRows}, 1fr)`,
  };

  return (
    <div className="karnaugh-container">
      <h3>Peta Karnaugh</h3>

      <div className="karnaugh-map" style={gridStyle}>
        {/* Empty top-left cell */}
        <div className="karnaugh-cell karnaugh-label"></div>

        {/* Column labels */}
        {colLabels.map((label, index) => (
          <div key={`col-${index}`} className="karnaugh-cell karnaugh-label">
            {label}
          </div>
        ))}

        {/* Rows with labels and cells */}
        {rowLabels.map((rowLabel, rowIndex) => (
          <React.Fragment key={`row-${rowIndex}`}>
            <div className="karnaugh-cell karnaugh-label">{rowLabel}</div>
            {Array.from({ length: mapSize.cols }).map((_, colIndex) => (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className={`karnaugh-cell karnaugh-value ${
                  karnaughMap[rowIndex]?.[colIndex] === "X" ? "unfilled" : ""
                }`}
                onClick={() => updateKarnaughMapCell(rowIndex, colIndex)}
              >
                {karnaughMap[rowIndex]?.[colIndex] || "X"}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="karnaugh-instructions">
        <p>Klik pada sel untuk mengubah nilai (X → 0 → 1 → X)</p>
        <p>X = belum diisi, 0 = false, 1 = true</p>
      </div>
    </div>
  );
};

export default KarnaughMap;
