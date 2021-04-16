import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/dashboard">
            <Dashboard></Dashboard>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
