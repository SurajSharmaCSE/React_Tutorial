import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, { Component, useState } from 'react';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#232234';
      document.className.style.backgroundColor='#232234'
      document.style.heading='white';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextMaster" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </> 
  );
}

export default App;