// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
<<<<<<< HEAD
import {YouTubeLearningPortal} from "./components/YouTubeInputCard"
// import { CodeTab } from './components/CodeTab';
=======
import { YouTubeLearningPortal } from './components/YouTubeInputCard';
import { SummaryComponent } from './components/SummaryTab';
import { CodeTab } from './components/CodeTab';
>>>>>>> c4bceb3ac3de012a351b7b56f22fbd226bf199a3
import { CompetitiveTab } from './components/CompetitiveTab';
import { MainLanding } from './components/Landing/Main-Landing';
import { TheoryTab } from './components/SummaryTab/TheoryTab';
import { HARDCODED_SUMMARY } from './components/SummaryTab';
import { MainQuiz } from './components/Knowledge-Check/MainQuiz';
<<<<<<< HEAD
import { CodePlayground } from './components/CodeDojo/Codeplayground';
// import { Divide } from 'lucide-react';
=======
import { MainResources } from './components/Resources/MainResources';
>>>>>>> c4bceb3ac3de012a351b7b56f22fbd226bf199a3

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/input" element={<YouTubeLearningPortal />} />
<<<<<<< HEAD
          <Route path="/content" element={<TheoryTab summary={HARDCODED_SUMMARY}/>} />
          <Route path="/code" element={<CodePlayground />} />
=======
          <Route path="/content" element={<SummaryComponent />} />
          <Route path="/content2" element={<TheoryTab summary={HARDCODED_SUMMARY} />} />
          <Route path="/code" element={<CodeTab />} />
>>>>>>> c4bceb3ac3de012a351b7b56f22fbd226bf199a3
          <Route path="/cp" element={<CompetitiveTab />} />
          <Route path="/kc" element={<MainQuiz />} />
          <Route path="/rh" element={<MainResources />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;