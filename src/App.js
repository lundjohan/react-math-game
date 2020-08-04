import React from 'react';
import './App.css';
import Level from './Components/Level'

function App() {
  const NR_OF_TABLES = 12;
  const ARITMETICS = ["*","+", "/", "-"];
  let tables = [];
  for (let i = 0;i <NR_OF_TABLES;i++){
    tables.push(
      {
        leftNr: Math.floor(Math.random()*10),
        arithmetic: ARITMETICS[Math.floor(Math.random()*ARITMETICS.length)],
        rightNr: Math.floor(Math.random()*10)
      }
    )
  }
  
  return (
    <div className="App">
     <Level name ="1" tables = {tables}/>
    </div>
  );
}

export default App;
