import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { Timer } from './Timer';
import { ProblemStatement } from './ProblemStatement';
import { SolutionSubmission } from './SolutionSubmission';

export const CompetitiveArena = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-4">
            <Trophy className="h-12 w-12 text-yellow-400" />
            <span>
              Competitive
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"> Arena</span>
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Test your skills, solve challenges, and compete with others in real-time.
          </p>
        </motion.div>

        <div className="grid gap-8">
          <Timer />
          <ProblemStatement />
          <SolutionSubmission />
        </div>
      </div>
    </section>
  );
};