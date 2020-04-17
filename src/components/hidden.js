import React, { Component } from "react";

export default class Hidden extends Component {
    constructor() {
        super();
        this.state = {
            title: "iDisappear"
        };
    }

    hidden = () => {
      if (this.state.title === "iDisappear") {
        this.setState({
          title: ""
          });
        } else if (this.state.title === "") {
          this.setState({
            title: "iDisappear"
          });
        }
    };

    render() {
        return (
          <div>
            <h2>{this.state.title}</h2>

            <button onClick={this.hidden}>I hide the text</button>
          </div>
    );
  }
}