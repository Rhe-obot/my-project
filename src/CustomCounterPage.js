import React from 'react';
import useCounter from './useCounter';
import ErrorBoundaryTestPage from './ErrorBoundaryTestPage';

const CustomCounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <ErrorBoundaryTestPage>
      <div>
        <h2>Custom Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </div>
    </ErrorBoundaryTestPage>
  );
};

export default CustomCounterPage;

