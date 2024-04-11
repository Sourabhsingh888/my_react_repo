import React, { useState } from "react";
export default function Info() {
  const [name, setName] = useState("Sourabh singh");

  return (
    <div>
      <h1>{name}</h1>
      <button type="button" onClick={() => setName("Sourabh Singh Bhadoriya")}>
        Update name
      </button>
    </div>
  );
};
