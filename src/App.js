import React from 'react';
import './App.css';
import Level from './Components/Level'
import levels from './Database/levels'

function App() {
  const NR_OF_TABLES = 12;
  const ARITMETICS = ["*","+", "/", "-"];
  let levelOne = levels[0];
  
  let tables = levelOne.numbers;
  
  return (
    <div className="App">
     <Level name ="1" tables = {tables}/>
    </div>
  );
}

export default App;
