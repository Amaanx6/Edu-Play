import { motion } from 'framer-motion';
import { Terminal, ChevronRight, ExternalLink, Code2, BookOpen } from 'lucide-react';
import { useState } from 'react';

export type Language = 'javascript' | 'python' | 'cpp';

interface Challenge {
  id: number;
  title: string;
  category: 'Easy' | 'Medium' | 'Hard' | 'CP';
  difficulty: '⭐' | '⭐⭐' | '⭐⭐⭐';
  description: string;
  starterCode: {
    javascript: string;
    python: string;
    cpp: string;
  };
  testCases: { input: any[]; output: any[] }[];
}

interface PlatformProblem {
  title: string;
  difficulty: string;
  platform: 'LeetCode' | 'GeeksforGeeks' | 'CodeChef';
  url: string;
}

const PLATFORM_PROBLEMS: Record<string, PlatformProblem[]> = {
  'Array Reversal': [
    {
      title: "Reverse Array",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      url: "https://practice.geeksforgeeks.org/problems/reverse-an-array/0"
    },
    {
      title: "Reverse String",
      difficulty: "Easy",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/reverse-string/"
    },
    {
      title: "Reverse The Array",
      difficulty: "Easy",
      platform: "CodeChef",
      url: "https://www.codechef.com/problems/REVARR"
    }
  ],
  'Find Maximum': [
    {
      title: "Maximum Element",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      url: "https://practice.geeksforgeeks.org/problems/find-maximum-in-array/1"
    },
    {
      title: "Maximum Subarray",
      difficulty: "Medium",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/maximum-subarray/"
    }
  ],
  'Two Sum': [
    {
      title: "Two Sum",
      difficulty: "Easy",
      platform: "LeetCode",
      url: "https://leetcode.com/problems/two-sum/"
    },
    {
      title: "Pair Sum",
      difficulty: "Easy",
      platform: "GeeksforGeeks",
      url: "https://practice.geeksforgeeks.org/problems/pair-sum-existence/1"
    }
  ]
};

const CODE_CHALLENGES: Challenge[] = [
  // Easy Category
  {
    id: 1,
    title: "Array Reversal",
    category: "Easy",
    difficulty: "⭐",
    description: "Reverse the elements of an array in-place",
    starterCode: {
      javascript: `function reverseArray(arr) {
  // Your code here
}`,
      python: `def reverse_array(arr):
    # Your code here
    pass`,
      cpp: `vector<int> reverseArray(vector<int>& arr) {
    // Your code here
}`
    },
    testCases: [
      { input: [1, 2, 3], output: [3, 2, 1] },
      { input: [9, 5, 2, 7], output: [7, 2, 5, 9] }
    ]
  },
  {
    id: 2,
    title: "Find Maximum",
    category: "Easy",
    difficulty: "⭐⭐",
    description: "Find the maximum element in an array",
    starterCode: {
      javascript: `function findMax(arr) {
  // Your code here
}`,
      python: `def find_max(arr):
    # Your code here
    pass`,
      cpp: `int findMax(vector<int>& arr) {
    // Your code here
}`
    },
    testCases: [
      { input: [1, 5, 3, 9, 2], output: 9 },
      { input: [-1, -5, -2], output: -1 }
    ]
  },
  {
    id: 3,
    title: "Two Sum",
    category: "Easy",
    difficulty: "⭐⭐⭐",
    description: "Find two numbers that add up to a target",
    starterCode: {
      javascript: `function twoSum(arr, target) {
  // Your code here
}`,
      python: `def two_sum(arr, target):
    # Your code here
    pass`,
      cpp: `vector<int> twoSum(vector<int>& arr, int target) {
    // Your code here
}`
    },
    testCases: [
      { input: [[2, 7, 11, 15], 9], output: [0, 1] },
      { input: [[3, 2, 4], 6], output: [1, 2] }
    ]
  },
  // Medium Category
  {
    id: 4,
    title: "Valid Parentheses",
    category: "Medium",
    difficulty: "⭐",
    description: "Check if parentheses are valid and properly nested",
    starterCode: {
      javascript: `function isValid(s) {
  // Your code here
}`,
      python: `def is_valid(s):
    # Your code here
    pass`,
      cpp: `bool isValid(string s) {
    // Your code here
}`
    },
    testCases: [
      { input: ["(){}[]"], output: true },
      { input: ["([)]"], output: false }
    ]
  },
  {
    id: 5,
    title: "Group Anagrams",
    category: "Medium",
    difficulty: "⭐⭐",
    description: "Group strings that are anagrams of each other",
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Your code here
}`,
      python: `def group_anagrams(strs):
    # Your code here
    pass`,
      cpp: `vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Your code here
}`
    },
    testCases: [
      { input: [["eat","tea","tan","ate","nat","bat"]], output: [["eat","tea","ate"],["tan","nat"],["bat"]] },
      { input: [["",""]], output: [["",""]] }
    ]
  },
  {
    id: 6,
    title: "Longest Palindrome",
    category: "Medium",
    difficulty: "⭐⭐⭐",
    description: "Find the longest palindromic substring",
    starterCode: {
      javascript: `function longestPalindrome(s) {
  // Your code here
}`,
      python: `def longest_palindrome(s):
    # Your code here
    pass`,
      cpp: `string longestPalindrome(string s) {
    // Your code here
}`
    },
    testCases: [
      { input: ["babad"], output: "bab" },
      { input: ["cbbd"], output: "bb" }
    ]
  },
  // Hard Category
  {
    id: 7,
    title: "Merge K Lists",
    category: "Hard",
    difficulty: "⭐",
    description: "Merge k sorted linked lists",
    starterCode: {
      javascript: `function mergeKLists(lists) {
  // Your code here
}`,
      python: `def merge_k_lists(lists):
    # Your code here
    pass`,
      cpp: `ListNode* mergeKLists(vector<ListNode*>& lists) {
    // Your code here
}`
    },
    testCases: [
      { input: [[[1,4,5],[1,3,4],[2,6]]], output: [1,1,2,3,4,4,5,6] },
      { input: [[]], output: [] }
    ]
  },
  {
    id: 8,
    title: "Regular Expression",
    category: "Hard",
    difficulty: "⭐⭐",
    description: "Implement regular expression matching",
    starterCode: {
      javascript: `function isMatch(s, p) {
  // Your code here
}`,
      python: `def is_match(s, p):
    # Your code here
    pass`,
      cpp: `bool isMatch(string s, string p) {
    // Your code here
}`
    },
    testCases: [
      { input: ["aa", "a*"], output: true },
      { input: ["ab", ".*"], output: true }
    ]
  },
  {
    id: 9,
    title: "Median of Arrays",
    category: "Hard",
    difficulty: "⭐⭐⭐",
    description: "Find median of two sorted arrays",
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Your code here
}`,
      python: `def find_median_sorted_arrays(nums1, nums2):
    # Your code here
    pass`,
      cpp: `double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Your code here
}`
    },
    testCases: [
      { input: [[1, 3], [2]], output: 2.0 },
      { input: [[1, 2], [3, 4]], output: 2.5 }
    ]
  },
  // Competitive Programming Category
  {
    id: 10,
    title: "Maximum Flow",
    category: "CP",
    difficulty: "⭐",
    description: "Implement Ford-Fulkerson algorithm",
    starterCode: {
      javascript: `function maxFlow(graph, source, sink) {
  // Your code here
}`,
      python: `def max_flow(graph, source, sink):
    # Your code here
    pass`,
      cpp: `int maxFlow(vector<vector<int>>& graph, int source, int sink) {
    // Your code here
}`
    },
    testCases: [
      { input: [[[0,16,13,0],[0,0,10,12],[0,4,0,14],[0,0,0,0]], 0, 3], output: 23 },
      { input: [[[0,10,0],[0,0,5],[0,0,0]], 0, 2], output: 5 }
    ]
  },
  {
    id: 11,
    title: "Segment Tree",
    category: "CP",
    difficulty: "⭐⭐",
    description: "Implement a segment tree with range queries",
    starterCode: {
      javascript: `class SegmentTree {
  constructor(arr) {
    // Your code here
  }
  
  rangeQuery(left, right) {
    // Your code here
  }
}`,
      python: `class SegmentTree:
    def __init__(self, arr):
        # Your code here
        pass
        
    def range_query(self, left, right):
        # Your code here
        pass`,
      cpp: `class SegmentTree {
public:
    SegmentTree(vector<int>& arr) {
        // Your code here
    }
    
    int rangeQuery(int left, int right) {
        // Your code here
    }
};`
    },
    testCases: [
      { input: [[[1,3,5,7,9,11], [0,2]]], output: 9 },
      { input: [[[1,2,3,4,5], [2,4]]], output: 12 }
    ]
  },
  {
    id: 12,
    title: "Network Flow",
    category: "CP",
    difficulty: "⭐⭐⭐",
    description: "Implement Dinic's algorithm for maximum flow",
    starterCode: {
      javascript: `function dinicMaxFlow(graph, source, sink) {
  // Your code here
}`,
      python: `def dinic_max_flow(graph, source, sink):
    # Your code here
    pass`,
      cpp: `int dinicMaxFlow(vector<vector<int>>& graph, int source, int sink) {
    // Your code here
}`
    },
    testCases: [
      { input: [[[0,16,13,0],[0,0,10,12],[0,4,0,14],[0,0,0,0]], 0, 3], output: 23 },
      { input: [[[0,10,0],[0,0,5],[0,0,0]], 0, 2], output: 5 }
    ]
  }
];

interface CodeChallengesProps {
  onSelectChallenge: (challenge: Challenge) => void;
  selectedChallengeId: number;
}

export const CodeChallenges = ({ onSelectChallenge, selectedChallengeId }: CodeChallengesProps) => {
  const [hoveredChallenge, setHoveredChallenge] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Challenge['category']>('Easy');
  const [showPlatformProblems, setShowPlatformProblems] = useState(false);
  const [selectedProblemTitle, setSelectedProblemTitle] = useState<string | null>(null);

  const categories: Challenge['category'][] = ['Easy', 'Medium', 'Hard', 'CP'];
  const filteredChallenges = CODE_CHALLENGES.filter(c => c.category === selectedCategory);

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'LeetCode':
        return 'text-yellow-500';
      case 'GeeksforGeeks':
        return 'text-green-500';
      case 'CodeChef':
        return 'text-blue-500';
      default:
        return 'text-slate-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Terminal className="h-6 w-6 text-purple-500" />
          <h3 className="text-xl font-semibold">Code Challenges</h3>
        </div>
        <button
          onClick={() => setShowPlatformProblems(!showPlatformProblems)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            showPlatformProblems
              ? 'bg-purple-500 text-white'
              : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
          }`}
        >
          {showPlatformProblems ? <Code2 className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
          {showPlatformProblems ? 'Show Challenges' : 'Platform Problems'}
        </button>
      </div>

      {!showPlatformProblems ? (
        <>
          <div className="flex gap-2 mb-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="space-y-3">
            {filteredChallenges.map((challenge) => (
              <motion.div
                key={challenge.id}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setHoveredChallenge(challenge.id)}
                onHoverEnd={() => setHoveredChallenge(null)}
                onClick={() => {
                  onSelectChallenge(challenge);
                  setSelectedProblemTitle(challenge.title);
                }}
                className={`p-4 rounded-xl cursor-pointer transition-colors duration-200 ${
                  selectedChallengeId === challenge.id 
                    ? 'bg-slate-700 border-l-4 border-purple-500' 
                    : 'bg-slate-800 hover:bg-slate-700/50'
                }`}
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
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-purple-400">
                    {challenge.difficulty}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">
                    {challenge.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <div className="bg-slate-700/50 p-4 rounded-lg">
            <p className="text-sm text-slate-300">
              Practice similar problems on popular coding platforms to enhance your skills.
            </p>
          </div>
          
          {Object.entries(PLATFORM_PROBLEMS).map(([title, problems]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-4 rounded-xl bg-slate-800 ${
                selectedProblemTitle === title ? 'border-l-4 border-purple-500' : ''
              }`}
            >
              <h4 className="font-semibold mb-3">{title}</h4>
              <div className="space-y-2">
                {problems.map((problem, index) => (
                  <a
                    key={index}
                    href={problem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-medium ${getPlatformColor(problem.platform)}`}>
                        {problem.platform}
                      </span>
                      <span className="text-sm">{problem.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        problem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                        problem.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {problem.difficulty}
                      </span>
                      <ExternalLink className="h-4 w-4 text-slate-400" />
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export type { Challenge };