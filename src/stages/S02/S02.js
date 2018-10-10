import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { List, ListItem, ProgressBar, Button } from "react-onsenui";

import If from "../../common/logic/if";
import { updateCanto, gameover } from "./actions";

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
        <h1>{this.props.completed ? "PASSOU" : ""}</h1>
        <h2>O canto dos pássaros sem voz</h2>
        <h3>{this.props.canto.map(item => item.value).join("")}</h3>
        <List>{mapItems}</List>
        <If condition={true}>
          <ProgressBar indeterminate />
        </If>
        <Button
          onClick={() => {
            this.props.gameover(this.props.list, this.props.canto);
          }}
        >
          AVANÇAR
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    completed: state.S02.completed,
    list: state.S02.list,
    canto: state.S02.canto
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCanto, gameover }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(S02);
