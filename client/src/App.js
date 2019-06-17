import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import io from "socket.io-client";
import MainRouter from "./MainRouter";
import { theme } from "./theme";
import { AuthContextProvider } from "./context/authContext";

// const socket = io("http://localhost:8080");

// // Check for token
// if (localStorage.verificationId && typeof window !== "undefined") {
//   // Set auth token header auth
//   console.log(localStorage.verificationId);
//   setDefaultHeader(localStorage.verificationId);
//   // Decode token and get user info and exp
//   // const decoded = jwt_decode(localStorage.jwtToken);
//   // Set user and isAuthenticated
//   store.dispatch({
//     type: SET_USER,
//     payload: { userId: localStorage.userId, userName: localStorage.userName }
//   });
// }

const App = () => {
  // componentDidMount = () => {
  //   socket.on("connect", data => {
  //     console.log("connected to the server");
  //   });
  //   socket.on("a", data => {
  //     console.log(data);
  //   });
  // };
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
