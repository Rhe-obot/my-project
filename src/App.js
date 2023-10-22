
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import CustomCounterPage from './CustomCounterPage';
import NotFoundPage from './NotFoundPage';
import ErrorBoundaryTestPage from './ErrorBoundaryTestPage';
import './index.css';

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to My App!</h1>
        <p>Explore the different sections </p>
      </div>
      
      <div className="content">
        <p>This page contains link to my CustomCounterPage, ErrorBoundaryTestPage and NotFoundPage. Enjoy.</p>
      </div>
      <div className="footer">
        <p>&copy; 2023 My ALT SCHOOL EXAM</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation /> {/* Include the Navigation component here */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/custom-counter" element={<CustomCounterPage />} />
        <Route path="/error" element={<ErrorBoundaryTestPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
