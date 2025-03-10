// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {YouTubeLearningPortal} from "./components/YouTubeInputCard"
import{SummaryComponent} from "./components/SummaryTab"
import { CodeTab } from './components/CodeTab';
import { CompetitiveTab } from './components/CompetitiveTab';
import { QuizTab } from './components/QuizTab';
import { ResourcesTab } from './components/ResourcesTab';
import { MainLanding } from './components/Landing/Main-Landing';
// import { Divide } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<YouTubeLearningPortal />} />
          <Route path="/content" element={<SummaryComponent />} />
          <Route path="/code" element={<CodeTab />} />
          <Route path="/cp" element={<CompetitiveTab />} />
          <Route path="/kc" element={<QuizTab />} />
          <Route path="/rh" element={<ResourcesTab />} />
          <Route path="/landing" element={<MainLanding />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;