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
     
    // handleClick = () => {
    //     this.setState({
    //         settings: {
    //             ...this.state.settings,
    //             bitrate: 12
    //         }      
    //     })
    // }

    handleClickResolution = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: "720p",
                }
            }  
        })
    }

    render(){
        const verb = this.state.settings
            debugger
        return(
            <div>
                <button className = "bitrate" onClick={this.handleClickResolution}>{verb.bitrate ? verb.bitrate : this.state.settings.bitrate}</button>
                <p>Nothing here!</p>
                <button className = "resolution" onClick={this.handleClickResolution}>{verb.video.resolution ? verb.video.resolution : verb.video.resolution}</button>
            </div>
        )
    }

}
export default YouTubeDebugger