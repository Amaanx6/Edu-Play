import { motion } from 'framer-motion';
import { Terminal, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

const CODING_MCQS: QuizQuestion[] = [
  {
    question: "Which method adds elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
    explanation: "push() adds one or more elements to the end of an array and returns the new length."
  },
  {
    question: "What's the time complexity of array access by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correct: 0,
    explanation: "Array access by index is constant time O(1) because arrays store elements in contiguous memory locations."
  },
  {
    question: "Which array method creates a new array with the results of calling a function for every array element?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correct: 0,
    explanation: "map() creates a new array by transforming every element in an array individually."
  }
];

interface CodeQuizProps {
  onXpGain: (amount: number) => void;
}

export const CodeQuiz = ({ onXpGain }: CodeQuizProps) => {
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(CODING_MCQS.length).fill(null));
  const [showExplanations, setShowExplanations] = useState<boolean[]>(new Array(CODING_MCQS.length).fill(false));

  const checkAnswer = (questionIndex: number, optionIndex: number) => {
    if (answers[questionIndex] !== null) return; // Prevent changing answer

    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);

    if (CODING_MCQS[questionIndex].correct === optionIndex) {
      onXpGain(100);
    }

    // Show explanation after answering
    const newExplanations = [...showExplanations];
    newExplanations[questionIndex] = true;
    setShowExplanations(newExplanations);
  };
  
  const getProgress = () => {
    const answered = answers.filter(a => a !== null).length;
    const correct = answers.reduce((acc, answer, index) => 
        //@ts-ignore
      answer === CODING_MCQS[index].correct ? acc + 1 : acc, 0
    );
    return { answered, correct, total: CODING_MCQS.length };
  };

  const progress = getProgress();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-green-500" />
          <h3 className="text-xl font-semibold">Code Knowledge Check</h3>
        </div>
        <div className="text-sm bg-slate-800 px-4 py-2 rounded-full">
          Progress: {progress.correct}/{progress.total} correct
        </div>
      </div>
      
      {CODING_MCQS.map((mcq, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-slate-800 p-4 rounded-xl"
        >
          <p className="font-medium mb-3 flex items-center gap-2">
            <span className="bg-slate-700 text-xs px-2 py-1 rounded-full">
              Question {index + 1}
            </span>
            {mcq.question}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {mcq.options.map((option, optIndex) => (
              <button
                key={optIndex}
                onClick={() => checkAnswer(index, optIndex)}
                disabled={answers[index] !== null}
                className={`p-2 text-sm rounded-lg flex items-center gap-2 transition-colors ${
                  answers[index] === optIndex
                    ? optIndex === mcq.correct 
                      ? 'bg-green-500/20 border-2 border-green-500' 
                      : 'bg-red-500/20 border-2 border-red-500'
                    : answers[index] !== null && optIndex === mcq.correct
                    ? 'bg-green-500/20 border-2 border-green-500'
                    : 'bg-slate-700 hover:bg-slate-600 disabled:hover:bg-slate-700'
                }`}
              >
                {answers[index] === optIndex ? (
                  optIndex === mcq.correct ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  )
                ) : (
                  <span className="text-xs opacity-50">{optIndex + 1}.</span>
                )}
                {option}
              </button>
            ))}
          </div>
          {showExplanations[index] && mcq.explanation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-sm bg-slate-700/50 p-3 rounded-lg"
            >
              <strong className="text-purple-400">Explanation:</strong> {mcq.explanation}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};