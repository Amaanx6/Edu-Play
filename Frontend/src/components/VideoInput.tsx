// components/VideoInput.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Youtube, Rocket, Loader2, CheckCircle2 } from 'lucide-react';

export function VideoInput() {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate successful analysis after 2 seconds
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => navigate('/content'), 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 relative overflow-hidden flex items-center justify-center p-4">
      <motion.div 
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <AnimatePresence mode='wait'>
          {status !== 'success' ? (
            <motion.div
              key="form"
              className="glass-container bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex flex-col items-center mb-8">
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Rocket className="h-16 w-16 text-purple-500 mb-4" />
                </motion.div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Video Analyzer Pro
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter YouTube URL"
                    className="w-full px-4 py-3 pl-12 bg-slate-700/50 border-2 border-slate-600 rounded-xl text-slate-200 focus:outline-none focus:border-purple-500 transition-all"
                  />
                  <Youtube className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-slate-100 flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <span>Launch Analysis</span>
                      <motion.div
                        className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: 'linear'
                        }}
                      />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-6 bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
            >
              <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto animate-pulse" />
              <h2 className="text-2xl font-bold text-slate-200">
                Analysis Complete!
              </h2>
              <p className="text-slate-400">
                Redirecting to summary page...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"
        animate={{
          rotate: [0, 2, -2, 0],
          scale: [1, 1.02, 1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}