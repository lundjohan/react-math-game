import React, { Component } from 'react';
import './App.css';
import Level from './Components/Level'
import importedLevels from './Database/levels'

class App extends Component {
  constructor() {
    super();
    this.state = {
      levels: importedLevels,
      currentLevel: 1
    }
    this.selectRandNrs = this.selectRandNrs.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
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
  changeLevel(){
    console.log("inside changeLevel");
    this.setState(
      {
        currentLevel: this.state.currentLevel +1
      }
    );
  }


  render() {
    const NR_OF_TABLES = 12;
    const nameOfLevel = this.state.levels[this.state.currentLevel].level;
    const numbersOfLevel = this.state.levels[this.state.currentLevel].numbers;
    let tables = this.selectRandNrs(numbersOfLevel, NR_OF_TABLES);
    return (
      <div className="App">
        <Level name={nameOfLevel} tables={tables}  changeLevel = {this.changeLevel} />
      </div>
    );
  }
}
export default App;
