import React from 'react';

class ErrorBoundaryTestPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // If an error occurs, render an error message
      return <h2>Something went wrong.</h2>;
    }

    return <h2>Something went wrong. Please try again later.</h2>;
  }
}

export default ErrorBoundaryTestPage;
