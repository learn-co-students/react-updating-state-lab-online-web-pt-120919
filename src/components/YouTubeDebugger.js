// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
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
      }
    }

    clickHandle = () => {
        this.setState({
        settings: {
            ...this.state.settings,
            bitrate: 12
        }
        })
    }

    clickHandleResolution = () => {
        this.setState({
        settings: { 
            ...this.state.settings,
            video: {
                
            ...this.state.video,
            resolution: '720p'
            }
        }
        })
    }

  render() {
    return (
        <div>
      <button className = 'bitrate' onClick = { this.clickHandle }>Bitrate</button>
      <button className = 'resolution' onClick = { this.clickHandleResolution }>Resolution</button>
      </div>
    );
  }
}

export default YouTubeDebugger;