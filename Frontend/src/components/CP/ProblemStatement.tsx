import { useState } from 'react';
import { Zap, Copy, Check, RefreshCw, ExternalLink, BookOpen, Trophy, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemStatement = () => {
  const [copied, setCopied] = useState(false);
  const [difficulty, setDifficulty] = useState('medium');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const codeTemplate = `function optimizeAlgorithm(input: number[]): number[] {
  // TODO: Implement your solution
  // Time Complexity: O(n)
  // Space Complexity: O(1)
  return [];
}`;

  const platforms = [
    { name: 'all', label: 'All Platforms' },
    { name: 'codeforces', label: 'CodeForces' },
    { name: 'kickstart', label: 'Google Kickstart' },
    { name: 'leetcode', label: 'LeetCode' },
    { name: 'atcoder', label: 'AtCoder' }
  ];

  const similarProblems = [
    {
      platform: 'codeforces',
      title: 'Array Optimization',
      difficulty: 1400,
      url: 'https://codeforces.com/problemset/problem/1777/A',
      tags: ['arrays', 'sorting']
    },
    {
      platform: 'kickstart',
      title: 'Sorting Problem',
      round: '2022 Round H',
      url: 'https://codingcompetitions.withgoogle.com/kickstart/round/00000000008cb1b6/0000000000c4766e',
      tags: ['dynamic programming', 'arrays']
    },
    {
      platform: 'leetcode',
      title: 'Array Manipulation',
      difficulty: 'Medium',
      url: 'https://leetcode.com/problems/container-with-most-water',
      tags: ['two pointers', 'array']
    },
    {
      platform: 'atcoder',
      title: 'Sequence Optimization',
      contest: 'ABC 242',
      url: 'https://atcoder.jp/contests/abc242/tasks/abc242_d',
      tags: ['implementation', 'math']
    }
  ];

  const learningResources = [
    {
      title: 'Array Manipulation Techniques',
      description: 'Learn advanced array manipulation algorithms and patterns',
      icon: <Brain className="h-5 w-5 text-blue-400" />,
      url: 'https://cp-algorithms.com/data_structures/segment_tree.html'
    },
    {
      title: 'Competitive Programming Handbook',
      description: 'Comprehensive guide to algorithmic problem solving',
      icon: <BookOpen className="h-5 w-5 text-green-400" />,
      url: 'https://cses.fi/book/book.pdf'
    },
    {
      title: 'Past Contest Solutions',
      description: 'Analysis of similar problems from past competitions',
      icon: <Trophy className="h-5 w-5 text-yellow-400" />,
      url: 'https://codeforces.com/blog/entry/62690'
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDifficultyColor = () => {
    switch(difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-white';
    }
  };

  const filteredProblems = selectedPlatform === 'all' 
    ? similarProblems 
    : similarProblems.filter(p => p.platform === selectedPlatform);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Zap className="h-8 w-8 text-purple-400" />
          <h3 className="text-2xl font-semibold text-white">Challenge</h3>
        </div>
        <motion.div
          className={`flex items-center gap-3 ${getDifficultyColor()}`}
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-lg font-semibold capitalize">{difficulty}</span>
          <RefreshCw
            className="h-5 w-5 cursor-pointer hover:rotate-180 transition-transform duration-300"
            onClick={() => setDifficulty(['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)])}
          />
        </motion.div>
      </div>

      <div className="space-y-8">
        <div className="prose prose-invert">
          <h4 className="text-2xl font-semibold text-white mb-4">Array Optimization Problem</h4>
          <p className="text-gray-300 text-lg">
            Given an array of integers, optimize it according to the following rules:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {[
              'Remove all duplicate elements',
              'Sort the remaining elements in ascending order',
              'Return the result with O(n) time complexity',
              'Maintain original array structure'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-6">
          <pre className="p-6 bg-slate-900/50 rounded-xl text-sm font-mono overflow-x-auto border border-white/10">
            {codeTemplate}
          </pre>
          <button
            onClick={copyToClipboard}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-400" />
            ) : (
              <Copy className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-white flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-400" />
            Learning Resources
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {learningResources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-900/50 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-3">
                  {resource.icon}
                  <div>
                    <h5 className="text-white font-semibold mb-1">{resource.title}</h5>
                    <p className="text-sm text-gray-400">{resource.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-white flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              Similar Problems
            </h4>
            <div className="flex gap-2">
              {platforms.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => setSelectedPlatform(platform.name)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    selectedPlatform === platform.name
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-900/50 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {platform.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProblems.map((problem, index) => (
              <motion.a
                key={index}
                href={problem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-900/50 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300 flex items-center justify-between"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div>
                  <h5 className="text-white font-semibold mb-1">{problem.title}</h5>
                  <div className="flex gap-2">
                    {problem.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};