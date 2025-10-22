import React, { useEffect, useState } from 'react'
import './App.css'
useEffect
const App = () => {
  const[text,setText]=useState("");
  function handlechange(e){
    setText(e.target.value)
  }

  const charCount =text.length;

  useEffect(() => {
    console.log("Text updated:", text);
  }, [text]);
  return (
    <div className='whole-container'>
    <div className='container'>
      <h1>Live Character Counter</h1>
      <p>Type something:</p>
      <textarea type='text' placeholder='Start typing...' value={text} onChange={handlechange}></textarea>
      <div className='count-box'>Character Count: {charCount}</div>
    </div>
    </div>
  ) 
}

export default App
