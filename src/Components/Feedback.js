import React, {Component} from 'react'
class Feedback extends Component{
    render(){
        const display = this.props.doDisplay;
        return (
            <span className ="Feedback">{this.props.text}</span>
        )
    }
}
export default Feedback



