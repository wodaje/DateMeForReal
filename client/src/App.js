import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "./App.css";
import Header from "./components/Header/Header";
import UserCards from "./components/Cards/Cards";
import UpdateUser from "./components/Profile/Profile";
import Filter from "./components/Filter/Filter";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/profile">
            <UpdateUser />
          </Route>
          <Route path="/filter">
            <Filter />
          </Route>
          <Route path="/">
            <UserCards />
          </Route>
        </Switch>
      </Router>
      <AmplifySignOut />
    </div>
  );
};

export default App;
