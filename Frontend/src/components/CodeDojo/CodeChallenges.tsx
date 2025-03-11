import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Challenge {
  id: number;
  title: string;
  difficulty: string;
  description: string;
  starterCode: string;
  testCases: { input: any[]; output: any[] }[];
}

const CODE_CHALLENGES: Challenge[] = [
  {
    id: 1,
    title: "Array Reversal",
    difficulty: "⭐ Beginner",
    description: "Reverse the elements of an array in-place",
    starterCode: `function reverseArray(arr) {
  // Your code here
}`,
    testCases: [
      { input: [1, 2, 3], output: [3, 2, 1] },
      { input: [9, 5, 2, 7], output: [7, 2, 5, 9] }
    ]
  },
  {
    id: 2,
    title: "Sum of Array",
    difficulty: "⭐ Beginner",
    description: "Calculate the sum of all array elements",
    starterCode: `function arraySum(arr) {
  // Your code here
}`,
    testCases: [
      { input: [1, 2, 3], output: 6 },
      { input: [10, -5, 3], output: 8 }
    ]
  },
  {
    id: 3,
    title: "Find Duplicates",
    difficulty: "⭐⭐ Intermediate",
    description: "Find all duplicate elements in an array",
    starterCode: `function findDuplicates(arr) {
  // Your code here
}`,
    testCases: [
      { input: [1, 2, 2, 3, 3], output: [2, 3] },
      { input: [1, 1, 1, 2, 2], output: [1, 2] }
    ]
  }
];

interface CodeChallengesProps {
  onSelectChallenge: (challenge: Challenge) => void;
  selectedChallengeId: number;
}

export const CodeChallenges = ({ onSelectChallenge, selectedChallengeId }: CodeChallengesProps) => {
  const [hoveredChallenge, setHoveredChallenge] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Terminal className="h-6 w-6 text-purple-500" />
        <h3 className="text-xl font-semibold">Code Challenges</h3>
      </div>
      
      <div className="space-y-3">
        {CODE_CHALLENGES.map((challenge) => (
          <motion.div
            key={challenge.id}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredChallenge(challenge.id)}
            onHoverEnd={() => setHoveredChallenge(null)}
            className={`p-4 rounded-xl cursor-pointer transition-colors duration-200 ${
              selectedChallengeId === challenge.id 
                ? 'bg-slate-700 border-l-4 border-purple-500' 
                : 'bg-slate-800 hover:bg-slate-700/50'
            }`}
            onClick={() => onSelectChallenge(challenge)}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-semibold flex items-center gap-2">
                  {challenge.title}
                  {hoveredChallenge === challenge.id && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs bg-purple-500/20 px-2 py-1 rounded-full"
                    >
                      Click to select
                    </motion.span>
                  )}
                </h4>
                <p className="text-sm text-slate-400">{challenge.description}</p>
              </div>
              <ChevronRight className={`h-5 w-5 transition-colors ${
                selectedChallengeId === challenge.id ? 'text-purple-500' : 'text-slate-400'
              }`} />
            </div>
            <span className="text-xs text-purple-400 mt-2 block">
              {challenge.difficulty}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export type { Challenge };