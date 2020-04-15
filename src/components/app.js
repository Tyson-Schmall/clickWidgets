import React, { Component } from 'react';
import Counter from './counter';
import Clock from './clock';
import Color from './color';
import Grow from './grow';
import Hidden from './hidden';
import Toggle from './toggle';



export default class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="app">
          <Clock />

          <Color />

          <Counter />

          <Grow />

          <Hidden />

          <Toggle />
      </div>
    );
  }
}
