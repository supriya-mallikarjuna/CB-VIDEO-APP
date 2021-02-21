import React from "react";
import "./video-details.css";

export default class VideoDeatils extends React.Component {
  render() {
    console.log(this.props.video);
    return (
      <div>
        <div className="video_box mb-3">
          <iframe
            src={"https://www.youtube.com/embed/" + this.props.video.id.videoId}
          />
        </div>
        <div className="video_detail">{this.props.video.snippet.title}</div>
      </div>
    );
  }
}
