import React, { Component } from 'react'
class UserInput extends Component {
    constructor() {
        super();
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.focusOut = this.focusOut.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    focusOut(event){
        this.props.correctInput(this.state.value);
    }
    render() {
        return (
            <div className ="UserInput">
                <input type="text" value={this.state.value} onChange={this.handleChange} onBlur={this.focusOut}/>
            </div>
        )
    }
}
export default UserInput