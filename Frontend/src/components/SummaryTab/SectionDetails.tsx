import { motion } from 'framer-motion';
import { Sparkles, BookMarked, Share2, Check } from 'lucide-react';

export const SectionDetails = ({ section }: any) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    className="bg-slate-850/50 border-t border-slate-800"
  >
    <div className="p-6 pt-0 space-y-6">
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        className="flex items-center gap-4 bg-gradient-to-r from-purple-600/10 to-blue-500/10 p-4 rounded-lg border border-purple-500/20"
      >
        <Sparkles className="h-6 w-6 text-purple-400" />
        <div>
          <p className="text-purple-300 font-bold">
            {section.theory.badge}
          </p>
          <p className="text-sm text-purple-200">
            +{section.theory.points} XP Earned!
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Deep Dive</h4>
          <p className="text-slate-300 leading-relaxed text-sm">
            {section.theory.details}
          </p>
        </div>
        
        <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 shadow-inner">
          <h4 className="text-lg font-semibold text-white mb-4">
            Pro Tips
          </h4>
          <ul className="space-y-3">
            {section.theory.tips.map((tip: string, tipIndex: number) => (
              <li
                key={tipIndex}
                className="flex items-start gap-2"
              >
                <div className="w-6 h-6 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-purple-400" />
                </div>
                <span className="text-slate-300 text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 border-t border-slate-800 pt-6">
        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 rounded-xl transition-all border border-slate-700">
          <BookMarked className="h-5 w-5 text-purple-400" />
          <span className="text-white font-medium">Save</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 rounded-xl transition-all border border-slate-700">
          <Share2 className="h-5 w-5 text-purple-400" />
          <span className="text-white font-medium">Share</span>
        </button>
      </div>
    </div>
  </motion.div>
);