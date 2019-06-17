import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = props => {
  // Initial values are obtained from the props
  const defaultAuthUser = {
    userName: "Guest",
    userId: null,
    auth: false
  };

  const { authUser: initialAuthUsers = defaultAuthUser, children } = props;

  // Use State to keep the values
  const [authUser, setAuthUser] = useState(initialAuthUsers);

  // Make the context object:
  const authContext = {
    authUser,
    setAuthUser
  };

  // pass the value in provider and return
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const { Consumer: AuthContextConsumer } = AuthContext;
