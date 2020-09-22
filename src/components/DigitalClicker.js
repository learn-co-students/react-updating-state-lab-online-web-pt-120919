// Code DigitalClicker Component Here
import React, { Component } from 'react'
export default class DigitalClicker extends Component{
    constructor(props){
        super(props);
this.state = {
    timesClicked: 0
}}

handleClick = () => {
    let updated = this.state.timesClicked + 1
    this.setState({timesClicked:  updated})
}

render(){
    return(
    <div>
   <button onClick={this.handleClick}>{this.state.timesClicked}</button>
   </div>
    )}}
