import React, {Component} from "react"

class DigitalClicker extends Component{
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return(
            <div>
                <h4>Times Clicked happens to be: {this.state.timesClicked ? this.state.timesClicked + " time(s)!" : null}</h4>
                <button onClick={this.handleClick}>{this.state.timesClicked ? this.state.timesClicked : "Click Me"}</button>
                {/* <button onClick={this.handleClick}>{this.state.timesClicked ? "Click #: " + this.state.timesClicked : "Click Me"}</button> */}
            </div>
        )
    }
}
export default DigitalClicker