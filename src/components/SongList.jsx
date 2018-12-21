import React from "react";
import { connect } from "react-redux";
import { selectSong } from "./../actions/index";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(el => {
      return (
        <div className="item" key={el.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectSong(el);
              }}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{el.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongList);
