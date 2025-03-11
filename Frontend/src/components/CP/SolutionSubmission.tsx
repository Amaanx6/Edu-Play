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
      className="bg-slate-800/30 p-6 rounded-xl border border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <LockKeyhole className="h-6 w-6 text-green-500" />
          <h3 className="text-xl font-semibold">Submit Solution</h3>
        </div>
        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex items-center gap-2 ${
              result === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {result === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <XCircle className="h-5 w-5" />
            )}
            <span>{result === 'success' ? 'All tests passed!' : 'Some tests failed'}</span>
          </motion.div>
        )}
      </div>

      <div className="space-y-4">
        <textarea
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
          className="w-full h-48 p-4 bg-slate-900 rounded-xl font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Write your solution here..."
        />

        <div className="space-y-3">
          <h4 className="font-semibold text-slate-300">Test Cases</h4>
          <div className="space-y-2">
            {testCases.map((test, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-900 rounded-lg text-sm"
              >
                <div className="space-x-2">
                  <span className="text-slate-400">Input:</span>
                  <code className="text-slate-300">{test.input}</code>
                  <span className="text-slate-400">Expected:</span>
                  <code className="text-slate-300">{test.expected}</code>
                </div>
                {test.passed !== null && (
                  <div className={test.passed ? 'text-green-500' : 'text-red-500'}>
                    {test.passed ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <XCircle className="h-5 w-5" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 ${
            isSubmitting
              ? 'bg-slate-700 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
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