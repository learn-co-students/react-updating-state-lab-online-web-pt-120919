// Code YouTubeDebugger Component Here
import React from 'react'


class YouTubeDebugger extends React.Component {


    constructor(){
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

    //change settings bitrate to 12. 
    changeBitrate = () => {
        this.setState({
            settings: {...this.state.settings, bitrate: 12 }
        }

        )
    }


    //changes setting video resolution to 720 p. 
    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, video: {
                    ...this.state.settings.video, resolution: '720p'
                }
            }
        })
    }


    render(){
        return(
           <div> <button className='bitrate' onClick={this.changeBitrate} > Bitrate </button>

           <button className='resolution' onClick={this.changeResolution}> Resolution </button></div>
        )
    }

}

export default YouTubeDebugger  