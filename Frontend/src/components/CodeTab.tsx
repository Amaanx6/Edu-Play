// components/tabs/CodeTab.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Rocket } from 'lucide-react';

export const CodeTab = () => {
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
    <motion.div className="space-y-8">
      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Code2 className="h-8 w-8 text-blue-500" />
          <span>Interactive Playground</span>
        </h2>
        <div className="grid xl:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-purple-500" />
              <h3 className="text-xl font-semibold">Code Completion Challenge</h3>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 bg-slate-900 rounded-xl font-mono text-lg"
              placeholder="Implement your solution here..."
            />
            <button 
              onClick={runCode}
              className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2"
            >
              <Rocket className="h-5 w-5" />
              Execute Code
            </button>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-green-500" />
              <h3 className="text-xl font-semibold">Execution Results</h3>
            </div>
            <div className="p-4 bg-slate-900 rounded-xl min-h-[200px] text-lg">
              {output || 'Your results will appear here...'}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};