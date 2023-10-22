import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (count >= 5) {
      throw new Error('Counter cannot be greater than 5');
    }
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= -5) {
      throw new Error('Counter cannot be less than -5');
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
};

export default useCounter;
