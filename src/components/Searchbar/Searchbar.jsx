import React from "react";

export default class Searchbar extends React.Component {
  constructor() {
    super();
  }

  state = { item: "buildings" };
  onChangeInput = (e) => {
    console.log("search" + e.target.value);
    this.setState({ item: e.target.value });
  };
  onClickSearch = () => {
    console.log("clicked");
    this.props.getSearchedItem(this.state.item)
  };

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type here to search...."
            value={this.state.item}
            onChange={this.onChangeInput}
          />
          <span
            className="input-group-text"
            id="basic-addon2"
            onClick={this.onClickSearch}
          >
            search
          </span>
        </div>
      </div>
    );
  }
}
