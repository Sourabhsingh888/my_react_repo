import React, { useEffect, useState } from "react";
function Fun1(props) {
  useEffect(() => {
     alert("count is " + props.count)
  },[props.count,props.data]);
  return (
    <div>
      <h1>Count props: {props.count}</h1>
      <h1>Data props: {props.data}</h1>
    </div>
  );
}
export default Fun1;
