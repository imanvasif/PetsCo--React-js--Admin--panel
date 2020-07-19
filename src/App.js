import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard  from "./Pages/Dashboard";
import Authenticated  from "./Components/Authenticated";

function App(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Authenticated>
          <Dashboard />
        </Authenticated>
      </Route>
      <Route exact path="/login">
        <Authenticated nonAuthenticated={true}>
          <Login />
        </Authenticated>
      </Route>
      <Route exact path="*" render={() => "404 Not Found!"} />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return { stat: state };
};

export default connect(mapStateToProps)(App);
