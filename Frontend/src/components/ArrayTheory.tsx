// components/SummaryComponent.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ListVideo, Copy, CheckCircle2, Youtube, Code2, Trophy, Timer, BookText, Puzzle } from 'lucide-react';

const HARDCODED_SUMMARY = {
  title: "Mastering Arrays in JavaScript",
  duration: "15:30",
  chapters: [
    { time: "02:45", title: "Array Basics" },
    { time: "06:10", title: "Common Methods" },
    { time: "11:20", title: "Advanced Techniques" }
  ],
  keyPoints: [
    "Understanding array mutability",
    "Map vs ForEach differences",
    "Optimal performance patterns"
  ],
  summary: `This comprehensive guide explores JavaScript arrays from fundamental concepts to advanced usage. Learn about array creation, manipulation methods, and performance optimization techniques. The video covers modern ES6+ features and common pitfalls to avoid when working with arrays.`
};

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

const TheorySection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-8"
  >
    {/* Existing summary content */}
    <div className="flex items-center gap-4 mb-8">
      <Youtube className="h-12 w-12 text-red-600" />
      <div>
        <h1 className="text-3xl font-bold text-slate-200">{HARDCODED_SUMMARY.title}</h1>
        <div className="flex items-center gap-2 text-slate-400">
          <Clock className="h-5 w-5" />
          <span>{HARDCODED_SUMMARY.duration}</span>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <ListVideo className="h-6 w-6 text-purple-500" />
          Video Chapters
        </h2>
        <div className="space-y-3">
          {HARDCODED_SUMMARY.chapters.map((chapter, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="text-slate-400">{chapter.time}</span>
              <span className="text-slate-200">{chapter.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Key Points</h3>
        <ul className="space-y-3">
          {HARDCODED_SUMMARY.keyPoints.map((point, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const CodeChallenges = () => {
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

const CompetitiveTricks = () => {
  const [timeLeft, setTimeLeft] = useState(300);
  const [solution, setSolution] = useState('');

  // Countdown timer
  useState(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  });

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

export function SummaryComponent() {
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
            icon={<Puzzle className="w-5 h-5" />}
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
            {activeTab === 'theory' && <TheorySection />}
            {activeTab === 'code' && <CodeChallenges />}
            {activeTab === 'competitive' && <CompetitiveTricks />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}