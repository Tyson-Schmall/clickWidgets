import React, { Component } from "react";

export default class Grow extends Component {
  constructor() {
    super();

    this.state = {
      size: 25
    };

  }

  handleCrementer = increment => {
    this.setState({
      size: this.state.size + increment
    });
  };

  render() {
    return (
      <div>
        <h2
          style={{
            fontSize: `${this.state.size === "1.5em"  ? "normal" : `${this.state.size}px`}`
          }}
        >
          {this.state.size}
        </h2>
        <button onClick={() => this.handleCrementer(-5)}>Shrink</button>
        <button onClick={() => this.handleCrementer(5)}>Grow</button>
      </div>
    );
  }
}