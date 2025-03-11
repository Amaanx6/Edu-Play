import { useState } from 'react';
import { Zap, Copy, Check, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemStatement = () => {
  const [copied, setCopied] = useState(false);
  const [difficulty, setDifficulty] = useState('medium');

  const codeTemplate = `function optimizeAlgorithm(input: number[]): number[] {
  // TODO: Implement your solution
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  return [];
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDifficultyColor = () => {
    switch(difficulty) {
      case 'easy': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'hard': return 'text-red-500';
      default: return 'text-white';
    }
  };

  return (
    <motion.div
      className="bg-slate-800/30 p-6 rounded-xl border border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Zap className="h-6 w-6 text-purple-500" />
          <h3 className="text-xl font-semibold">Challenge</h3>
        </div>
        <motion.div
          className={`flex items-center gap-2 ${getDifficultyColor()}`}
          whileHover={{ scale: 1.05 }}
        >
          <span className="font-semibold capitalize">{difficulty}</span>
          <RefreshCw
            className="h-4 w-4 cursor-pointer"
            onClick={() => setDifficulty(['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)])}
          />
        </motion.div>
      </div>

      <div className="space-y-4">
        <div className="prose prose-invert">
          <h4 className="text-lg font-semibold">Array Optimization Problem</h4>
          <p className="text-slate-300">
            Given an array of integers, optimize it according to the following rules:
          </p>
          <ul className="list-disc list-inside text-slate-300">
            <li>Remove all duplicate elements</li>
            <li>Sort the remaining elements in ascending order</li>
            <li>Return the result with O(n) time complexity</li>
          </ul>
        </div>

        <div className="relative">
          <pre className="p-4 bg-slate-900 rounded-xl text-sm font-mono overflow-x-auto">
            {codeTemplate}
          </pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-slate-400" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};