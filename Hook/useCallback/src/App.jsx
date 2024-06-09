import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

export default function App() {
  const [count, setCount] = useState(0);

  console.log('Parent render');

  const handleCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <button onClick={handleCount}>{count}</button>
      <ChildComponent handleCount={handleCount} />
    </div>
  );
}
