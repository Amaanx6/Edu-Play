"use client"

import { motion } from "framer-motion"
import { Youtube, Code, Trophy, Users, BookOpen, Brain, BarChart, ArrowRight } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="text-purple-500" size={24} />,
      title: "InstantQuiz AI",
      description: "Highlight any text to generate quizzes, flashcards, and fill-in-the-blanks instantly.",
    },
    {
      icon: <Youtube className="text-red-500" size={24} />,
      title: "YouTube Summarization",
      description: "Paste any educational video URL to get AI-generated summaries and quizzes.",
    },
    {
      icon: <Trophy className="text-orange-500" size={24} />,
      title: "Gamification",
      description: "Earn XP, unlock badges, and compete on leaderboards as you learn.",
    },
    {
      icon: <Users className="text-teal-500" size={24} />,
      title: "Collaborative Learning",
      description: "Join team challenges, discussion forums, and give kudos to helpful peers.",
    },
    {
      icon: <Code className="text-blue-500" size={24} />,
      title: "Coding Playground",
      description: "Practice coding with interactive challenges and live code execution.",
    },
    {
      icon: <BarChart className="text-green-500" size={24} />,
      title: "Analytics & Reporting",
      description: "Track progress with detailed reports and AI-powered skill gap analysis.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#121212] to-transparent z-10"></div>

      {/* Animated background grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-gray-800"
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                backgroundColor:
                  i % 5 === 0
                    ? ["rgba(168, 85, 247, 0.05)", "rgba(168, 85, 247, 0.1)", "rgba(168, 85, 247, 0.05)"]
                    : "transparent",
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            EduPlay transforms traditional learning with AI-powered tools and gamification
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)" }}
              className="bg-gradient-to-br from-[#1E1E1E] to-[#252525] rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="bg-[#2A2A2A] rounded-xl p-3 inline-block mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-purple-600 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* YouTube Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#1E1E1E] to-[#252525] rounded-2xl p-6 lg:p-10 shadow-xl border border-gray-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Youtube className="text-red-500 mr-2" size={24} />
                <h3 className="text-2xl font-bold">YouTube Summarization</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Paste any educational YouTube video URL and our AI will generate a detailed summary and interactive quiz
                to test your understanding.
              </p>

              <div className="bg-[#2A2A2A] rounded-xl p-4 mb-6 border border-gray-800">
                <div className="flex items-center mb-2">
                  <BookOpen className="text-teal-500 mr-2" size={18} />
                  <span className="text-sm font-medium text-gray-300">Example Summary</span>
                </div>
                <p className="text-gray-400 text-sm">
                  "This video explains Tree Data Structures, covering binary trees, traversal methods, and practical
                  applications in computer science..."
                </p>
              </div>

              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Paste YouTube URL here..."
                  className="flex-1 bg-[#2A2A2A] border border-gray-700 rounded-l-lg py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-r-lg font-medium hover:opacity-90 transition-opacity flex items-center">
                  Summarize
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>

            <div className="relative">
              {/* Video Player Mockup */}
              <div className="bg-[#2A2A2A] rounded-xl overflow-hidden shadow-lg border border-gray-800">
                <div className="relative pt-[56.25%]">
                  {" "}
                  {/* 16:9 Aspect Ratio */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#333] to-[#222] flex items-center justify-center">
                    {/* Video Player Controls */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Top Controls */}
                      <div className="flex items-center justify-between p-4">
                        <div className="h-2 w-16 bg-gray-700 rounded-full"></div>
                        <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                      </div>

                      {/* Center Play Button */}
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white ml-1"></div>
                        </div>
                      </div>

                      {/* Bottom Controls */}
                      <div className="p-4">
                        <div className="h-1 w-full bg-gray-700 rounded-full mb-4">
                          <div className="h-full w-1/3 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                            <div className="h-6 w-6 rounded-full bg-gray-700"></div>
                          </div>
                          <div className="text-xs text-gray-400">3:45 / 10:30</div>
                        </div>
                      </div>
                    </div>

                    {/* Video Title Overlay */}
                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
                      <h4 className="font-medium text-sm">Tree Data Structures Explained</h4>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium">Tree Data Structures Explained</h4>
                  <p className="text-gray-400 text-sm">Learn about binary trees, traversal methods, and more</p>
                </div>
              </div>

              {/* Floating quiz element */}
              <motion.div
                className="absolute -bottom-10 -right-10 bg-[#1E1E1E] p-4 rounded-xl shadow-lg border border-gray-800 max-w-[200px]"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <h5 className="font-medium mb-2">Quick Quiz</h5>
                <p className="text-sm text-gray-400 mb-3">Which traversal visits the root first?</p>
                <div className="space-y-2 text-sm">
                  <div className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-purple-900/20 cursor-pointer transition-colors border border-gray-800">
                    Pre-order
                  </div>
                  <div className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-purple-900/20 cursor-pointer transition-colors border border-gray-800">
                    In-order
                  </div>
                  <div className="p-2 bg-[#2A2A2A] rounded-lg hover:bg-purple-900/20 cursor-pointer transition-colors border border-gray-800">
                    Post-order
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

