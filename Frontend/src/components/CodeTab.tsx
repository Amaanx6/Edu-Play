// components/tabs/CodeTab.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Rocket, ChevronRight, Clipboard, CheckCircle, AlertCircle } from 'lucide-react';

const CODE_CHALLENGES = [
  {
    id: 1,
    title: "Array Reversal",
    difficulty: "⭐ Beginner",
    description: "Reverse the elements of an array in-place",
    starterCode: `function reverseArray(arr) {
  // Your code here
}`,
    testCases: [
      { input: [1, 2, 3], output: [3, 2, 1] },
      { input: [9, 5, 2, 7], output: [7, 2, 5, 9] }
    ]
  },
  {
    id: 2,
    title: "Sum of Array",
    difficulty: "⭐ Beginner",
    description: "Calculate the sum of all array elements",
    starterCode: `function arraySum(arr) {
  // Your code here
}`,
    testCases: [
      { input: [1, 2, 3], output: 6 },
      { input: [10, -5, 3], output: 8 }
    ]
  }
];

const CODING_MCQS = [
  {
    question: "Which method adds elements to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0
  },
  {
    question: "What's the time complexity of array access by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correct: 0
  }
];

export const CodeTab = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [selectedChallenge, setSelectedChallenge] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [xp, setXp] = useState(0);

  const runCode = () => {
    try {
      const challenge = CODE_CHALLENGES[selectedChallenge];
      const userFunction = new Function('arr', `${code} return arr;`);
      
      const results = challenge.testCases.map((testCase, index) => {
        try {
          const result = userFunction([...testCase.input]);
          const success = JSON.stringify(result) === JSON.stringify(testCase.output);
          
          if(success) setXp(prev => prev + 50);
          
          return {
            input: testCase.input,
            expected: testCase.output,
            received: result,
            success
          };
        } catch (error) {
          return { error: (error as Error).message };
        }
      });

      setOutput(results.map((res, i) => 
        res.success 
          ? `✅ Test ${i+1} Passed!`
          : res.error 
            ? `❌ Test ${i+1} Error: ${res.error}`
            : `❌ Test ${i+1} Failed\n   Expected: ${res.expected}\n   Received: ${res.received}`
      ));
    } catch (err) {
      setOutput([`🚨 Runtime Error: ${(err as Error).message}`]);
    }
  };

  const loadStarterCode = () => {
    setCode(CODE_CHALLENGES[selectedChallenge].starterCode);
  };

  const checkAnswer = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    if(CODING_MCQS[questionIndex].correct === optionIndex) {
      setXp(prev => prev + 100);
    }
  };

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Code2 className="h-8 w-8 text-blue-500" />
            <span>Interactive Playground</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="bg-purple-500/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Rocket className="h-5 w-5" />
              <span>{xp} XP</span>
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-2 gap-8">
          {/* Challenges List */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-purple-500" />
              <h3 className="text-xl font-semibold">Code Challenges</h3>
            </div>
            
            <div className="space-y-3">
              {CODE_CHALLENGES.map((challenge, index) => (
                <motion.div
                  key={challenge.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl cursor-pointer ${
                    selectedChallenge === index 
                      ? 'bg-slate-700' 
                      : 'bg-slate-800 hover:bg-slate-700/50'
                  }`}
                  onClick={() => setSelectedChallenge(index)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{challenge.title}</h4>
                      <p className="text-sm text-slate-400">{challenge.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </div>
                  <span className="text-xs text-purple-400 mt-2 block">
                    {challenge.difficulty}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Coding MCQ Section */}
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Terminal className="h-6 w-6 text-green-500" />
                Code Knowledge Check
              </h3>
              
              {CODING_MCQS.map((mcq, index) => (
                <div key={index} className="bg-slate-800 p-4 rounded-xl">
                  <p className="font-medium mb-3">{mcq.question}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {mcq.options.map((option, optIndex) => (
                      <button
                        key={optIndex}
                        onClick={() => checkAnswer(index, optIndex)}
                        className={`p-2 text-sm rounded-lg flex items-center gap-2 ${
                          selectedAnswer === optIndex
                            ? optIndex === mcq.correct 
                              ? 'bg-green-500/20' 
                              : 'bg-red-500/20'
                            : 'bg-slate-700 hover:bg-slate-600'
                        }`}
                      >
                        {selectedAnswer === optIndex ? (
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
                </div>
              ))}
            </div>
          </div>

          {/* Code Editor Section */}
          <div className="space-y-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Code Editor</h3>
              </div>
              <button
                onClick={loadStarterCode}
                className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 flex items-center gap-2 text-sm"
              >
                <Clipboard className="h-4 w-4" />
                Load Starter Code
              </button>
            </div>
            
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 bg-slate-900 rounded-xl font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Implement your solution here..."
            />
            
            <button 
              onClick={runCode}
              className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2 w-full justify-center"
            >
              <Rocket className="h-5 w-5" />
              Execute Code
            </button>

            {/* Results Panel */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold">Execution Results</h3>
              </div>
              
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-900 p-4 rounded-xl space-y-3 font-mono text-sm"
                >
                  {output.length > 0 ? (
                    output.map((line, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          line.startsWith('✅') ? 'bg-green-500/10' :
                          line.startsWith('❌') ? 'bg-red-500/10' :
                          'bg-slate-800'
                        }`}
                      >
                        {line.split('\n').map((l, i) => (
                          <div key={i}>{l}</div>
                        ))}
                      </div>
                    ))
                  ) : (
                    <div className="text-slate-500 italic">
                      Your results will appear here...
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};