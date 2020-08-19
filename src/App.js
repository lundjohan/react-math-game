import React, { Component } from 'react';
import './App.css';
import Level from './Components/Level'
import importedLevels from './Database/levels'
import Timer from "./Components/Timer"
const STARTING_LEVEL = 0;
const NR_OF_TABLES_FOR_LEVEL = 12;

class App extends Component {
  state = {
    gameCompleted: false,
    levels: importedLevels,
    currentLevel: STARTING_LEVEL,
    //nr of turns level has changed (up and down) => useful for giving level unique key every time
    levelChanges: 0,
    levelTimeInSec: importedLevels[STARTING_LEVEL].levelTimeInSec
  }
  selectRandNrs = (levelNrs, amountToReturn) => {
    let arr = [];
    const leftNrs = levelNrs.leftNrs;
    const arithmetic = levelNrs.arithmetic;
    const rightNrs = levelNrs.rightNrs;

    //reverse engineer answer to division
    if (arithmetic === "/") {
      for (let i = 0; i < amountToReturn && i < leftNrs.length && i < rightNrs.length; i++) {
        let randIndOne = Math.floor(Math.random() * leftNrs.length);
        let randIndTwo = Math.floor(Math.random() * rightNrs.length);
        arr.push({
          leftNr: leftNrs[randIndOne] * rightNrs[randIndTwo],
          arithmetic: arithmetic,
          rightNr: rightNrs[randIndTwo]
        });
      }
    }
    else { //+, -, *
      for (let i = 0; i < amountToReturn; i++) {
        arr.push({
          leftNr: leftNrs[Math.floor(Math.random() * leftNrs.length)],
          arithmetic: arithmetic,
          rightNr: rightNrs[Math.floor(Math.random() * rightNrs.length)],
        });
      }
    }
    return arr;
  }
  changeLevel = (moveUp) => {
    console.log("changeLevel is called");
    this.setState(function (state) {
      let levelToChangeTo;
      if (moveUp && state.levels.length === state.currentLevel + 1) {
        return (
          {
            gameCompleted: true
          }
        )
      }
      else if (moveUp) {
        levelToChangeTo = state.currentLevel + 1;
      }
      else {
        levelToChangeTo = state.currentLevel === STARTING_LEVEL ? STARTING_LEVEL
          : state.currentLevel - 1;
      }
      return (
        {
          currentLevel: levelToChangeTo,
          levelTimeInSec: state.levels[levelToChangeTo].levelTimeInSec,
          levelChanges: state.levelChanges + 1
        }
      )
    });
  }

  tick = () => {
    if (this.state.levelTimeInSec <= 0) {
      console.log("inside tick() if state.levelTimeInSec");
      this.changeLevel(false);
    }
    else {
      this.setState(state => ({
        levelTimeInSec: state.levelTimeInSec - 1
      }));
    }
  }

  componentDidMount = () => {

    this.interval = setInterval(() => this.tick(), 1000);

  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render = () => {
    const levelName = this.state.levels[this.state.currentLevel].level;
    const levelNrs = this.state.levels[this.state.currentLevel].numbers;
    const levelChanges = this.state.levelChanges;
    let tables = this.selectRandNrs(levelNrs, NR_OF_TABLES_FOR_LEVEL);
    let gameIsCompleted = this.state.gameCompleted;
    return (
      <div className="App" >
        {gameIsCompleted
          ?
          <p>Congratulations! You Win!</p>
          :
          <>
            <Level key={"level_" + levelName + "|changes_" + levelChanges} name={levelName} tables={tables}
              changeLevel={this.changeLevel}
            />
            <Timer key={"timer_" + levelName} secsRemainingForLevel={this.state.levelTimeInSec} />
          </>
        }
      </div>
    );
  }
}
export default App;
