import './App.css';
 import React, {useState} from 'react'
 import   {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Rendring from '../src/components/contRendering'
import Video_n011 from './components/Video_n011';
import Video_no13 from '../src/components/Video_no13'
import Video_no14 from './components/Video_no14';
import Video_no16 from './components/Video_no16';
import Video_no17 from './components/Video_no17';
import Video_no18 from './components/Video_no18'
import Video_no20 from './components/Video_no20';
import Video_no21 from './components/Video_no21';
import Video_no21_1 from './components/Video_no21_1';
import Video_no23 from './components/Video_no23';
import Video_no24 from './components/Video_no24';
import Video_no25 from './components/Video_no25';
import Video_no29 from './components/Video_no29';
import Video_no30 from './components/Video_no30';


function App() {
  const [name , setName] = useState("anil")
  const [brand , setbrand] = useState("fortuner");
  const [model, setmodel] = useState('2016');

  function getdata(){
    alert("Hello from app component");
  }
  return (
<div className='App'>
  <BrowserRouter>
  <Routes>
    <Route path='/rendering' element={<Rendring/>} />
    <Route path='/v11' element={<Video_n011/>}   />
    <Route path='/v13' element={<Video_no13/>}   />
    <Route path='/v16' element={<Video_no16/>}   />
    <Route path='/v17' element={<Video_no17/>}   />
    <Route path='/v18' element={<Video_no18/>}   />
    <Route path='/v20' element={<Video_no20/>}   />
    <Route path='/v21' element={<Video_no21  data={getdata}/>}/>
    <Route path='/v21_' element={<Video_no21_1 data={getdata} />} />
    <Route path='/v23' element={<Video_no23 />} />
    <Route path='/v25' element={<Video_no25 />} />
          
    <Route path='/v29' element={<Video_no29/> } />
    <Route path='/v30' element={<Video_no30/> } />
    
  </Routes>
  </BrowserRouter>
  <Video_no14  brand ={brand} model={model} />
  <button onClick={()=>{setbrand("Mustang"); setmodel("2023");}}>update car brand</button>
   {/* <h1>Hello World !</h1> */}
      <h1>{name}</h1>
      <h1>Render Method in React</h1>
      <Video_no24 />
      <button onClick={()=>setName("Sidhu")}>Update Name</button>
</div>
  );
}

export default App;
