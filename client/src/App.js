import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {ThemeProvider} from "styled-components";
// import io from "socket.io-client";
import MainRouter from "./MainRouter";
import {theme} from "./theme";
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

class App extends Component {
  // componentDidMount = () => {
  //   socket.on("connect", data => {
  //     console.log("connected to the server");
  //   });
  //   socket.on("a", data => {
  //     console.log(data);
  //   });
  // };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
