// Data soal untuk setiap level
const questions = {
  level1: [
    {
      id: "1-1",
      title: "Gerbang AND",
      description: "Buatlah peta Karnaugh untuk gerbang logika AND (F = A ∙ B)",
      mapSize: { rows: 2, cols: 2 },
      rowLabels: ["A'", "A"],
      colLabels: ["B'", "B"],
      gateType: "AND",
      variables: ["A", "B"],
      correctAnswer: [
        ["0", "0"],
        ["0", "1"],
      ],
      explanation:
        "Pada gerbang AND, output bernilai 1 hanya jika semua input bernilai 1. Dalam peta Karnaugh, ini berarti hanya sel yang merepresentasikan A=1 dan B=1 yang bernilai 1, sedangkan sel lainnya bernilai 0.",
    },
    {
      id: "1-2",
      title: "Gerbang OR",
      description: "Buatlah peta Karnaugh untuk gerbang logika OR (F = A + B)",
      mapSize: { rows: 2, cols: 2 },
      rowLabels: ["A'", "A"],
      colLabels: ["B'", "B"],
      gateType: "OR",
      variables: ["A", "B"],
      correctAnswer: [
        ["0", "1"],
        ["1", "1"],
      ],
      explanation:
        "Pada gerbang OR, output bernilai 1 jika minimal satu input bernilai 1. Dalam peta Karnaugh, sel-sel yang merepresentasikan A=1 atau B=1 bernilai 1, sedangkan sel yang merepresentasikan A=0 dan B=0 bernilai 0.",
    },
    {
      id: "1-3",
      title: "Gerbang NOT",
      description: "Buatlah peta Karnaugh untuk gerbang logika NOT (F = A')",
      mapSize: { rows: 2, cols: 1 },
      rowLabels: ["A'", "A"],
      colLabels: [""],
      gateType: "NOT",
      variables: ["A"],
      correctAnswer: [["1"], ["0"]],
      explanation:
        "Pada gerbang NOT, output merupakan kebalikan dari input. Dalam peta Karnaugh, sel yang merepresentasikan A=0 bernilai 1, dan sel yang merepresentasikan A=1 bernilai 0.",
    },
  ],
  level2: [
    {
      id: "2-1",
      title: "Gerbang NAND",
      description:
        "Buatlah peta Karnaugh untuk gerbang logika NAND (F = (A ∙ B)')",
      mapSize: { rows: 2, cols: 2 },
      rowLabels: ["A'", "A"],
      colLabels: ["B'", "B"],
      gateType: "NAND",
      variables: ["A", "B"],
      correctAnswer: [
        ["1", "1"],
        ["1", "0"],
      ],
      explanation:
        "Gerbang NAND merupakan kebalikan dari gerbang AND. Output bernilai 0 hanya jika semua input bernilai 1. Dalam peta Karnaugh, hanya sel yang merepresentasikan A=1 dan B=1 yang bernilai 0, sedangkan sel lainnya bernilai 1.",
    },
    {
      id: "2-2",
      title: "Gerbang NOR",
      description:
        "Buatlah peta Karnaugh untuk gerbang logika NOR (F = (A + B)')",
      mapSize: { rows: 2, cols: 2 },
      rowLabels: ["A'", "A"],
      colLabels: ["B'", "B"],
      gateType: "NOR",
      variables: ["A", "B"],
      correctAnswer: [
        ["1", "0"],
        ["0", "0"],
      ],
      explanation:
        "Gerbang NOR merupakan kebalikan dari gerbang OR. Output bernilai 1 hanya jika semua input bernilai 0. Dalam peta Karnaugh, hanya sel yang merepresentasikan A=0 dan B=0 yang bernilai 1, sedangkan sel lainnya bernilai 0.",
    },
    {
      id: "2-3",
      title: "Gerbang XOR",
      description: "Buatlah peta Karnaugh untuk gerbang logika XOR (F = A ⊕ B)",
      mapSize: { rows: 2, cols: 2 },
      rowLabels: ["A'", "A"],
      colLabels: ["B'", "B"],
      gateType: "XOR",
      variables: ["A", "B"],
      correctAnswer: [
        ["0", "1"],
        ["1", "0"],
      ],
      explanation:
        "Pada gerbang XOR, output bernilai 1 jika input-input memiliki nilai yang berbeda. Dalam peta Karnaugh, sel-sel yang merepresentasikan A=0,B=1 dan A=1,B=0 bernilai 1, sedangkan sel-sel yang merepresentasikan A=0,B=0 dan A=1,B=1 bernilai 0.",
    },
  ],
  level3: [
    {
      id: "3-1",
      title: "Fungsi Boolean 3 Variabel",
      description: "Buatlah peta Karnaugh untuk fungsi F = AB + BC + A'C",
      mapSize: { rows: 2, cols: 4 },
      rowLabels: ["A'", "A"],
      colLabels: ["B'C'", "B'C", "BC", "BC'"],
      gateType: "Complex1",
      variables: ["A", "B", "C"],
      correctAnswer: [
        ["0", "1", "1", "0"],
        ["0", "0", "1", "1"],
      ],
      explanation:
        "Untuk fungsi F = AB + BC + A'C, kita bisa mengisi peta Karnaugh berdasarkan masing-masing term. Term AB mengisi sel A=1,B=1, term BC mengisi sel B=1,C=1, dan term A'C mengisi sel A=0,C=1. Setelah diisi, kita bisa melihat bahwa peta Karnaugh membentuk pola tertentu yang dapat disederhanakan menjadi fungsi yang lebih sederhana.",
    },
    {
      id: "3-2",
      title: "Fungsi Boolean 4 Variabel",
      description: "Buatlah peta Karnaugh untuk fungsi F = A'B'C'D' + ABCD",
      mapSize: { rows: 4, cols: 4 },
      rowLabels: ["A'B'", "A'B", "AB", "AB'"],
      colLabels: ["C'D'", "C'D", "CD", "CD'"],
      gateType: "Complex2",
      variables: ["A", "B", "C", "D"],
      correctAnswer: [
        ["1", "0", "0", "0"],
        ["0", "0", "0", "0"],
        ["0", "0", "1", "0"],
        ["0", "0", "0", "0"],
      ],
      explanation:
        "Untuk fungsi F = A'B'C'D' + ABCD, kita mengisi peta Karnaugh berdasarkan minterms. Term A'B'C'D' mengisi sel A=0,B=0,C=0,D=0 (kiri atas), dan term ABCD mengisi sel A=1,B=1,C=1,D=1. Kedua sel ini bernilai 1, sedangkan sel lainnya bernilai 0.",
    },
    {
      id: "3-3",
      title: "Optimasi Fungsi Boolean",
      description:
        "Buatlah peta Karnaugh untuk fungsi F = ABC + A'BC + AB'C + ABC'",
      mapSize: { rows: 4, cols: 2 },
      rowLabels: ["A'B'", "A'B", "AB", "AB'"],
      colLabels: ["C'", "C"],
      gateType: "Complex3",
      variables: ["A", "B", "C"],
      correctAnswer: [
        ["0", "0"],
        ["0", "1"],
        ["1", "1"],
        ["0", "1"],
      ],
      explanation:
        "Untuk fungsi F = ABC + A'BC + AB'C + ABC', kita mengisi peta Karnaugh berdasarkan masing-masing term. Setelah diisi, kita bisa melihat bahwa peta Karnaugh membentuk pola tertentu. Dengan mengelompokkan sel-sel bernilai 1 yang berdekatan, kita bisa menyederhanakan fungsi menjadi BC + AC.",
    },
  ],
};

// Function untuk mengambil soal berdasarkan level
export const getQuestionsByLevel = (level) => {
  if (level === 1) return questions.level1;
  if (level === 2) return questions.level2;
  if (level === 3) return questions.level3;
  return [];
};

// Function untuk mengambil soal spesifik
export const getQuestion = (level, questionNumber) => {
  const levelQuestions = getQuestionsByLevel(level);
  return levelQuestions[questionNumber - 1] || null;
};
