import React from "react";
import CounterContext from "./CounterContext";

function CounterDisplay() {
  // Consuming the count value from the context
  const { count } = React.useContext(CounterContext);

  return <div>Count: {count}</div>;
}

export default CounterDisplay;
