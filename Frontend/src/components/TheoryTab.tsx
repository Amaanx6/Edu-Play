// components/tabs/TheoryTab.tsx
import { motion } from 'framer-motion';
import { BookText, ListVideo, CheckCircle2, Clock, Youtube } from 'lucide-react';

export const TheoryTab = ({ summary }: any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="space-y-8"
  >
    <div className="flex items-center gap-4 mb-8">
      <Youtube className="h-16 w-16 text-red-600" />
      <div>
        <h1 className="text-4xl font-bold text-slate-200">{summary.title}</h1>
        <div className="flex items-center gap-2 text-slate-400 mt-2">
          <Clock className="h-6 w-6" />
          <span className="text-lg">{summary.duration}</span>
        </div>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <ListVideo className="h-8 w-8 text-purple-500" />
          <span>Video Chapters</span>
        </h2>
        <div className="space-y-4">
          {summary.chapters.map((chapter: any, index: number) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors"
              whileHover={{ x: 10 }}
            >
              <span className="text-slate-400 text-lg">{chapter.time}</span>
              <span className="text-slate-200 text-xl">{chapter.title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <BookText className="h-8 w-8 text-green-500" />
          <span>Key Concepts</span>
        </h2>
        <ul className="space-y-5">
          {summary.keyPoints.map((point: string, index: number) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-slate-300 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);