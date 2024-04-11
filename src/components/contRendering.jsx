import { useState } from "react";
const ContRendering = () => {
  const [LoggedIn, setLoggedIn] = useState("Welcome user");
  const [Login] = useState(6);
  return (
    <div style={{ backgroundColor: "red" }}>
      {/* ternary operator used in this part (recommended) */}
      <h2>Conditional Rendring</h2>
      <h3>{LoggedIn}</h3>
      {Login === 1 ? (
        <h3>welcome, user1</h3>
      ) : Login === 2 ? (
        <h3>welcome, user2</h3>
      ) : (
        <h3>welcome, user3 </h3>
      )}
      <div>
        <button
          type="button"
          onClick={() => setLoggedIn("Hello, sourabh singh bhadoriya")}
        >
          click to update the status
        </button>
      </div>
    </div>
  );

  // ------------------------------------------
  //   (not recommended)
  // if(login){
  //     return(
  //         <div>
  //         <h1>welcome, sourabh</h1>
  //         </div>
  //     )
  // }

  // else{
  //     return(
  //         <div>
  //         <h1>welcome, user</h1>
  //         </div>
  //     )
  // }
};
export default ContRendering;
