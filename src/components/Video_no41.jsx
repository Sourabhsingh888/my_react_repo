import React,{useMemo} from 'react';
function Fun2() {
    const [count, setCount] = React.useState(0);
    const [item, setItem] = React.useState(10);
     const multicountmemo = useMemo(function multicount() {
       console.log("Multicount");
       return count * 2;
     },[count]);
    return (
      <div>
        <h1>useMemo Hook in React</h1>
        <h2>Count: {count}</h2>
        <h2>Item: {item}</h2>
        <h2>{multicountmemo}</h2>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
        <button onClick={() => setItem(item * 5)}>Update Item</button>
      </div>
    );
}
export default Fun2;