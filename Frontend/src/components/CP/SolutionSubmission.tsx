import { useState } from 'react';
import { LockKeyhole, Zap, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const SolutionSubmission = () => {
  const [solution, setSolution] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);
  const [testCases, setTestCases] = useState([
    { input: '[1, 2, 2, 3]', expected: '[1, 2, 3]', passed: false },
    { input: '[5, 4, 3, 3]', expected: '[3, 4, 5]', passed: false },
    { input: '[7, 1, 7, 2, 3]', expected: '[1, 2, 3, 7]', passed: false },
  ]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission and test cases
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate test results
    const newTestCases = testCases.map(test => ({
      ...test,
      passed: Math.random() > 0.5,
    }));
    
    setTestCases(newTestCases);
    setResult(newTestCases.every(test => test.passed) ? 'success' : 'error');
    setIsSubmitting(false);
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
          <LockKeyhole className="h-8 w-8 text-green-400" />
          <h3 className="text-2xl font-semibold text-white">Submit Solution</h3>
        </div>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex items-center gap-3 ${
              result === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {result === 'success' ? (
              <CheckCircle className="h-6 w-6" />
            ) : (
              <XCircle className="h-6 w-6" />
            )}
            <span className="text-lg font-semibold">
              {result === 'success' ? 'All tests passed!' : 'Some tests failed'}
            </span>
          </motion.div>
        )}
      </div>

      <div className="space-y-6">
        <textarea
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          className="w-full h-48 p-6 bg-slate-900/50 rounded-xl font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/10 text-white"
          placeholder="Write your solution here..."
        />

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white">Test Cases</h4>
          <div className="grid gap-3">
            {testCases.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-white/10"
              >
                <div className="space-x-4 text-gray-300">
                  <span className="text-gray-400">Input:</span>
                  <code className="text-white">{test.input}</code>
                  <span className="text-gray-400">Expected:</span>
                  <code className="text-white">{test.expected}</code>
                </div>
                {test.passed !== null && (
                  <div className={test.passed ? 'text-green-400' : 'text-red-400'}>
                    {test.passed ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <XCircle className="h-5 w-5" />
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 text-lg font-semibold ${
            isSubmitting
              ? 'bg-slate-700/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-400 to-pink-600 hover:opacity-90'
          }`}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          <Zap className="h-5 w-5" />
          {isSubmitting ? 'Testing Solution...' : 'Submit Solution'}
        </motion.button>
      </div>
    </motion.div>
  );
};