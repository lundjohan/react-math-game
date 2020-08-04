import React, { Component } from 'react'
import Question from './Question'
import UserInput from './UserInput'
import Feedback from './Feedback'

class Table extends Component {
    constructor() {
        super();
        this.state = { answerIsCorrect: false };
        this.correctInput = this.correctInput.bind(this);
    }

    //very ugly method.
    correctInput(answer) {
        let userHasRight = false;

        //see https://stackoverflow.com/questions/5834318/are-variable-operators-possible
        var operators = {
            //parseInt to avoid string addition, surprisingly I need it on both.
            '+': function (a, b) { return parseFloat(a) + parseFloat(b) },
            '-': function (a, b) { return a - b },
            '*': function (a, b) { return a * b },
            '/': function (a, b) { return a / b }
        };

        const correctAnswer = operators[this.props.arithmetic](this.props.leftNr, this.props.rightNr);
        console.log("answer: " + answer);
        console.log("correctAnswer: " + correctAnswer);

        if (Number.parseFloat(answer).toFixed(1) ===
            Number.parseFloat(correctAnswer).toFixed(1)) {
            userHasRight = true;
        }
        this.setState({
            answerIsCorrect: userHasRight
        });
    }
    render() {
        return (<div className="Table">
            <Question leftNr={this.props.leftNr} arithmetic={this.props.arithmetic} rightNr={this.props.rightNr} />
            <UserInput correctInput={this.correctInput} />
            <Feedback text={this.state.answerIsCorrect ? "Correct!" : "False!"} />
        </div>)
    }

}

export default Table;