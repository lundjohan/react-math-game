import React, {Component} from 'react'
class Question extends Component{
    render(){
        return (
            <div className ="Question">
                <span>{this.props.leftNr} </span>
                <span>{this.props.arithmetic}</span>
                <span>{this.props.rightNr} =</span>
            </div>
        )
    }
}
export default Question