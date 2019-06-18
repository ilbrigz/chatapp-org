import React, { useContext } from "react";
import "./App.css";
import axios from "axios";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import io from "socket.io-client";
import { theme } from "./theme";
import { AuthContextProvider, setAuthUser } from "./context/authContext";

// const socket = io("http://localhost:8080");

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
