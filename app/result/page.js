"use client";
import { useEffect, useState } from 'react';

export default function ResultsPage() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const storedResults = JSON.parse(localStorage.getItem('quizResults'));
    if (storedResults) setResults(storedResults);
  }, []);

  if (!results) return <p>Loading results...</p>;

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Quiz Results</h1>
      <p className="text-lg">Score: {results.score} / {results.totalQuestions}</p>
      <p className="text-lg">Percentage: {results.percentage.toFixed(2)}%</p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Question Breakdown</h2>
        <ul className="mt-4 space-y-2">
          {Object.entries(results.results).map(([question, data]) => (
            <li key={question} className={data.correct ? "text-green-600" : "text-red-600"}>
              Q{question}: You selected "{data.selected}", Correct answer: "{data.correctAnswer}"
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
