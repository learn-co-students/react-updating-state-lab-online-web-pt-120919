// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleClick = (event) => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResClick = (event) => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
        
    }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleClick}>Change Bitrate</button>
                <button className="resolution" onClick={this.handleResClick}>Change Resolution</button>
            </div>
        )

    }
}