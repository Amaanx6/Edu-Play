import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchTheoryContent } from './api';
import { TheoryHeader } from './TheoryHeader';
import { TheorySection } from './TheorySection';
import { fallbackTheoryData } from './FallBackTheoryData';
import type { TheoryContent as TheoryContentType } from './theory';
import { Navbar } from '../Navbar';
import {Book} from 'lucide-react'

export function TheoryContent() {
  const [content, setContent] = useState<TheoryContentType | null>(null);
//   const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [usedFallback, setUsedFallback] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const videoId = location.state?.videoId;

  useEffect(() => {
    if (!videoId) {
      navigate('/input');
      return;
    }

    const loadContent = async () => {
      try {
        const data = await fetchTheoryContent(videoId);
        setContent(data);
        setUsedFallback(false);
      } catch (err) {
        console.error('Failed to fetch content, using fallback data:', err);
        setContent(fallbackTheoryData);
        setUsedFallback(true);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [videoId, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-red-400 text-center">
          <p className="text-xl font-semibold">Failed to load content</p>
          <button 
            onClick={() => navigate('/input')} 
            className="mt-4 px-4 py-2 bg-red-900/50 text-red-300 rounded-lg hover:bg-red-900/70 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
        <Navbar title='Theory Master' icon={Book} />
      <div className="max-w-4xl mx-auto px-4">
        {usedFallback && (
          <div className="mb-4 p-4 bg-yellow-900/50 border border-yellow-700 rounded-lg text-yellow-200">
            <p className="text-sm">
              Note: Using fallback content as we couldn't fetch the video-specific data. 
              This is example content about Arrays and Data Structures.
            </p>
          </div>
        )}
        <TheoryHeader content={content} />
        <div className="space-y-4">
          {content.sections.map((section, index) => (
            <TheorySection key={index} section={section} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}