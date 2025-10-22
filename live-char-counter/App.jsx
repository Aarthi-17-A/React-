import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [count,Setcount]=useState(0)
  const [color,setColor]=useState('red')   
      function addbtn(){
          Setcount(count+1)
      }
  
      function subtractbtn(){
          Setcount(count-1)
      }
      
      function ChangeColor(){
        setColor(color === 'red'? 'blue' : 'red')
      }
      
    useEffect(() => {
      document.title=`count :${count} ${color}`
    },[count])

    // use efffect is used to tell react to do something when something happens
    // useEffect(()=> {}) => will run everytime component re-renders
    // useEffect(()=> {},[]) => will run when component mounts 
    // useEffect(()=> {},[dependencies]) => will run when the value changes and when it is mounted.

    //every state change leads to => useeffect
    //when useeffect runs document changes  => title changes (updates title)
    //use effect will work basd on the state change
  return (
    <div>
      <h1 style={{color:color}}>count: {count}</h1>
      <button onClick={addbtn}>Add</button>
      <button onClick={subtractbtn}>Subtract</button>
      <button onClick={ChangeColor}>ChangeColor</button>
    </div>
  )
}

export default App
