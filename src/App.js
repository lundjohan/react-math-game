import React, { Component } from 'react';
import './App.css';
import Level from './Components/Level'
import importedLevels from './Database/levels'
import Timer from "./Components/Timer"
const STARTING_LEVEL = 1;

class App extends Component {
  constructor() {
    super();
    this.state = {
      levels: importedLevels,
      //N.B! Lowest currentLevel is supposed to be one, 
      //if this changes refactor currentLevel in more than this place
      currentLevel: STARTING_LEVEL,
      levelTimeInSec: importedLevels[STARTING_LEVEL].levelTimeInSec
    }
    this.selectRandNrs = this.selectRandNrs.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
  }
  selectRandNrs(levelNrs, amountToReturn) {
    let arr = [];
    const leftNrs = levelNrs.leftNrs;
    const arithmetic = levelNrs.arithmetic;
    const rightNrs = levelNrs.rightNrs;
    for (let i = 0; i < amountToReturn; i++) {
      arr.push({
        leftNr: leftNrs[Math.floor(Math.random() * leftNrs.length)],
        arithmetic: arithmetic,
        rightNr: rightNrs[Math.floor(Math.random() * rightNrs.length)],
      });
    }
    return arr;
  }
  changeLevel(moveUp) {
    console.log("changeLevel is called");
    this.setState(function (state) {
      let levelToChangeTo;
      if (moveUp) {
        levelToChangeTo = state.currentLevel + 1;
      }
      else {
        levelToChangeTo = state.currentLevel === STARTING_LEVEL ? STARTING_LEVEL
          : state.currentLevel - 1;
      }
      return (
        {
          currentLevel: levelToChangeTo,
          levelTimeInSec: state.levels[levelToChangeTo].levelTimeInSec
        }
      )
    });
    this.forceUpdate();
  }

  tick() {
    if (this.state.levelTimeInSec <= 0) {
      console.log ("inside tick() if state.levelTimeInSec");
      this.changeLevel(false);
    }
    else {
      this.setState(state => ({
        levelTimeInSec: state.levelTimeInSec - 1
      }));
    }
  }

  componentDidMount() {

    this.interval = setInterval(() => this.tick(), 1000);

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const NR_OF_TABLES = 12;
    const levelName = this.state.levels[this.state.currentLevel].level;
    const levelNrs = this.state.levels[this.state.currentLevel].numbers;
    let tables = this.selectRandNrs(levelNrs, NR_OF_TABLES);
    return (
      <div className="App" >
        <p></p>
        <Level key = {levelName} name={levelName} tables={tables}
          changeLevel={this.changeLevel}
        />
        <Timer className="Timer" secsRemainingForLevel={this.state.levelTimeInSec} />
      </div>
    );
  }
}
export default App;
