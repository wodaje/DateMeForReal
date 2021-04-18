import React from "react";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Header from "./components/Header/Header";
import UserCards from "./components/Cards/Cards";
import UpdateUser from "./components/Profile/Profile";
import Filter from "./components/Filter/Filter";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div display>
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
      <Footer />
    </div>
  );
};

export default withAuthenticator(App);
