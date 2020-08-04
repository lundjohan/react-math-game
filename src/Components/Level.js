import React, { Component } from "react"
import Table from "./Table"

class Level extends Component {
    render() {
        return (
            <div>
                <h1>LEVEL {this.props.name}</h1>
                <p>Answer division challenges with one decimal</p>
                {this.props.tables.map(function (table, i) {
                    return <Table key={i} leftNr={table.leftNr}
                        arithmetic={table.arithmetic} rightNr={table.rightNr} />;
                })}
            </div>
        );
    }
}

export default Level;