import React, { Component } from "react";

export default class S02 extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.liClicked = [];
    for (let i = 0; i < 10; i++) {
      this.props.list.push(
        <li className="ss" key={i}>
          {Math.round(Math.random())}
        </li>
      );
    }
  }

  render() {
    console.log(this.props.list);
    return (
      <div>
        <h2>O canto dos pássaros sem voz</h2>
        <ul>{this.props.list}</ul>
      </div>
    );
  }
}
