import connectToDB from '@/utils/database'; // This is a utility to handle DB connection
import Results from '@/components/Result'; // Your QuizResult model

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDB(); // Ensure the DB is connected

      // Extract data from the request body
      const { userId, answers, results } = req.body;

      // Create a new quiz result
      const Result = new Results({
        userId,
        answers,
        results,
      });

      // Save the result to the database
      await Result.save();

      res.status(200).json({ success: true, message: 'Quiz result saved' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error saving quiz result', error });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
