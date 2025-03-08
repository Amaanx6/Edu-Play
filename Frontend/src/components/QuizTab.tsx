// components/tabs/QuizTab.tsx
import { motion } from 'framer-motion';
import { HelpCircle, BookOpen, Award } from 'lucide-react';

export const QuizTab = () => (
  <motion.div className="space-y-8">
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <BookOpen className="h-8 w-8 text-blue-500" />
        <span>Knowledge Check</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Add quiz questions here */}
      </div>
    </div>
  </motion.div>
);