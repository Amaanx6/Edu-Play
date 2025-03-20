import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchTheoryContent } from './api';
import { TheoryHeader } from './TheoryHeader';
import { TheorySection } from './TheorySection';
import type { TheoryContent as TheoryContentType } from './theory';
import { Navbar } from '../Navbar';
import { Book } from 'lucide-react'

export function TheoryContent() {
  const [content, setContent] = useState<TheoryContentType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
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
      } catch (err) {
        setError('Failed to load theory content');
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

  if (error || !content) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-red-400 text-center">
          <p className="text-xl font-semibold">{error}</p>
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