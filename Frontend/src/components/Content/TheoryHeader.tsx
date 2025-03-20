import { Clock, BookOpen } from 'lucide-react';
import type { TheoryContent } from './theory';

interface TheoryHeaderProps {
  content: TheoryContent;
}

export function TheoryHeader({ content }: TheoryHeaderProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6 border border-gray-700">
      <h1 className="text-2xl font-bold text-gray-100 mb-4">{content.title}</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-gray-400">
          <Clock className="w-5 h-5" />
          <span>{content.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <BookOpen className="w-5 h-5" />
          <span>{content.keyTopics.length} Topics</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {content.keyTopics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-purple-900/50 text-purple-200 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}