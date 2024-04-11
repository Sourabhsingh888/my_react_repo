import React, { useState,useEffect } from "react";
export default function Info1() {
  const [count, setCount] = useState(0);

    useEffect(() => {
        console.warn("use effect")
    })
  return (
      <div>
          <h1>useEffect in React</h1>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count+1)}>
        Update Counter
      </button>
    </div>
  );
}
