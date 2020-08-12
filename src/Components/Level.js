import React, { Component } from "react"
import Table from "./Table"


class Level extends Component {
    constructor() {
        super();
        this.state = {
            //fills with {1: true, 2:true} ... false if user enters false again
            correctAnswers: {}
        };
        this.changeCorrectAnswer = this.changeCorrectAnswer.bind(this);
    }
    //toValue: boolean
    changeCorrectAnswer(id, toValue) {
        const updatedAnswers = this.state.correctAnswers;
        updatedAnswers[id] = toValue;
        this.setState({
            correctAnswers: updatedAnswers
        });
        if (Object.keys(updatedAnswers) && Object.keys(updatedAnswers).length ===
            this.props.tables.length &&
            !Object.values(updatedAnswers).includes(false)) {
            this.props.changeLevel(true);
        }
    }
    render() {
        let here = this;
        return (
            <div>
                <h1>LEVEL {this.props.name}</h1>
                <p>Answer division challenges with one decimal</p>
                {this.props.tables.map(function (table, i) {
                    return <Table key={i} id={i} leftNr={table.leftNr}
                        arithmetic={table.arithmetic} rightNr={table.rightNr}
                        changeCorrectAnswer={here.changeCorrectAnswer} />;
                })}
            </div>
        );
    }
}

export default Level;