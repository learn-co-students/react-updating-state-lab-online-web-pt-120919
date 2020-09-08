// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor() {
        super();
        
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    handleBirateClick = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }
    
    handleResolutionClick = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBirateClick} className ='bitrate'>Bitrate!</button>
                <button onClick={this.handleResolutionClick} className ='resolution'>Resolution!</button>
            </div>
        );
    }
}

export default YouTubeDebugger;