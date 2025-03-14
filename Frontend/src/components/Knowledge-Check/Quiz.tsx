import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useQuiz } from './QuizContext';
import { Brain, Timer, Zap, Award, HelpCircle, BarChart, RefreshCw } from 'lucide-react';
import { questions } from './data/questions';

interface QuizResults {
  correctAnswers: number;
  incorrectAnswers: number;
  timePerQuestion: number[];
  usedHints: boolean[];
}

const Quiz = () => {
  const {
    difficulty,
    score,
    setScore,
    streak,
    setStreak,
    currentQuestion,
    setCurrentQuestion,
    showExplanation,
    setShowExplanation,
    xp,
    setXp,
    setDifficulty,
  } = useQuiz();

  const [startTime] = useState(30);
  const [timer, setTimer] = useState(startTime);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [results, setResults] = useState<QuizResults>({
    correctAnswers: 0,
    incorrectAnswers: 0,
    timePerQuestion: [],
    usedHints: [],
  });

  useEffect(() => {
    if (!showExplanation && timer > 0 && !quizComplete) {
      const countdown = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
  }, [timer, showExplanation, quizComplete]);

  if (!difficulty) return null;

  const currentQuestionData = questions[difficulty][currentQuestion];
  const streakBonus = Math.floor(streak / 3) * 10;

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);

    const isCorrect = index === currentQuestionData.correct;
    const timeSpent = startTime - timer;

    setResults(prev => ({
      ...prev,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      incorrectAnswers: prev.incorrectAnswers + (isCorrect ? 0 : 1),
      timePerQuestion: [...prev.timePerQuestion, timeSpent],
      usedHints: [...prev.usedHints, showHint],
    }));

    if (isCorrect) {
      setScore(score + 10 + streakBonus);
      setStreak(streak + 1);
      setXp(xp + 20 + streakBonus);
    } else {
      setStreak(0);
    }

    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion >= questions[difficulty].length - 1) {
      setQuizComplete(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(startTime);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowHint(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setXp(0);
    setQuizComplete(false);
    setResults({
      correctAnswers: 0,
      incorrectAnswers: 0,
      timePerQuestion: [],
      usedHints: [],
    });
    setTimer(startTime);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowHint(false);
  };

  const changeDifficulty = () => {
    setDifficulty(null); // Now valid because setDifficulty accepts Difficulty | null
    restartQuiz();
  };

  if (quizComplete) {
    const accuracy = (results.correctAnswers / 10) * 100;
    const avgTime = results.timePerQuestion.reduce((a, b) => a + b, 0) / 10;
    const hintsUsed = results.usedHints.filter(h => h).length;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-black p-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gray-800 rounded-lg p-8 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Quiz Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl text-white mb-4">Performance Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Accuracy</span>
                    <span className="text-white font-bold">{accuracy.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Correct Answers</span>
                    <span className="text-green-400 font-bold">{results.correctAnswers}/10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Wrong Answers</span>
                    <span className="text-red-400 font-bold">{results.incorrectAnswers}/10</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl text-white mb-4">Additional Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Final Score</span>
                    <span className="text-purple-400 font-bold">{score}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">XP Gained</span>
                    <span className="text-yellow-400 font-bold">{xp}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Avg. Time/Question</span>
                    <span className="text-blue-400 font-bold">{avgTime.toFixed(1)}s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Hints Used</span>
                    <span className="text-orange-400 font-bold">{hintsUsed}/10</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 mb-8">
              <h3 className="text-xl text-white mb-4">Performance Analysis</h3>
              <p className="text-gray-300 mb-4">
                {accuracy >= 80
                  ? "Excellent performance! You've demonstrated a strong understanding of Array Indexing."
                  : accuracy >= 60
                  ? "Good job! You have a solid grasp of the basics but there's room for improvement."
                  : "Keep practicing! Focus on understanding the fundamental concepts of Array Indexing."}
              </p>
              <div className="space-y-2">
                {avgTime > 20 && (
                  <p className="text-gray-300">• Try to improve your response time while maintaining accuracy.</p>
                )}
                {hintsUsed > 5 && (
                  <p className="text-gray-300">• Work on building confidence in your knowledge to reduce reliance on hints.</p>
                )}
                {streak < 3 && (
                  <p className="text-gray-300">• Focus on building consistent streaks of correct answers.</p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                onClick={restartQuiz}
              >
                <RefreshCw className="mr-2" />
                Try Again
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center"
                onClick={changeDifficulty}
              >
                <BarChart className="mr-2" />
                Change Difficulty
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-purple-900 via-gray-900 to-black p-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-4 mb-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Brain className="text-purple-400 mr-2" />
              <span className="text-white">Score: {score}</span>
            </div>
            <div className="flex items-center">
              <Zap className="text-yellow-400 mr-2" />
              <span className="text-white">Streak: {streak}</span>
            </div>
            <div className="flex items-center">
              <Award className="text-green-400 mr-2" />
              <span className="text-white">XP: {xp}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Timer className="text-red-400 mr-2" />
            <span className="text-white">{timer}s</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center text-white mb-2">
            <span>Question {currentQuestion + 1} of 10</span>
            <span className="text-gray-400">{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Difficulty</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / 10) * 100}%` }}
            />
          </div>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-gray-800 rounded-lg p-8 mb-8 shadow-xl"
        >
          <h2 className="text-2xl text-white mb-6">{currentQuestionData.question}</h2>

          <div className="grid grid-cols-1 gap-4">
            {currentQuestionData.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-lg text-left transition-colors ${
                  selectedAnswer === null
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : selectedAnswer === index
                    ? index === currentQuestionData.correct
                      ? 'bg-green-600'
                      : 'bg-red-600'
                    : index === currentQuestionData.correct && showExplanation
                    ? 'bg-green-600'
                    : 'bg-gray-700'
                } text-white`}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </motion.button>
            ))}
          </div>

          {!showExplanation && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex items-center text-purple-400 hover:text-purple-300"
              onClick={() => setShowHint(true)}
            >
              <HelpCircle className="mr-2" />
              Need a hint?
            </motion.button>
          )}

          <AnimatePresence>
            {showHint && !showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-4 bg-purple-900/50 rounded-lg text-purple-200"
              >
                Think about the basic properties of binary trees and their structure.
              </motion.div>
            )}

            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6"
              >
                <div className="p-4 bg-gray-700 rounded-lg mb-4">
                  <h3 className="text-xl text-white mb-2">Explanation</h3>
                  <p className="text-gray-300">{currentQuestionData.explanation}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold"
                  onClick={nextQuestion}
                >
                  {currentQuestion === questions[difficulty].length - 1 ? 'Show Results' : 'Next Question'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Quiz;