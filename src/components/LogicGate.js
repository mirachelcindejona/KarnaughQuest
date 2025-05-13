import React from "react";
import "../styles/LogicGate.css";

const LogicGate = ({ gateType, variables, id }) => {
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
      case "Complex1":
        return renderComplexGate1();
      case "Complex2":
        return renderComplexGate2();
      case "Complex3":
        return renderComplexGate3();
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

  // Soal level 3-1: F = AB + BC + A'C
  const renderComplexGate1 = () => (
    <svg width="320" height="200" viewBox="0 0 320 200">
      {/* Label fungsi */}
      <text x="10" y="18" fontSize="14" fontWeight="bold">
        F = AB + BC + A'C
      </text>

      {/* AND gate for AB */}
      <path
        d="M60,40 L60,80 L100,80 Q130,60 100,40 L60,40"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="20" y1="50" x2="60" y2="50" stroke="black" strokeWidth="2" />
      <line x1="20" y1="70" x2="60" y2="70" stroke="black" strokeWidth="2" />
      <text x="22" y="47" fontSize="10">
        {variables[0]}
      </text>
      <text x="22" y="68" fontSize="10">
        {variables[1]}
      </text>
      <line x1="130" y1="60" x2="160" y2="60" stroke="black" strokeWidth="2" />

      {/* AND gate for BC */}
      <path
        d="M60,100 L60,140 L100,140 Q130,120 100,100 L60,100"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="20" y1="110" x2="60" y2="110" stroke="black" strokeWidth="2" />
      <line x1="20" y1="130" x2="60" y2="130" stroke="black" strokeWidth="2" />
      <text x="22" y="108" fontSize="10">
        {variables[1]}
      </text>
      <text x="22" y="128" fontSize="10">
        {variables[2]}
      </text>
      <line
        x1="130"
        y1="120"
        x2="160"
        y2="120"
        stroke="black"
        strokeWidth="2"
      />

      {/* AND gate for A'C */}
      <path
        d="M60,160 L60,200 L100,200 Q130,180 100,160 L60,160"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      {/* NOT untuk A */}
      <line x1="10" y1="170" x2="25" y2="170" stroke="black" strokeWidth="2" />
      <circle
        cx="30"
        cy="170"
        r="4"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="34" y1="170" x2="60" y2="170" stroke="black" strokeWidth="2" />
      <line x1="20" y1="190" x2="60" y2="190" stroke="black" strokeWidth="2" />
      <text x="8" y="168" fontSize="10">
        {variables[0]}
      </text>
      <text x="22" y="188" fontSize="10">
        {variables[2]}
      </text>
      <line
        x1="130"
        y1="180"
        x2="160"
        y2="180"
        stroke="black"
        strokeWidth="2"
      />

      {/* OR Gate */}
      <path
        d="M180,50 Q220,50 240,120 Q220,190 180,190 Q200,120 180,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      {/* 3 input lines to OR */}
      <line x1="160" y1="60" x2="180" y2="80" stroke="black" strokeWidth="2" />
      <line
        x1="160"
        y1="120"
        x2="180"
        y2="120"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="160"
        y1="180"
        x2="180"
        y2="160"
        stroke="black"
        strokeWidth="2"
      />
      {/* OR output */}
      <line
        x1="240"
        y1="120"
        x2="300"
        y2="120"
        stroke="black"
        strokeWidth="2"
      />
      <text x="290" y="115" fontSize="12">
        F
      </text>
    </svg>
  );

  // Soal level 3-2: F = A'B'C'D' + ABCD
  const renderComplexGate2 = () => (
    <svg width="320" height="200" viewBox="0 0 320 200">
      {/* Label Fungsi */}
      <text x="80" y="15" fontSize="12" fontWeight="bold">
        F = A'B'C'D' + ABCD
      </text>

      {/* AND gate untuk A'B'C'D' */}
      <path
        d="M70,30 L70,90 L110,90 Q140,60 110,30 L70,30"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/* NOT A */}
      <line x1="20" y1="40" x2="35" y2="40" stroke="black" strokeWidth="2" />
      <circle
        cx="40"
        cy="40"
        r="5"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="45" y1="40" x2="70" y2="40" stroke="black" strokeWidth="2" />
      <text x="10" y="38" fontSize="10">
        {variables[0]}
      </text>

      {/* NOT B */}
      <line x1="20" y1="55" x2="35" y2="55" stroke="black" strokeWidth="2" />
      <circle
        cx="40"
        cy="55"
        r="5"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="45" y1="55" x2="70" y2="55" stroke="black" strokeWidth="2" />
      <text x="10" y="53" fontSize="10">
        {variables[1]}
      </text>

      {/* NOT C */}
      <line x1="20" y1="70" x2="35" y2="70" stroke="black" strokeWidth="2" />
      <circle
        cx="40"
        cy="70"
        r="5"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="45" y1="70" x2="70" y2="70" stroke="black" strokeWidth="2" />
      <text x="10" y="68" fontSize="10">
        {variables[2]}
      </text>

      {/* NOT D */}
      <line x1="20" y1="85" x2="35" y2="85" stroke="black" strokeWidth="2" />
      <circle
        cx="40"
        cy="85"
        r="5"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="45" y1="85" x2="70" y2="85" stroke="black" strokeWidth="2" />
      <text x="10" y="83" fontSize="10">
        {variables[3]}
      </text>

      <line x1="140" y1="60" x2="180" y2="60" stroke="black" strokeWidth="2" />

      {/* AND gate untuk ABCD */}
      <path
        d="M70,110 L70,170 L110,170 Q140,140 110,110 L70,110"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="40" y1="120" x2="70" y2="120" stroke="black" strokeWidth="2" />
      <line x1="40" y1="135" x2="70" y2="135" stroke="black" strokeWidth="2" />
      <line x1="40" y1="150" x2="70" y2="150" stroke="black" strokeWidth="2" />
      <line x1="40" y1="165" x2="70" y2="165" stroke="black" strokeWidth="2" />
      <text x="45" y="118" fontSize="10">
        {variables[0]}
      </text>
      <text x="45" y="133" fontSize="10">
        {variables[1]}
      </text>
      <text x="45" y="148" fontSize="10">
        {variables[2]}
      </text>
      <text x="45" y="163" fontSize="10">
        {variables[3]}
      </text>

      <line
        x1="140"
        y1="140"
        x2="180"
        y2="140"
        stroke="black"
        strokeWidth="2"
      />

      {/* OR Gate */}
      <path
        d="M200,60 Q240,60 260,100 Q240,140 200,140 Q220,100 200,60"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="180" y1="60" x2="200" y2="80" stroke="black" strokeWidth="2" />
      <line
        x1="180"
        y1="140"
        x2="200"
        y2="120"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="260"
        y1="100"
        x2="300"
        y2="100"
        stroke="black"
        strokeWidth="2"
      />
      <text x="290" y="95" fontSize="12">
        F
      </text>
    </svg>
  );

  // Soal level 3-3: F = ABC + A'BC + AB'C + ABC'
  const renderComplexGate3 = () => (
    <svg width="360" height="220" viewBox="0 0 360 220">
      {/* Label Fungsi */}
      <text x="90" y="15" fontSize="12" fontWeight="bold">
        F = ABC + A'BC + AB'C + ABC'
      </text>

      {/* AND gate untuk ABC */}
      <path
        d="M60,30 L60,70 L90,70 Q110,50 90,30 L60,30"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="20" y1="40" x2="60" y2="40" stroke="black" strokeWidth="2" />
      <line x1="20" y1="50" x2="60" y2="50" stroke="black" strokeWidth="2" />
      <line x1="20" y1="60" x2="60" y2="60" stroke="black" strokeWidth="2" />
      <text x="22" y="38" fontSize="10">
        {variables[0]}
      </text>
      <text x="22" y="48" fontSize="10">
        {variables[1]}
      </text>
      <text x="22" y="58" fontSize="10">
        {variables[2]}
      </text>
      <line x1="110" y1="50" x2="150" y2="50" stroke="black" strokeWidth="2" />

      {/* AND gate untuk A'BC */}
      <path
        d="M60,80 L60,120 L90,120 Q110,100 90,80 L60,80"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="10" y1="90" x2="25" y2="90" stroke="black" strokeWidth="2" />
      <circle
        cx="30"
        cy="90"
        r="4"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="34" y1="90" x2="60" y2="90" stroke="black" strokeWidth="2" />
      <line x1="30" y1="100" x2="60" y2="100" stroke="black" strokeWidth="2" />
      <line x1="30" y1="110" x2="60" y2="110" stroke="black" strokeWidth="2" />
      <text x="5" y="88" fontSize="10">
        {variables[0]}
      </text>
      <text x="34" y="98" fontSize="10">
        {variables[1]}
      </text>
      <text x="34" y="108" fontSize="10">
        {variables[2]}
      </text>
      <line
        x1="110"
        y1="100"
        x2="150"
        y2="100"
        stroke="black"
        strokeWidth="2"
      />

      {/* AND gate untuk AB'C */}
      <path
        d="M60,130 L60,170 L90,170 Q110,150 90,130 L60,130"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="30" y1="140" x2="60" y2="140" stroke="black" strokeWidth="2" />
      <line x1="10" y1="150" x2="25" y2="150" stroke="black" strokeWidth="2" />
      <circle
        cx="30"
        cy="150"
        r="4"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="34" y1="150" x2="60" y2="150" stroke="black" strokeWidth="2" />
      <line x1="30" y1="160" x2="60" y2="160" stroke="black" strokeWidth="2" />
      <text x="34" y="138" fontSize="10">
        {variables[0]}
      </text>
      <text x="5" y="148" fontSize="10">
        {variables[1]}
      </text>
      <text x="34" y="158" fontSize="10">
        {variables[2]}
      </text>
      <line
        x1="110"
        y1="150"
        x2="150"
        y2="150"
        stroke="black"
        strokeWidth="2"
      />

      {/* AND gate untuk ABC' */}
      <path
        d="M60,180 L60,220 L90,220 Q110,200 90,180 L60,180"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="30" y1="190" x2="60" y2="190" stroke="black" strokeWidth="2" />
      <line x1="30" y1="200" x2="60" y2="200" stroke="black" strokeWidth="2" />
      <line x1="10" y1="210" x2="25" y2="210" stroke="black" strokeWidth="2" />
      <circle
        cx="30"
        cy="210"
        r="4"
        stroke="black"
        strokeWidth="2"
        fill="white"
      />
      <line x1="34" y1="210" x2="60" y2="210" stroke="black" strokeWidth="2" />
      <text x="34" y="188" fontSize="10">
        {variables[0]}
      </text>
      <text x="34" y="198" fontSize="10">
        {variables[1]}
      </text>
      <text x="5" y="208" fontSize="10">
        {variables[2]}
      </text>
      <line
        x1="110"
        y1="200"
        x2="150"
        y2="200"
        stroke="black"
        strokeWidth="2"
      />

      {/* OR gate untuk 4 input */}
      <path
        d="M170,50 Q210,50 230,125 Q210,200 170,200 Q190,125 170,50"
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
      <line x1="150" y1="50" x2="170" y2="70" stroke="black" strokeWidth="2" />
      <line
        x1="150"
        y1="100"
        x2="170"
        y2="110"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="150"
        y1="150"
        x2="170"
        y2="150"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="150"
        y1="200"
        x2="170"
        y2="190"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="230"
        y1="125"
        x2="260"
        y2="125"
        stroke="black"
        strokeWidth="2"
      />
      <text x="250" y="120" fontSize="12">
        F
      </text>
    </svg>
  );

  return (
    <div className="logic-gate-container">
      <h3>Gerbang Logika</h3>
      <div className="gate-display">{renderGate()}</div>
    </div>
  );
};

export default LogicGate;
