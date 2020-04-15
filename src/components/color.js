import React, { Component } from "react";

export default class Color extends Component {
  constructor() {
    super();
    this.state = {
      color: "Black",
      userInput: ""
    };
  }

  colorChange = () => {};

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      color: this.state.userInput,
      userInput: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="color"
            type="text"
            name="userInput"
            value={this.state.userInput}
            onChange={this.changeHandler}
          />
          <button type="submit">Change Color</button>
        </form>
      </div>
    );
  }
}