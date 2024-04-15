import React from "react";
import CreateContext from "./CreateContext";
const Namefile = () => {
  const { name, setName } = React.useContext(CreateContext);
  return (
    <div>
      <h1>namefile</h1>
      <h2>{name}</h2>
      <button onClick={()=>setName("Hello, sourabh")}>Change Name</button>
    </div>
  );
};

export default Namefile;
