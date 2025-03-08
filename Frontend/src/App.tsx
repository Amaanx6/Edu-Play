// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {YouTubeLearningPortal} from "./components/YouTubeInputCard"
import{SummaryComponent} from "./components/SummaryTab"

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<YouTubeLearningPortal />} />
          <Route path="/content" element={<SummaryComponent />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;