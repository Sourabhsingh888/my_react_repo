import React from "react";
import CreateContext from "./CreateContext";
// import Name from "./Namefile";
const Userfile = () => {
  const [name, setName] = React.useState("Hello world!");
  return (
    <CreateContext.Provider value={{ name, setName }}>
      <div>
        <h1>Userfile</h1>
        <h3>{name}</h3>
        {/* <Name /> */}
      </div>
    </CreateContext.Provider>
  );
};

export default Userfile;
