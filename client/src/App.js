import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import io from "socket.io-client";
import { theme } from "./theme";
import useAuthContext from "./context/useAuthContext";
// const socket = io("http://localhost:8080");

const App = () => {
  const { authUser, setAuthUser, unSetAuthUser } = useAuthContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { verificationId, userId, userName } = localStorage;
      if (verificationId) {
        setAuthUser({
          userName,
          userId,
          auth: true
        });
      } else {
        unSetAuthUser();
      }
    }
  }, []);
  console.log(authUser);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRouter />
        <button
          onClick={() =>
            setAuthUser({ auth: true, userId: 1, userName: "gwapo" })
          }
        >
          Gwapo
        </button>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
