import React from 'react';
function Cars (props){
    return (
      <div>
        <h2>I am a {props.brand}! </h2>
        <h2>I am a {props.model} model! </h2>
      </div>
    );
}

// function Garage() {
//     return (
//       <div>
//         <h1>Who lives in my garage?</h1>
//         <Cars/>
//       </div>
//     );
// }



export default Cars;