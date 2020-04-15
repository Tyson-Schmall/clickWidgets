import React, { Component } from "react";

export default class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      toggle: "Hello"
    };

  }

  toggle = () => {
    if (this.state.toggle === "Hello") {
      this.setState({
        toggle: "Goodbye"
      });
    } else if (this.state.toggle === "Goodbye") {
      this.setState({
        toggle: "I'm late! I'm late! I'm late!"
      });
    } else {
        this.setState({
            toggle: "Hello"
        })
    }
  };

  render() {
    return (
      <div>
        {this.state.number}
        <div>
          {this.state.toggle}
          <div>
            <button onClick={() => this.toggle()}>Toggle Me!</button>
          </div>
        </div>
      </div>
    );
  }
}