import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Rocket, CodeXml } from 'lucide-react';
import { Navbar } from '../Navbar';
import { CodeChallenges, type Challenge } from './CodeChallenges';
import { CodeEditor } from './CodeEditor';
import { CodeQuiz } from './CodeQuiz';


export const CodePlayground = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [xp, setXp] = useState(0);

  const handleXpGain = (amount: number) => {
    setXp(prev => {
      const newXp = prev + amount;
      // Animate XP gain
      const xpDisplay = document.getElementById('xp-display');
      if (xpDisplay) {
        xpDisplay.classList.add('scale-110');
        setTimeout(() => xpDisplay.classList.remove('scale-110'), 200);
      }
      return newXp;
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <Navbar title='Code Dojo' icon={CodeXml}/>
      <motion.div 
        className="max-w-7xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 shadow-xl">
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Interactive Playground</h2>
              <p className="text-slate-400 mt-1">Practice coding challenges and test your knowledge</p>
            </div>
            <div className="flex items-center gap-4">
              <motion.div 
                id="xp-display"
                className="bg-purple-500/20 px-4 py-2 rounded-full flex items-center gap-2 transition-transform duration-200"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                <Rocket className="h-5 w-5" />
                <span className="font-semibold">{xp} XP</span>
              </motion.div>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-slate-800 p-6 rounded-xl">
                <CodeChallenges 
                  onSelectChallenge={setSelectedChallenge}
                  selectedChallengeId={selectedChallenge?.id ?? 0}
                />
              </div>
              <div className="bg-slate-800 p-6 rounded-xl">
                <CodeQuiz onXpGain={handleXpGain} />
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              {selectedChallenge ? (
                <CodeEditor 
                  challenge={selectedChallenge}
                  onXpGain={handleXpGain}
                />
              ) : (
                <div className="flex items-center justify-center h-[500px]">
                  <div className="text-center text-slate-500">
                    <div className="mb-4">
                      <Book className="h-12 w-12 mx-auto opacity-50" />
                    </div>
                    <p className="text-lg mb-2 font-medium">Select a challenge to start coding</p>
                    <p className="text-sm">Choose from the challenges on the left to begin your coding journey</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};