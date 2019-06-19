import React, { createContext, useState } from "react";

const AuthContext = createContext([{}, () => {}]);

const AuthProvider = props => {
  const [state, setState] = useState({
    authUser: {
      userName: "Guest",
      userId: null,
      auth: false
    }
  });

  return (
    <AuthContext.Provider value={[state, setState]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
