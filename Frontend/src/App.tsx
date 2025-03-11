// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {YouTubeLearningPortal} from "./components/YouTubeInputCard"
// import { CodeTab } from './components/CodeTab';
import { CompetitiveTab } from './components/CompetitiveTab';
import { ResourcesTab } from './components/ResourcesTab';
import { MainLanding } from './components/Landing/Main-Landing';
import { TheoryTab } from './components/SummaryTab/TheoryTab';
import { HARDCODED_SUMMARY } from './components/SummaryTab';
import { MainQuiz } from './components/Knowledge-Check/MainQuiz';
import { CodePlayground } from './components/CodeDojo/Codeplayground';
// import { Divide } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/input" element={<YouTubeLearningPortal />} />
          <Route path="/content" element={<TheoryTab summary={HARDCODED_SUMMARY}/>} />
          <Route path="/code" element={<CodePlayground />} />
          <Route path="/cp" element={<CompetitiveTab />} />
          <Route path="/kc" element={<MainQuiz />} />
          <Route path="/rh" element={<ResourcesTab />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;