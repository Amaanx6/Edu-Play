import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TheorySection as TheorySectionType } from './theory';

interface TheorySectionProps {
  section: TheorySectionType;
  index: number;
}

export function TheorySection({ section, index }: TheorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg shadow-lg p-6 mb-4 border border-gray-700"
    >
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-gray-400">{section.time}</span>
          <h3 className="text-lg font-semibold text-gray-100">{section.content}</h3>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-4 space-y-4 overflow-hidden"
          >
            <div className="bg-gray-900/50 p-4 rounded-lg">
              <p className="text-gray-300 leading-relaxed">{section.theory.details}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-2xl">{section.theory.badge.split(' ')[0]}</span>
              <span className="font-semibold text-gray-200">
                {section.theory.badge.split(' ').slice(1).join(' ')}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-200">Pro Tips:</h4>
              <ul className="list-disc list-inside space-y-2">
                {section.theory.tips.map((tip, i) => (
                  <li key={i} className="text-gray-300">{tip}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}