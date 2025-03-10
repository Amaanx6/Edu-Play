import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, WandSparkles, BrainCircuit, Trophy, Rocket, LockKeyhole } from 'lucide-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GEMINI_API_KEY = 'AIzaSyAbi5TW_CQNk1s7eErTSLzxtJXGpr6BiA0';

export const YouTubeLearningPortal = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [generatedContent, setGeneratedContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateYouTubeUrl = (url: string) => {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    return regex.test(url);
  };
//@ts-ignore
  const getVideoSummary = async () => {
    if (!validateYouTubeUrl(url)) {
      toast.error('Please enter a valid YouTube URL');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{
            parts: [{
              text: `Summarize this YouTube video (${url}) in 300 words for educational purposes. 
              Focus on key concepts, technical terms, and practical applications.`
            }]
          }]
        }
      );
      
      const summaryText = response.data.candidates[0].content.parts[0].text;
      setSummary(summaryText);
      toast.success('Video summary generated!');

    } catch (error) {
      toast.error('Failed to generate summary');
    } finally {
      setIsLoading(false);
    }
  };

  const generateGamifiedContent = async (selectedDifficulty: string) => {
    if (!summary) return;
    
    setDifficulty(selectedDifficulty);
    setIsLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{
            parts: [{
              text: `Create a gamified learning experience based on this summary: ${summary}
              
              Difficulty: ${selectedDifficulty}
              
              Generate JSON-structured content with:
              - 3 concept mastery challenges (code challenges/case studies)
              - 2 interactive simulations (branching scenarios)
              - 1 competitive puzzle (algorithm optimization)
              - 5 adaptive quiz questions with detailed explanations
              - 1 final project spec
              
              Format: {
                "conceptChallenges": [],
                "simulations": [],
                "competitivePuzzle": {},
                "quiz": [],
                "finalProject": {}
              }`
            }]
          }]
        }
      );

      const contentText = response.data.candidates[0].content.parts[0].text;
      const parsedContent = JSON.parse(contentText);
      setGeneratedContent(parsedContent);
      
    } catch (error) {
      toast.error('Failed to generate content');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 flex items-center justify-center">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-4xl bg-gray-800 rounded-2xl p-8 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center justify-center gap-3">
            <WandSparkles className="text-purple-400" />
            CodeMaster AI
          </h1>
          <p className="text-gray-400">Transform any tech video into a learning journey</p>
        </div>

        {/* URL Input */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste YouTube URL..."
              className="w-full bg-gray-700 rounded-xl px-6 py-4 text-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50"
            />
            
            <motion.button
              onClick={() => navigate("/content")}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 bg-purple-600 hover:bg-purple-700 rounded-xl flex items-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <ArrowRight className="w-5 h-5" />
                  Analyze
                </>
              )}
            </motion.button>
          </div>

          {/* Difficulty Selector */}
          <AnimatePresence>
            {summary && !generatedContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold">Select Challenge Level</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {['easy', 'medium', 'hard', 'competitive'].map((level) => (
                    <motion.button
                      key={level}
                      onClick={() => generateGamifiedContent(level)}
                      whileHover={{ y: -2 }}
                      className={`p-4 rounded-xl flex flex-col items-center gap-2 ${
                        difficulty === level 
                          ? 'bg-purple-600' 
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {level === 'easy' && <BrainCircuit className="w-6 h-6" />}
                      {level === 'medium' && <Trophy className="w-6 h-6" />}
                      {level === 'hard' && <Rocket className="w-6 h-6" />}
                      {level === 'competitive' && <LockKeyhole className="w-6 h-6" />}
                      <span className="capitalize">{level}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Generated Content */}
          <AnimatePresence>
            {generatedContent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                {/* Concept Challenges */}
                <div className="bg-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">🛠️ Concept Mastery</h3>
                  <div className="grid gap-4">
                    {generatedContent.conceptChallenges.map((challenge: any, index: number) => (
                      <div key={index} className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">{challenge.title}</h4>
                        <pre className="whitespace-pre-wrap text-gray-300">
                          {challenge.description}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Simulations */}
                <div className="bg-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">🎮 Scenario Simulations</h3>
                  {generatedContent.simulations.map((sim: any, index: number) => (
                    <div key={index} className="mb-4 p-4 bg-gray-800 rounded-lg">
                      <p className="font-medium">{sim.scenario}</p>
                      <div className="mt-2 space-y-2">
                        {sim.options.map((opt: any, optIndex: number) => (
                          <button
                            key={optIndex}
                            className="w-full text-left p-2 rounded-lg bg-gray-900 hover:bg-gray-700"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Competitive Puzzle */}
                <div className="bg-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">🏆 Optimization Challenge</h3>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-gray-300">
                      {generatedContent.competitivePuzzle.problem}
                    </pre>
                    <div className="mt-4 flex gap-4">
                      <input
                        type="text"
                        placeholder="Your solution..."
                        className="flex-1 bg-gray-900 rounded-lg px-4 py-2"
                      />
                      <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                {/* Final Project */}
                <div className="bg-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">🚀 Capstone Project</h3>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">
                      {generatedContent.finalProject.title}
                    </h4>
                    <pre className="whitespace-pre-wrap text-gray-300">
                      {generatedContent.finalProject.description}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

// export default YouTubeLearningPortal;