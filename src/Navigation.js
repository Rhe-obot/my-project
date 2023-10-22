import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/custom-counter">CustomCounterPage</Link>
      <Link to="/error">ErrorBoundaryTestPage</Link>
      <Link to="/404">NotFoundPage</Link>
    </div>
  );
};

export default Navigation;
