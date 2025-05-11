import React from "react";
import "../styles/LogicGate.css";

const LogicGate = ({ gateType, variables }) => {
  const renderGate = () => {
    switch (gateType) {
      case "AND":
        return renderANDGate();
      case "OR":
        return renderORGate();
      case "NOT":
        return renderNOTGate();
      case "NAND":
        return renderNANDGate();
      case "NOR":
        return renderNORGate();
      case "XOR":
        return renderXORGate();
      case "Complex":
        return renderComplexGate();
      default:
        return <div>Gerbang tidak tersedia</div>;
    }
  };

  const renderANDGate = () => (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path
        d="M50,20 L50,100 L100,100 Q150,60 100,20 L50,20"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="10" y1="40" x2="50" y2="40" stroke="black" strokeWidth="2" />
      <line x1="10" y1="80" x2="50" y2="80" stroke="black" strokeWidth="2" />
      <line x1="150" y1="60" x2="190" y2="60" stroke="black" strokeWidth="2" />
      <text x="15" y="35" fontSize="12">
        {variables[0]}
      </text>
      <text x="15" y="75" fontSize="12">
        {variables[1]}
      </text>
      <text x="170" y="55" fontSize="12">
        F
      </text>
      <text x="70" y="65" fontSize="24">
        ∙
      </text>
    </svg>
  );

  const renderORGate = () => (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path
        d="M50,20 Q100,20 120,60 Q100,100 50,100 Q70,60 50,20"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="10" y1="40" x2="50" y2="40" stroke="black" strokeWidth="2" />
      <line x1="10" y1="80" x2="50" y2="80" stroke="black" strokeWidth="2" />
      <line x1="120" y1="60" x2="190" y2="60" stroke="black" strokeWidth="2" />
      <text x="15" y="35" fontSize="12">
        {variables[0]}
      </text>
      <text x="15" y="75" fontSize="12">
        {variables[1]}
      </text>
      <text x="170" y="55" fontSize="12">
        F
      </text>
      <text x="70" y="65" fontSize="24">
        +
      </text>
    </svg>
  );

  const renderNOTGate = () => (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path
        d="M50,40 L50,80 L90,60 Z"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        cx="95"
        cy="60"
        r="5"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="10" y1="60" x2="50" y2="60" stroke="black" strokeWidth="2" />
      <line x1="100" y1="60" x2="190" y2="60" stroke="black" strokeWidth="2" />
      <text x="15" y="55" fontSize="12">
        {variables[0]}
      </text>
      <text x="170" y="55" fontSize="12">
        F
      </text>
      <text x="30" y="80" fontSize="12">
        NOT
      </text>
    </svg>
  );

  const renderNANDGate = () => (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path
        d="M50,20 L50,100 L100,100 Q150,60 100,20 L50,20"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        cx="155"
        cy="60"
        r="5"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="10" y1="40" x2="50" y2="40" stroke="black" strokeWidth="2" />
      <line x1="10" y1="80" x2="50" y2="80" stroke="black" strokeWidth="2" />
      <line x1="100" y1="60" x2="150" y2="60" stroke="black" strokeWidth="2" />
      <line x1="160" y1="60" x2="190" y2="60" stroke="black" strokeWidth="2" />
      <text x="15" y="35" fontSize="12">
        {variables[0]}
      </text>
      <text x="15" y="75" fontSize="12">
        {variables[1]}
      </text>
      <text x="170" y="55" fontSize="12">
        F
      </text>
      <text x="60" y="65" fontSize="16">
        NAND
      </text>
    </svg>
  );

  const renderNORGate = () => (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path
        d="M50,20 Q100,20 120,60 Q100,100 50,100 Q70,60 50,20"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <circle
        cx="125"
        cy="60"
        r="5"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="10" y1="40" x2="50" y2="40" stroke="black" strokeWidth="2" />
      <line x1="10" y1="80" x2="50" y2="80" stroke="black" strokeWidth="2" />
      <line x1="120" y1="60" x2="130" y2="60" stroke="black" strokeWidth="2" />
      <line x1="130" y1="60" x2="190" y2="60" stroke="black" strokeWidth="2" />
      <text x="15" y="35" fontSize="12">
        {variables[0]}
      </text>
      <text x="15" y="75" fontSize="12">
        {variables[1]}
      </text>
      <text x="170" y="55" fontSize="12">
        F
      </text>
      <text x="60" y="65" fontSize="16">
        NOR
      </text>
    </svg>
  );

  const renderXORGate = () => (
    <svg width="200" height="120" viewBox="0 0 200 120">
      <path
        d="M60,20 Q110,20 130,60 Q110,100 60,100 Q80,60 60,20"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M50,20 Q70,60 50,100"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="10" y1="40" x2="60" y2="40" stroke="black" strokeWidth="2" />
      <line x1="10" y1="80" x2="60" y2="80" stroke="black" strokeWidth="2" />
      <line x1="130" y1="60" x2="190" y2="60" stroke="black" strokeWidth="2" />
      <text x="15" y="35" fontSize="12">
        {variables[0]}
      </text>
      <text x="15" y="75" fontSize="12">
        {variables[1]}
      </text>
      <text x="170" y="55" fontSize="12">
        F
      </text>
      <text x="80" y="65" fontSize="20">
        ⊕
      </text>
    </svg>
  );

  const renderComplexGate = () => {
    const expression =
      variables && variables.length >= 2
        ? `F = f(${variables.join(", ")})`
        : "F = Complex Function";

    return (
      <div className="complex-gate">
        <div className="expression">{expression}</div>
        <div className="complex-note">
          Perhatikan deskripsi soal untuk detail fungsi Boolean
        </div>
      </div>
    );
  };

  return (
    <div className="logic-gate-container">
      <h3>Gerbang Logika</h3>
      <div className="gate-display">{renderGate()}</div>
    </div>
  );
};

export default LogicGate;
