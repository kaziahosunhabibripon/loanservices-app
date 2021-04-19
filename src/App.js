import './App.css';
import React, { createContext, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Home/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ManageServices from './Components/Dashboard/ManageServices/ManageServices';

import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import LoanFunction from './Components/Home/LoanFunction/LoanFunction';
import LoanForm from './Components/Home/LoanForm/LoanForm';
import Book from './Components/Home/Book/Book';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/book/:name">
            <Book></Book>
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
