import React, { Component } from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Landing from "./components/landing/landing_container";
import DashboardContainer from "./components/dashboard/dashboard_container";
import Employee from "./components/employee/employee_container";
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
 render() {
  return (
   <div className="App">
    
    <Switch>
        <Route exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/employee/:employeeID" component={Employee} />
        <Route exact path="/" component={Landing} />
    </Switch>

    
   </div>
  );
 }
}
export default connect()(App);