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
    this.levelCompleted = this.levelCompleted.bind(this);
    this.timeIsUp = this.timeIsUp.bind(this);
  }
  selectRandNrs(allNrs, amountToReturn) {
    if (allNrs.length <= amountToReturn) {
      return allNrs;
    }
    let arr = [];
    for (let i = 0; i < amountToReturn; i++) {
      arr.push(allNrs
      [Math.floor
          (Math.random() * allNrs.length)]);
    }
    return arr;
  }
  levelCompleted() {
    this.setState(function (state) {
      return (
        {
          currentLevel: state.currentLevel + 1,
          levelTimeInSec: state.levels[state.currentLevel + 1].levelTimeInSec
        }
      )
    });
  }

  //N.B!!! Lowest currentlevel is supposed to be 1.
  timeIsUp() {
    const levelToChangeTo = this.state.currentLevel === STARTING_LEVEL ? STARTING_LEVEL
      : this.state.currentLevel - 1;
    this.setState(function (state) {
      return (
        {
          currentLevel: levelToChangeTo,
          levelTimeInSec: state.levels[levelToChangeTo].levelTimeInSec
        }
      )
    });
  }
  tick() {
    if (this.state.levelTimeInSec <= 0) {
        this.timeIsUp();
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
        <Level name={levelName} tables={tables}
          levelCompleted={this.levelCompleted}
        />
        <Timer className="Timer" secsRemainingForLevel = {this.state.levelTimeInSec}/>
      </div>
    );
  }
}
export default App;
