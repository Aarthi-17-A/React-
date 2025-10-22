import React from 'react';
import './App.css';

var name = 'aarthi.👏';
var fact = 'I can debug in dreams👩‍💻';

const App = () => {
  return (
    <div className="App">
      <h1>Hello, I am {name}</h1>
      <h2>Aspiring React Developer</h2>
      <p>I'm currently learning how to build awesome UIs with React</p>
      <b>Fun Fact:</b> {fact}    
    </div>
  );
};

export default App;