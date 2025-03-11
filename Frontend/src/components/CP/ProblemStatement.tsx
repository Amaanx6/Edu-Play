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
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Zap className="h-8 w-8 text-purple-400" />
          <h3 className="text-2xl font-semibold text-white">Challenge</h3>
        </div>
        <motion.div
          className={`flex items-center gap-3 ${getDifficultyColor()}`}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg font-semibold capitalize">{difficulty}</span>
          <RefreshCw
            className="h-5 w-5 cursor-pointer hover:rotate-180 transition-transform duration-300"
            onClick={() => setDifficulty(['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)])}
          />
        </motion.div>
      </div>

      <div className="space-y-6">
        <div className="prose prose-invert">
          <h4 className="text-2xl font-semibold text-white mb-4">Array Optimization Problem</h4>
          <p className="text-gray-300 text-lg">
            Given an array of integers, optimize it according to the following rules:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {[
              'Remove all duplicate elements',
              'Sort the remaining elements in ascending order',
              'Return the result with O(n) time complexity',
              'Maintain original array structure'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-6">
          <pre className="p-6 bg-slate-900/50 rounded-xl text-sm font-mono overflow-x-auto border border-white/10">
            {codeTemplate}
          </pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-400" />
            ) : (
              <Copy className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};