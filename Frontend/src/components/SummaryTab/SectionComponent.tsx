import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';
import { SectionDetails } from './SectionDetails';

export const SectionComponent = ({ 
  section,
  originalIndex,
  isExpanded,
  isUnlocked,
  isViewed,
  onSectionClick
}: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: originalIndex * 0.1 }}
    className="border border-slate-800 rounded-xl overflow-hidden shadow-md"
  >
    <button
      onClick={() => onSectionClick(originalIndex)}
      className={`w-full p-6 text-left flex items-start gap-6 transition-all ${
        isExpanded 
          ? 'bg-gradient-to-r from-slate-800 to-slate-850' 
          : 'hover:bg-slate-800/50'
      } ${!isViewed ? 'border-2 border-purple-500/40' : ''}`}
    >
      <div className="flex flex-col items-center gap-2 relative group">
        <span className="text-purple-400 font-mono text-sm">
          {section.time}
        </span>
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-slate-700 text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          {section.theory.tips[0]}
        </div>
        {isUnlocked ? (
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
            <Check className="h-5 w-5 text-white" />
          </div>
        ) : (
          <AlertCircle className="h-8 w-8 text-yellow-500/50" />
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-2">
          {section.content}
        </h3>
        {isUnlocked && (
          <div className="flex gap-2 flex-wrap">
            {section.theory.tips.map((tip: string, tipIndex: number) => (
              <span
                key={tipIndex}
                className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300"
              >
                {tip}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>

    {isExpanded && (
      <SectionDetails section={section} />
    )}
  </motion.div>
);