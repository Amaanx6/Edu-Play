import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Clipboard, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Challenge } from './CodeChallenges';

interface CodeEditorProps {
  challenge: Challenge;
  onXpGain: (amount: number) => void;
}

export const CodeEditor = ({ challenge, onXpGain }: CodeEditorProps) => {
  const [code, setCode] = useState(challenge.starterCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [lastKeystroke, setLastKeystroke] = useState(Date.now());

  useEffect(() => {
    setCode(challenge.starterCode);
    setOutput([]);
  }, [challenge]);

  const runCode = () => {
    try {
      const userFunction = new Function('arr', `${code} return arr;`);
      
      const results = challenge.testCases.map((testCase, index) => {
        try {
          const result = userFunction([...testCase.input]);
          const success = JSON.stringify(result) === JSON.stringify(testCase.output);
          
          if(success) onXpGain(50);
          
          return {
            input: testCase.input,
            expected: testCase.output,
            received: result,
            success,
            index
          };
        } catch (error) {
          return { error: (error as Error).message, index };
        }
      });

      setOutput(results.map((res) => 
        res.success 
          ? `✅ Test ${res.index + 1} Passed!`
          : res.error 
            ? `❌ Test ${res.index + 1} Error: ${res.error}`
            : `❌ Test ${res.index + 1} Failed\n   Expected: ${res.expected}\n   Received: ${res.received}`
      ));
    } catch (err) {
      setOutput([`🚨 Runtime Error: ${(err as Error).message}`]);
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    setIsTyping(true);
    setLastKeystroke(Date.now());

    // Reset typing indicator after 1.5 seconds of no typing
    setTimeout(() => {
      if (Date.now() - lastKeystroke >= 1500) {
        setIsTyping(false);
      }
    }, 1500);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Terminal className="h-6 w-6 text-blue-500" />
          <h3 className="text-xl font-semibold">Code Editor</h3>
          {isTyping && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs bg-blue-500/20 px-2 py-1 rounded-full"
            >
              Typing...
            </motion.span>
          )}
        </div>
        <button
          onClick={() => setCode(challenge.starterCode)}
          className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 flex items-center gap-2 text-sm transition-colors"
        >
          <Clipboard className="h-4 w-4" />
          Reset Code
        </button>
      </div>
      
      <div className="relative">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="w-full h-64 p-4 bg-slate-900 rounded-xl font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Implement your solution here..."
          spellCheck="false"
        />
        <div className="absolute bottom-2 right-2 text-xs text-slate-500">
          {code.split('\n').length} lines
        </div>
      </div>
      
      <button 
        onClick={runCode}
        className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2 w-full justify-center transition-colors"
      >
        <Rocket className="h-5 w-5" />
        Execute Code
      </button>

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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 rounded-lg ${
                    line.startsWith('✅') ? 'bg-green-500/10' :
                    line.startsWith('❌') ? 'bg-red-500/10' :
                    'bg-slate-800'
                  }`}
                >
                  {line.split('\n').map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                </motion.div>
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
  );
};