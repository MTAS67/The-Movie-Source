import React from 'react';
import './App.css';
import Title from './title';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>The Movie Source</h1> 
        <input type="text" className="textbox" id="title" placeholder="Enter Movie Title"/><br></br>
        
        <Title/>
      </header>
    </div>
    
  );
}

export default App;
