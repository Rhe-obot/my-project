import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCounterPage from './CustomCounterPage';
import NotFoundPage from './NotFoundPage';
import ErrorBoundaryTestPage from './ErrorBoundaryTestPage';
import './index.css';
import { Link } from 'react-router-dom';




const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<CustomCounterPage />} />
        <Route path="/error" element={<ErrorBoundaryTestPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Link to="/nonexistentpage">Go to Non-Existing Page</Link>
        </Router>
  );
     
};

export default App;
