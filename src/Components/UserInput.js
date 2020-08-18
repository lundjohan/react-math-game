import React, { Component } from 'react'
class UserInput extends Component {
    state = { value: '' };
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    focusOut = (event) => {
        this.props.correctInput(this.state.value);
    }
    render = () => {
        return (
            <div className="UserInput">
                <input type="text" className="TextInput" value={this.state.value} onChange={this.handleChange} onBlur={this.focusOut} />
            </div>
        )
    }
}
export default UserInput