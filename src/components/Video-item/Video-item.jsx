import React from "react";

export default class VideoItem extends React.Component {
  componentDidMount() {}
  componentDidUpdate({ video }) {}

  onClickImage = (video) => {
    console.log(">>>>>>" + video.snippet.thumbnails.medium.url);
    this.props.onSelectedVideo(this.props.video);
  };
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-lg-7" onClick={() => this.onClickImage(this.props.video)}>
            <img src={this.props.video.snippet.thumbnails.medium.url} />
          </div>
          <div className="col-lg-5">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
