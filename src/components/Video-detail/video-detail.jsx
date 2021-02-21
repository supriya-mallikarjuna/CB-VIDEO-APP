import React from "react";
import "./video-details.css";

export default class VideoDeatils extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("initialVideo" + this.props.video);
  }
  render() {
    console.log(this.props.video);
    if (!this.props.video) {
      return <div>loading.......</div>;
    }
    return (
      <div>
        <div className="video_box mb-3">
          <iframe
            className="video_box"
           
            src={"https://www.youtube.com/embed/" + this.props.video.id.videoId}
          />
        </div>
        <div className="video_detail">{this.props.video.snippet.title}</div>
      </div>
    );
  }
}
