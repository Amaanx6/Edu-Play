// components/tabs/CompetitiveTab.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Timer, LockKeyhole, Zap } from 'lucide-react';
import { Navbar } from './Navbar';

export const CompetitiveTab = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [solution, setSolution] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div className="space-y-8">
      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
      <Navbar title='CP' icon={Trophy} />
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Trophy className="h-8 w-8 text-yellow-500" />
          <span>Competitive Arena</span>
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xl">
              <Timer className="h-6 w-6 text-red-500" />
              <span>
                {Math.floor(timeLeft / 60)}:
                {(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-500" />
                Optimization Challenge
              </h3>
              <pre className="p-4 bg-slate-900 rounded-xl text-lg">
                {`function optimizeAlgorithm(input) {\n  // Your solution here\n}`}
              </pre>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <LockKeyhole className="h-6 w-6 text-green-500" />
              <h3 className="text-xl font-semibold">Submit Solution</h3>
            </div>
            <textarea
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              className="w-full h-64 p-4 bg-slate-900 rounded-xl font-mono text-lg"
              placeholder="Write your optimized solution here..."
            />
            <button className="bg-yellow-600 px-6 py-3 rounded-xl hover:bg-yellow-700 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Submit Solution
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};