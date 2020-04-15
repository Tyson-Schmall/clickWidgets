import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  addnum = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  subnum = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        {this.state.number}
        <div>
          <button onClick={() => this.addnum()}>add</button>
          <button onClick={() => this.subnum()}>subtract</button>
        </div>
      </div>
    );
  }
}
