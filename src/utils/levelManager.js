export const isLastQuestionInLevel = (currentQuestion) => {
  return currentQuestion >= 3;
};

export const isLastLevel = (currentLevel) => {
  return currentLevel >= 3;
};

export const getNextStep = (currentLevel, currentQuestion) => {
  if (!isLastQuestionInLevel(currentQuestion)) {
    return {
      action: "nextQuestion",
      message: "Hebat! Lanjut ke soal berikutnya.",
    };
  } else if (!isLastLevel(currentLevel)) {
    return {
      action: "nextLevel",
      message: `Level ${currentLevel} selesai! Lanjut ke level berikutnya.`,
    };
  } else {
    return {
      action: "gameCompleted",
      message: "Selamat! Kamu telah menyelesaikan semua level!",
    };
  }
};
