import React, {Component} from "react"

class YouTubeDebugger extends Component {
    constructor(props){
        super(props)
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: "1080p"
                }
            }
        }
    }
     
    handleClick = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12,
            }  
        })
    }

    handleClickResolution = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: "720p"
                }
            }  
        })
    }

    render(){
        const verb = this.state.settings
        return(
            <div>
                <h5>Bitrate</h5>
                <button className = "bitrate" onClick={this.handleClick}>{verb.bitrate ? verb.bitrate : this.state.settings.bitrate}</button>
                <h5>Resolution</h5>
                <button className = "resolution" onClick={this.handleClickResolution}>{verb.video.resolution ? verb.video.resolution : verb.video.resolution}</button>
            </div>
        )
    }

}
export default YouTubeDebugger