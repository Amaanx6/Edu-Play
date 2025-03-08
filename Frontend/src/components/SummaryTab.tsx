import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookText,
  Book,
  Code2,
  Trophy,
  HelpCircle,
  Codesandbox,
  Check,
  Sparkles,
  BookMarked,
  Share2,
  AlertCircle,
  Clock,
  Zap,
  Trophy as TrophyIcon
} from 'lucide-react';

import { Navbar } from './Navbar';

const HARDCODED_SUMMARY = {
  title: "Mastering Arrays in C++",
  duration: "52:45",
  sections: [
    {
      time: "00:32",
      content: "Introduction to Data Structures and Algorithms: Importance in coding and real-world systems",
      theory: {
        details: "Explore how data structures form the backbone of efficient software development. Learn about time-space complexity tradeoffs and real-world applications in database systems and AI algorithms.",
        badge: "🚀 Starter Unlocked",
        points: 10,
        tips: [
          "Data structures optimize memory usage",
          "Algorithms determine operational efficiency",
          "Combination crucial for scalable systems"
        ]
      }
    },
    {
      time: "01:52",
      content: "Fundamental concepts: Data structures as storage methods, algorithms as operational procedures",
      theory: {
        details: "Deep dive into abstract data types (ADTs) versus concrete implementations. Comparison of linear vs non-linear structures. Algorithm design patterns: divide-and-conquer, greedy methods, and dynamic programming.",
        badge: "📚 Foundation Achieved",
        points: 15,
        tips: [
          "ADTs define interface, implementations define storage",
          "Arrays are simplest linear structure",
          "Algorithm efficiency measured in Big O notation"
        ]
      }
    },
    {
      time: "00:23",
      content: "Array basics: First data structure discussed, storing multiple values under single variable",
      theory: {
        details: "Comprehensive look at array characteristics: fixed size, contiguous memory allocation, random access. Comparison with vectors in C++. Best practices for array initialization and bounds checking.",
        badge: "🔓 Array Prodigy",
        points: 20,
        tips: [
          "Index starts at 0 in most languages",
          "Contiguous memory enables fast access",
          "Size must be known at declaration in C++"
        ]
      }
    },
    {
      time: "03:57",
      content: "Array implementation in C++: Type-specific storage, memory efficiency for large datasets",
      theory: {
        details: "Memory allocation patterns in stack vs heap. Detailed code walkthroughs for static and dynamic arrays. Performance comparison between raw arrays and STL containers like std::array.",
        badge: "💻 Code Warrior",
        points: 25,
        tips: [
          "Stack arrays have fixed size",
          "Heap allocation uses new/delete",
          "STL arrays provide bounds checking"
        ]
      }
    },
    {
      time: "04:13",
      content: "Memory management: Storage mechanisms, element access, and manipulation techniques",
      theory: {
        details: "Deep memory diagramming: how arrays occupy RAM. Pointer arithmetic explained. Common pitfalls: buffer overflows, dangling pointers, and memory leaks. Modern C++ smart pointers with arrays.",
        badge: "🧠 Memory Master",
        points: 30,
        tips: [
          "arr[i] equivalent to *(arr + i)",
          "Always initialize pointer arrays",
          "Use unique_ptr for automatic cleanup"
        ]
      }
    },
    {
      time: "52:39",
      content: "Practical exercises: Hands-on problems with arrays and nested loops",
      theory: {
        details: "Curated problem set: array reversal, matrix rotation, and prefix sum techniques. Competitive programming strategies: time optimization, edge case handling, and test-driven development approaches.",
        badge: "🏆 Challenge Champion",
        points: 50,
        tips: [
          "Nested loops O(n²) complexity",
          "Precompute values when possible",
          "Always test empty array case"
        ]
      }
    }
  ],
  keyTopics: [
    "Array declaration and initialization in C++",
    "Memory allocation and element access",
    "Efficient data storage strategies",
    "Nested loop implementations",
    "Array manipulation best practices",
    "Practical problem-solving techniques"
  ]
};

const ProgressPill = ({ value, max }: { value: number; max: number }) => (
  <div className="relative h-8 bg-slate-700 rounded-full overflow-hidden w-64">
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500"
      initial={{ width: 0 }}
      animate={{ width: `${(value / max) * 100}%` }}
      transition={{ duration: 0.8, type: 'spring' }}
    />
    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
      {value}/{max} Concepts Mastered
    </div>
  </div>
);

const AchievementBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full"
  >
    {icon}
    <span className="text-sm">{text}</span>
  </motion.div>
);

const TheoryTab = ({ summary }: { summary: typeof HARDCODED_SUMMARY }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [unlocked, setUnlocked] = useState<Set<number>>(new Set());
  const [totalPoints, setTotalPoints] = useState(0);
  const [viewedSections, setViewedSections] = useState<Set<number>>(new Set());

  const handleSectionClick = (index: number) => {
    const newViewed = new Set(viewedSections);
    newViewed.add(index);
    setViewedSections(newViewed);

    if (!unlocked.has(index)) {
      setUnlocked(prev => new Set([...prev, index]));
      setTotalPoints(prev => prev + summary.sections[index].theory.points);
    }
    
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl">
        <div className="flex flex-wrap gap-6 items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-slate-900 rounded-xl">
              <Zap className="h-8 w-8 text-purple-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{summary.title}</h1>
              <div className="flex items-center gap-2 mt-2 text-slate-400">
                <Clock className="h-5 w-5" />
                <span>Total Duration: {summary.duration}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <AchievementBadge
              icon={<TrophyIcon className="h-5 w-5 text-yellow-400" />}
              text={`${totalPoints} XP`}
            />
            <ProgressPill value={unlocked.size} max={summary.sections.length} />
          </div>
        </div>

        <div className="space-y-4">
          {summary.sections.map((section, index) => {
            const isUnlocked = unlocked.has(index);
            const isViewed = viewedSections.has(index);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-slate-600 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => handleSectionClick(index)}
                  className={`w-full p-6 text-left flex items-start gap-6 transition-all ${
                    expandedIndex === index 
                      ? 'bg-slate-700' 
                      : 'hover:bg-slate-800/50'
                  } ${!isViewed ? 'border-2 border-purple-500/30' : ''}`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-purple-400 font-mono">
                      {section.time}
                    </span>
                    {isUnlocked ? (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    ) : (
                      <AlertCircle className="h-8 w-8 text-yellow-500/50" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {section.content}
                    </h3>
                    {isUnlocked && (
                      <div className="flex gap-2 flex-wrap">
                        {section.theory.tips.map((tip, tipIndex) => (
                          <span
                            key={tipIndex}
                            className="px-3 py-1 bg-slate-700 rounded-full text-sm"
                          >
                            {tip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-slate-800/50 overflow-hidden"
                    >
                      <div className="p-6 pt-0 space-y-6">
                        <motion.div
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          className="flex items-center gap-4 bg-gradient-to-r from-purple-500/20 to-transparent p-4 rounded-lg"
                        >
                          <Sparkles className="h-6 w-6 text-purple-400" />
                          <div>
                            <p className="text-purple-400 font-bold">
                              {section.theory.badge}
                            </p>
                            <p className="text-sm text-purple-300">
                              +{section.theory.points} XP Earned!
                            </p>
                          </div>
                        </motion.div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-4">
                            <h4 className="text-lg font-bold">Deep Dive</h4>
                            <p className="text-slate-300 leading-relaxed">
                              {section.theory.details}
                            </p>
                          </div>
                          
                          <div className="bg-slate-900 p-4 rounded-xl">
                            <h4 className="text-lg font-bold mb-4">
                              Pro Tips
                            </h4>
                            <ul className="space-y-3">
                              {section.theory.tips.map((tip, tipIndex) => (
                                <li
                                  key={tipIndex}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="h-4 w-4 text-purple-400" />
                                  </div>
                                  <span className="text-slate-300">{tip}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 border-t border-slate-700 pt-6">
                          <button className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">
                            <BookMarked className="h-5 w-5" />
                            Save to Playlist
                          </button>
                          <button className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">
                            <Share2 className="h-5 w-5" />
                            Share Progress
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export function SummaryComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 p-8">
      <Navbar title='Theory Mastery' icon={Book}/>
      <div className=" pt-2max-w-7xl mx-auto space-y-8">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-800/30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
          >
            <TheoryTab summary={HARDCODED_SUMMARY} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}