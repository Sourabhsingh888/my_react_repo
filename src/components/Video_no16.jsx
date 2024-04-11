import React, { useState } from 'react';

function Input() {
  const [data, setData] = useState(null); // Yahaan ek state variable "data" ko null ke saath initialize kiya gaya hai.
  const [print, setPrint] = useState(false); // Aur ek aur state variable "print" ko false ke saath initialize kiya gaya hai.

  function getData(val) { // getData naam ka ek function define kiya gaya hai, jo input element se aane wale data ko handle karta hai.
    console.log(val.target.value); // Yahaan console par input element mein dala gaya value print kiya ja raha hai.
    setData(val.target.value); // Aur phir "data" state variable ko update kiya ja raha hai uss value se.
    setPrint(false); // "print" state variable ko false kar diya gaya hai, taaki agar user koi aur value enter kare, toh print na ho.
  }

  return (
    <>
      {print ? ( // Agar "print" true hai, toh niche ka JSX render hoga.
        <h1>{data}</h1>
      ) : null}   
       {/* Warna, agar "print" false hai, toh kuch nahi render hoga. */}
      <input type='text' onChange={getData} />  
       {/*  Ek input element render kiya gaya hai, jismein agar koi change hoti hai, toh "getData" function call hota hai. */}

      <button onClick={() => setPrint(true)}>Print Data</button> 
       {/* Ek button render kiya gaya hai, jo "print" state variable ko true karke data ko print karne ke liye use hota hai. */}
    </>
  );
}

export default Input;