import React from 'react';
import CounterContext from './CounterContext';

function CounterControls() {
  // Consuming the increment and decrement functions from the context
  const { increment, decrement } = React.useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterControls;
