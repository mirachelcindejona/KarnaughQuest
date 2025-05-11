export const validateKarnaughMap = (userAnswer, correctAnswer) => {
  if (!userAnswer || !correctAnswer) return false;
  if (userAnswer.length !== correctAnswer.length) return false;

  for (let i = 0; i < userAnswer.length; i++) {
    for (let j = 0; j < userAnswer[i].length; j++) {
      if (userAnswer[i][j] !== correctAnswer[i][j]) {
        return false;
      }
    }
  }

  return true;
};
