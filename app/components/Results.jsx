import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart as ChartBar } from 'lucide-react';

function calculateBig5Score(answers, questionData) {
  const categories = {
    extraversion: { score: 0, questions: 0 },
    agreeableness: { score: 0, questions: 0 },
    conscientiousness: { score: 0, questions: 0 },
    neuroticism: { score: 0, questions: 0 },
    openness: { score: 0, questions: 0 }
  };

  Object.entries(answers).forEach(([questionId, answer]) => {
    const question = questionData[questionId];
    if (question?.factor === 'big5') {
      const score = getScoreForAnswer(answer, question.reverse);
      const trait = question.trait;
      if (trait && categories[trait]) {
        categories[trait].score += score;
        categories[trait].questions++;
      }
    }
  });

  // Calculate percentages
  return Object.entries(categories).reduce((acc, [trait, data]) => {
    acc[trait] = data.questions > 0 ? (data.score / (data.questions * 5)) * 100 : 0;
    return acc;
  }, {});
}

function getScoreForAnswer(answer, isReverse) {
  const scores = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const score = scores[answer] || 0;
  return isReverse ? 6 - score : score;
}

export function Results({ answers, quizData }) {
  const big5Results = calculateBig5Score(answers, quizData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 py-10 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Your Personality Profile</h1>
          <p className="text-xl text-white/80">Based on your responses to the assessment</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(big5Results).map(([trait, score]) => (
            <motion.div
              key={trait}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold capitalize text-gray-800">
                  {trait}
                </h3>
                <ChartBar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="h-4 rounded-full bg-blue-600 transition-all duration-1000"
                  style={{ width: `${score}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">
                Score: {Math.round(score)}%
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Take Assessment Again
          </button>
        </div>
      </div>
    </motion.div>
  );
}