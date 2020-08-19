import React, { Component } from 'react'
import PropTypes from "prop-types"
import Question from './Question'
import UserInput from './UserInput'
import Feedback from './Feedback'

class Table extends Component {
    state = { answerIsCorrect: false };

    //very ugly method.
    correctInput = (answer) => {
        let userHasRight = false;

        //see https://stackoverflow.com/questions/5834318/are-variable-operators-possible
        var operators = {
            '+': function (a, b) { return a + b },
            '-': function (a, b) { return a - b },
            '*': function (a, b) { return a * b },
            '/': function (a, b) { return a / b }
        };

        const correctAnswer = operators[this.props.arithmetic](this.props.leftNr, this.props.rightNr);

        if (Number.parseFloat(answer).toFixed(1) ===
            Number.parseFloat(correctAnswer).toFixed(1)) {
            userHasRight = true;
        }
        this.setState({
            answerIsCorrect: userHasRight
        }, function () {
            this.props.changeCorrectAnswer(this.props.id, this.state.answerIsCorrect);
        });
    }
    render = () => {
        return (<div className="Table">
            <Question leftNr={this.props.leftNr} arithmetic={this.props.arithmetic} rightNr={this.props.rightNr} />
            <UserInput correctInput={this.correctInput} />
            <Feedback text={this.state.answerIsCorrect ? "Correct!" : "False!"} />
        </div>)
    }
}
//automatically removed outside development
Table.propTypes = {
    leftNr: PropTypes.number,
    rightNr: PropTypes.number
}
export default Table;