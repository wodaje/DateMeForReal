import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import './App.css';
import Header from "./components/Header/Header";
import TinderCards from "./components/Cards/Cards";
import Profile from "./components/Profile/Profile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <AmplifySignOut />
      <Router>
        <Header />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/filter">
            <h1>I am filter</h1>
          </Route>
          <Route path="/">
            <TinderCards />

          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
