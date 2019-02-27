import React, { component } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import 'antd/dist/antd.css';
class Success extends React.Component {
    Videoready(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
  render() {
    const opts = {
        height: '315',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
      const {videoId}=this.props
    return (
      <div>
         <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.Videoready}
      /><br/><br/>
      </div>

    );
  }
}
export default Success;
