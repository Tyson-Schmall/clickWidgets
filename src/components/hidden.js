import React, { Component } from "react";

export default class Hidden extends Component {
    constructor() {
        super();
        this.state = {
            title: "iDisappear"
        };
    }

    hidden = () => {
        this.setState({
        title: ""
        });
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