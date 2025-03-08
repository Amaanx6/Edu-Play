// components/ContentTabs.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, BookText, Trophy, Timer, Puzzle, Sparkles } from 'lucide-react';

const TabButton = ({ active, onClick, icon, label }: any) => (
  <motion.button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-xl ${
      active ? 'bg-purple-600' : 'bg-slate-700 hover:bg-slate-600'
    }`}
    whileHover={{ scale: 1.05 }}
  >
    {icon}
    <span>{label}</span>
  </motion.button>
);

export const TheorySummary = ({ summary }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-6"
  >
    <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <BookText className="text-purple-500" />
        Core Concepts
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {['Data Structures', 'Algorithms', 'Optimizations'].map((concept, index) => (
          <motion.div
            key={concept}
            className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
            whileHover={{ x: 5 }}
          >
            <h3 className="font-semibold mb-2">{concept}</h3>
            <p className="text-slate-400 text-sm">
              {summary?.split('. ').slice(index, index + 2).join('. ')}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const CodeChallenges = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      const result = eval(code);
      setOutput(result.toString());
    } catch (err) {
      setOutput(`Error: ${(err as Error).message}`);
    }
  };

  return (
    <motion.div className="space-y-6">
      <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code2 className="text-green-500" />
          Interactive Playground
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Code Completion</h3>
            <div className="p-4 bg-slate-900 rounded-lg font-mono text-sm">
              {`function optimize() {\n  // TODO: Implement O(n) solution\n  ${code}\n}`}
            </div>
            <button 
              onClick={runCode}
              className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Run Code
            </button>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Output</h3>
            <div className="p-4 bg-slate-900 rounded-lg min-h-[120px]">
              {output || 'Results will appear here...'}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CompetitiveTricks = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [solution, setSolution] = useState('');

  return (
    <motion.div className="space-y-6">
      <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          Time Challenge
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl">
              <Timer />
              <span>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
            <p className="text-slate-400">
              Optimize this algorithm to run under O(n log n) time complexity:
            </p>
            <pre className="p-4 bg-slate-900 rounded-lg">
              {`function sortArray(nums) {\n  // Your solution here\n}`}
            </pre>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Your Solution</h3>
            <textarea
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              className="w-full h-48 p-4 bg-slate-900 rounded-lg font-mono text-sm"
              placeholder="Write your optimized solution here..."
            />
            <button className="bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-700">
              Submit Solution
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ContentTabs = ({ summary }: any) => {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-wrap gap-4">
          <TabButton
            active={activeTab === 'theory'}
            onClick={() => setActiveTab('theory')}
            icon={<BookText className="w-5 h-5" />}
            label="Theory & Summary"
          />
          <TabButton
            active={activeTab === 'code'}
            onClick={() => setActiveTab('code')}
            icon={<Code2 className="w-5 h-5" />}
            label="Code Challenges"
          />
          <TabButton
            active={activeTab === 'competitive'}
            onClick={() => setActiveTab('competitive')}
            icon={<Sparkles className="w-5 h-5" />}
            label="Competitive Tricks"
          />
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'theory' && <TheorySummary summary={summary} />}
            {activeTab === 'code' && <CodeChallenges />}
            {activeTab === 'competitive' && <CompetitiveTricks />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};