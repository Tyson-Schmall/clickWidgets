import React, { Component } from 'react';
import NavigationContainer from './navigationContainer';
import Align from './align';
import Counter from './counter';
import Clock from './clock';
import Color from './color';
import Grow from './grow';
import Home from './home';
import Hidden from './hidden';
import Toggle from './toggle';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="navigation-container">
          <Router>
            <div>
              <NavigationContainer /> 
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/align" component={Align} />
                <Route path="/clock" component={Clock} />
                <Route path="/color" component={Color} />
                <Route path="/counter" component={Counter} />
                <Route path="/grow" component={Grow} />
                <Route path="/hidden" component={Hidden} />
                <Route path="/toggle" component={Toggle} />
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

