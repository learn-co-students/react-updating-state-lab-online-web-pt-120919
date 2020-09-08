// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
    constructor() {
        super();
        
        this.state = {
            timesClicked: 0
        }
    }
    
    handleClick = () => {
        let newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        );
    }
}

export default DigitalClicker;