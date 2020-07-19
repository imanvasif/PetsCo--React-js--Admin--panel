import React from "react";
import { connect } from "react-redux";
import { getUserAuthStatus } from "../redux/reducers/userReducer";
import { Redirect } from "react-router-dom";

const Authenticated = ({ authStatus, nonAuthenticated, ...props }) => {
  if (nonAuthenticated) {
    if (authStatus) {
      return <Redirect to="/" />;
    } else {
      return props.children;
    }
  } else {
    if (authStatus) {
      return props.children;
    } else {
      return <Redirect to="login" />;
    }
  }
};

const mapStateToProps = (state) => ({
  authStatus: getUserAuthStatus(state),
});

export default connect(mapStateToProps)(Authenticated);
