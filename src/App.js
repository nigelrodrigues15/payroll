import React, { Component } from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Landing from "./components/landing/landing";
import Dashboard from "./components/dashboard/dashboard";
import { connect } from 'react-redux';
import './App.css';

import { simpleAction } from './actions/simpleAction';

class App extends Component {
 render() {
  return (
   <div className="App">
    
    <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Landing} />
    </Switch>

    
   </div>
  );
 }
}
export default connect()(App);