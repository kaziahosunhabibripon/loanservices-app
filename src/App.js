import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import {BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './Components/Dashboard/ManageServices/ManageServices';
import Book from './Components/Dashboard/Book/Book';
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
        <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/manageServices">
            <ManageServices></ManageServices>
        </Route>
        <Route path="/book">
            <Book></Book>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
