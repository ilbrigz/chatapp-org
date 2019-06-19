import React from "react";
import { Route, Redirect } from "react-router-dom";

import useAuthContext from "./../../context/useAuthContext";

const IsLoggedIn = ({ component: Component, ...rest }) => {
  const { authUser } = useAuthContext();
  return (
    <Route
      auth={authUser}
      {...rest}
      render={props =>
        !authUser.auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/dashBoard" }} />
        )
      }
    />
  );
};

export default IsLoggedIn;
