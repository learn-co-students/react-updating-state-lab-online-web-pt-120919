import React, {Component} from 'react';

export default class YoutubeDebugger extends Component {
  constructor(props) {
    super(props);

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
  

  handleClickBitrate = (e) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  }

  handleClickResolution = (e) => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    });
  }

  
  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleClickBitrate}>bitrate</button>
        <button className='resolution' onClick={this.handleClickResolution}>resolution</button>
      </div>
    )
  }
}