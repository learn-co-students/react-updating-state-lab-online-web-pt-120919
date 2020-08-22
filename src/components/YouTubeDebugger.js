import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }
  changeBitrate = () => {
    // 12
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  };
  changeResolution = () => {
    // 720p
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: "720p"
        }
      })
    });
  };
  render() {
    return (
      <div>
        <br />
        <button className="bitrate" onClick={this.changeBitrate}>
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.changeResolution}>
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}
