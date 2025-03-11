import { useState, useEffect } from 'react';
import { Timer as TimerIcon, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 120 && !isWarning) setIsWarning(true);
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isWarning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <motion.div
      className="bg-slate-800/30 p-6 rounded-xl border border-slate-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TimerIcon className="h-6 w-6 text-blue-500" />
          <h3 className="text-xl font-semibold">Time Remaining</h3>
        </div>
        <motion.div
          className={`text-3xl font-mono ${timeLeft <= 120 ? 'text-red-500' : 'text-white'}`}
          animate={{
            scale: timeLeft <= 120 ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 0.5, repeat: timeLeft <= 120 ? Infinity : 0 }}
        >
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </motion.div>
      </div>
      {isWarning && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 flex items-center gap-2 text-red-400 text-sm"
        >
          <AlertTriangle className="h-4 w-4" />
          <span>Less than 2 minutes remaining!</span>
        </motion.div>
      )}
    </motion.div>
  );
};