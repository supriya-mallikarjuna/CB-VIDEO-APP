import React from "react";
import "./Video-list.css";
import youtube from "../../service/youtube-api";
import VideoItem from "../Video-item/Video-item";

export default class VideoList extends React.Component {
  state = { videos: [] };
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentDidUpdate(prevProps) {
    console.log(".... did update" + this.props.item);
    if (this.props.item != prevProps.item) {
      youtube
        .get("/search", {
          params: {
            q: this.props.item,
          },
        })
        .then((res) => {
          console.log(res);
          this.setState({ videos: res.data.items });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div>
        <div className="video_list">
          {this.state.videos.map((item, index) => (
            <VideoItem />
          ))}
        </div>
      </div>
    );
  }
}
