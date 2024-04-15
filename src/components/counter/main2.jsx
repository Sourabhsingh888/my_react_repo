import React from "react";
import CounterContext from "./CounterContext";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

function Main2() {
  const [count, setCount] = React.useState(1);

  // Define functions for increment and decrement
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    // Providing the count value and functions to the context
    <CounterContext.Provider value={{ count, increment, decrement }}>
      <div>
        <h1 style={{backgroundColor:"orange"}}>This is my main page</h1>
        <h1>Counter</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
    </CounterContext.Provider>
  );
}

export default Main2;
