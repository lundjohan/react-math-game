import React, { Component } from 'react';
import './App.css';
import Level from './Components/Level'
import levels from './Database/levels'

class App extends Component{
  constructor() {
    super();
    this.selectRandNrs = this.selectRandNrs.bind(this);
  }
  selectRandNrs(allNrs, amountToReturn) {
    if (allNrs.length <= amountToReturn) {
      return allNrs;
    }
    let arr = [];
    for (let i = 0; i < amountToReturn; i++) {
      console.log(i);
      arr.push(allNrs
      [Math.floor
          (Math.random() * allNrs.length)]);
    }
    return arr;
  }
  render() {
    const NR_OF_TABLES = 12;
    const ARITMETICS = ["*", "+", "/", "-"];
    let currentLevel = levels[0];
    let tables = [];
    tables = this.selectRandNrs(currentLevel.numbers, NR_OF_TABLES);
    return (
      <div className="App">
        <Level name="1" tables={tables} />
      </div>
    );
  }
}
export default App;
