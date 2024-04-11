 import React,{useState} from 'react';

//  01
//  State in function component ---------------------
 const Video_n011 = ()=>{
//     let data = "sourabh singh";

//     function detail(){
//         data = "anuj";
//         alert(data);
//     }

//    return (
//     <div> 
//     <h1>{data}</h1>
//     {/* <button type="button" onClick={()=>{alert("hello shivam")}}>Click me</button> */}
//     <button type="button" onClick={detail}>Click me</button>
//     </div>
//    );
//  ------------------------------------------- 

// 02
const [data,setdata] = useState("anuj");
function updateData(){
  // setdata(data + 1)
  setdata("bhadoriya")
  alert("bhadoriya");
}

// let data = "Anuj";
// function updateData (){
// data = "bhadoriya";
// alert(data);
// }

console.warn("data updated")

 return(
    <div>
  <h1>{data}</h1>
  <button type="button" onClick={updateData}>Update Data</button>

    </div>
 )

 }

 
 export default Video_n011

  