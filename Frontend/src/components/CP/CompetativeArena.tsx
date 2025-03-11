import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Timer } from './Timer';
import { ProblemStatement } from './ProblemStatement';
import { SolutionSubmission } from './SolutionSubmission';

export const CompetitiveArena = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="h-8 w-8 text-yellow-500" />
        <h2 className="text-2xl font-bold">Competitive Arena</h2>
      </div>

      <div className="grid gap-6">
        <Timer />
        <ProblemStatement />
        <SolutionSubmission />
      </div>
    </motion.div>
  );
};