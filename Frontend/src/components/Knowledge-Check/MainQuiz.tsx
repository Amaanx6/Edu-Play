// components/knowledge-check/MainQuiz.tsx
import { QuizProvider } from './QuizContext';
import DifficultySelector from './DifficultySelector'; // Default import
import Quiz from './Quiz'; // Default import
import { Navbar } from '../Navbar'; // Named import
import { useQuiz } from './QuizContext';
import { Brain } from 'lucide-react'; // Importing a Lucide icon for the Navbar

const QuizContent = () => {
  const { difficulty } = useQuiz();
  
  // Render DifficultySelector if no difficulty is selected, otherwise render Quiz
  return difficulty ? <Quiz /> : <DifficultySelector />;
};

export const MainQuiz = () => {
  return (
    <QuizProvider>
      <div className="flex flex-col h-screen overflow-hidden">
        <Navbar 
          title="Knowledge Check Quiz" // String prop for title
          icon={Brain} // Passing a Lucide icon component (React.ElementType)
        />
        <main className="flex-grow overflow-hidden">
          <QuizContent />
        </main>
      </div>
    </QuizProvider>
  );
};