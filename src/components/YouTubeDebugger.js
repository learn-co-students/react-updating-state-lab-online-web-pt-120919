// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component {

    constructor(){
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

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    };

    updateRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
            }
        });
    };


    render(){
        return(
            <div>
                <button onClick={this.updateBitrate} className='bitrate' > Change bitrate</button>
                <p>{this.state.settings.bitrate}</p>
                <button onClick={this.updateRes} className='resolution' >Change resolution</button>
                <p> {this.state.settings.video.resolution} </p>
            </div>
        )
    }
}