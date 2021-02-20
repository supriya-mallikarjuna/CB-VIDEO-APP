import React from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import VideoDeatils from "../../components/Video-detail/video-detail";
import VideoList from "../../components/Video-list/Video-list";

export default class Dashboard extends React.Component {
  state = {
    searchedItem: "",
  };
  getSearchedItem = (item) => {
    console.log(item);
    this.setState({ searchedItem: item });
    console.log(this.state.searchedItem);
  };

  render() {
    return (
      <div className="p-4">
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <Searchbar getSearchedItem={this.getSearchedItem} />
          </div>
          <div className="col-lg-5 col-md-6"></div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <VideoDeatils />
          </div>
          <div className="col-lg-5 col-md-6">
            <VideoList item={this.state.searchedItem} />
          </div>
        </div>
      </div>
    );
  }
}
