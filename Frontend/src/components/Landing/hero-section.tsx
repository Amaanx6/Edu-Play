"use client"

import { motion } from "framer-motion"
import { Brain, BookOpen, Award, ArrowRight } from "lucide-react"
import React from "react"

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
  [key: string]: any
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/10 disabled:opacity-50 disabled:pointer-events-none"

  const variantStyles = {
    primary:
      "bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-sm hover:bg-white/20 hover:border-white/30 px-8 py-4",
    secondary: "bg-emerald-400/10 backdrop-blur-lg border border-emerald-400/20 text-emerald-400 hover:bg-emerald-400/20",
    outline: "border-2 border-white/20 text-white/80 hover:border-white/30 hover:text-white",
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50/10 to-white/5">
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 z-0" />
      <div className="absolute inset-0 backdrop-blur-[100px] z-0" />

      {/* Animated particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          style={{
            width: Math.random() * 80 + 30,
            height: Math.random() * 80 + 30,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/20 shadow-sm">
              <Brain size={40} className="text-white" />
            </div>
            <h1 className="ml-4 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              EduPlay
            </h1>
          </div>

          {/* Tagline */}
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 leading-tight">
            Learning Made <br/> Effortlessly Engaging
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform traditional learning into an interactive, skill-building experience with AI and gamification.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="px-8 py-4 text-lg font-semibold">
              Get Started Free
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="secondary" className="px-8 py-4 text-lg font-semibold">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Glassmorphic Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 h-14 bg-white/10 border-b border-white/10 flex items-center px-4 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="ml-4 h-5 w-40 bg-white/10 rounded-md animate-pulse" />
                <div className="ml-auto flex items-center space-x-4">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={`header-icon-${i}`}
                      className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="absolute top-14 left-0 bottom-0 w-16 bg-white/10 border-r border-white/10 flex flex-col items-center py-4 space-y-6 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <BookOpen size={16} className="text-white" />
                </div>
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={`nav-icon-${i}`}
                    className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm"
                  />
                ))}
              </div>

              {/* Main Content */}
              <div className="absolute top-14 left-16 right-0 bottom-0 p-6">
                {/* Quiz Card */}
                <motion.div
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 mb-4 border border-white/10 shadow-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-sm text-white">Data Structures</h3>
                      <p className="text-xs text-white/60">Question 3 of 10</p>
                    </div>
                    <div className="bg-emerald-400/20 text-emerald-400 text-xs px-2 py-1 rounded-full">
                      +10 XP
                    </div>
                  </div>
                  <p className="text-sm mb-3 text-white/90">Which traversal visits the root node first?</p>
                  <div className="space-y-2">
                    {['Pre-order', 'In-order', 'Post-order'].map((answer) => (
                      <div
                        key={answer}
                        className="bg-white/5 p-2 rounded text-xs text-white/80 hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        {answer} traversal
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Progress Bar */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/10 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-sm text-white">Your Progress</h3>
                    <p className="text-xs text-white/60">70% Complete</p>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/20 shadow-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2 text-emerald-400">
              <Award size={20} />
              <span className="text-sm font-medium">+100 XP</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/20 shadow-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <BookOpen size={20} />
              <span className="text-sm font-medium">Quiz Completed!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}