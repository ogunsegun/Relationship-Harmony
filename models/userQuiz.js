import mongoose from 'mongoose';

const QuizResultSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Unique user ID
  answers: { type: Object, required: true }, // User's answers
  results: { type: Object, required: true }, // Calculated results
  createdAt: { type: Date, default: Date.now }, // Timestamp
});

const QuizResult = mongoose.models.QuizResult || mongoose.model('QuizResult', QuizResultSchema);

export default QuizResult;