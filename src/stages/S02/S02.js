import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { List, ListItem } from "react-onsenui";

import { updateCanto } from "./actions";

class S02 extends Component {
  render() {
    const mapItems = this.props.list.map((item, i) => (
      <ListItem key={i}>
        <span
          onClick={() => {
            this.props.updateCanto(this.props.list, i);
          }}
          className={item.css}
        >
          {item.value}
        </span>
      </ListItem>
    ));

    return (
      <div>
        <h2>O canto dos pássaros sem voz</h2>
        <List>{mapItems}</List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { list: state.S02.list };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCanto }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(S02);
