import answerKey from '@/data/answerKey';

const calculateScores = (userAnswers) => {
  let score = 0;
  let totalQuestions = Object.keys(answerKey).length;

  let results = {};

  for (let question in userAnswers) {
    const userAnswer = userAnswers[question];
    const correctAnswer = answerKey[question];

    if (userAnswer === correctAnswer) {
      score += 1;
      results[question] = { correct: true, selected: userAnswer, correctAnswer };
    } else {
      results[question] = { correct: false, selected: userAnswer, correctAnswer };
    }
  }

  let percentage = (score / totalQuestions) * 100;

  return {
    score,
    totalQuestions,
    percentage,
    results,
  };
};

export default calculateScores;
