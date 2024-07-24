import React from 'react';

function ChildComponent({ handleCount }) {
  console.log('Child component render');

  return (
    <div>
      <button onClick={handleCount}>Click me</button>
    </div>
  );
}

export default React.memo(ChildComponent)