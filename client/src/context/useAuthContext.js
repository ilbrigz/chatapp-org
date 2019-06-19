import React, { useContext } from "react";
import { AuthContext } from "./authContext";

import axios from "axios";

const useAuthContext = () => {
  const [state, setState] = useContext(AuthContext);

  function setAuthUser(user) {
    axios.defaults.headers.common["payload-verification-id"] =
      localStorage.verificationId;
    setState(state => ({ ...state, authUser: user }));
  }

  function unSetAuthUser(history) {
    delete axios.defaults.headers.common["payload-verification-id"];
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("verificationId");
    setState(state => ({
      ...state,
      authUser: {
        userName: "Guest",
        userId: null,
        auth: false
      }
    }));
    if (history) history.push("/signIn");
  }
  return {
    authUser: state.authUser,
    setAuthUser,
    unSetAuthUser
  };
};

export default useAuthContext;
