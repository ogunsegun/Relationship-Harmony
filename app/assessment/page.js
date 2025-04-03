'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import quizData from '@/data/dataQuiz';



export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const questions = quizData[String(currentQuestion)];


  const [answers, setAnswers] = useState({});

  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
    setTimeout(() => {
      if (currentQuestion < Object.keys(quizData).length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        alert('Quiz Completed!');
      }
    }, 300);
  };

  const backgroundImages = {
    "1": "url('https://images.pexels.com/photos/2626721/pexels-photo-2626721.jpeg?auto=compress&cs=tinysrgb&w=600')",
    "2": "url('https://images.pexels.com/photos/2828549/pexels-photo-2828549.jpeg?auto=compress&cs=tinysrgb&w=600')",
    "3": "url('https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg?auto=compress&cs=tinysrgb&w=600')",
    "4": "url('https://images.pexels.com/photos/3780689/pexels-photo-3780689.jpeg?auto=compress&cs=tinysrgb&w=600)",
    "5": "url('https://images.pexels.com/photos/1464565/pexels-photo-1464565.jpeg?auto=compress&cs=tinysrgb&w=600')",
    "6": "url('https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=600')",
    "7": "url('https://images.pexels.com/photos/246367/pexels-photo-246367.jpeg?auto=compress&cs=tinysrgb&w=600')",
    "8": "url('https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=600')",
    "9": "url('https://images.pexels.com/photos/2808658/pexels-photo-2808658.jpeg?auto=compress&cs=tinysrgb&w=600')",
    "10": "url('https://images.pexels.com/photos/1452129/pexels-photo-1452129.jpeg?auto=compress&cs=tinysrgb&w=600')",
  };


  return (
    <div
  className="min-h-screen bg-cover bg-center py-10 px-4"
  style={{ backgroundImage: backgroundImages[currentQuestion] }}
                  >
      <div className="max-w-3xl mx-auto p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Question {currentQuestion}</h2>
          <p className="text-lg text-gray-700 mb-6">{questions.question}</p>
          <div className="space-y-4">
            {Object.entries(questions.options).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleOptionClick(key)}
                className="w-full text-left border border-gray-300 rounded-lg px-4 py-3 hover:bg-rose-50 hover:border-rose-400 transition"
              >
                {value}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
