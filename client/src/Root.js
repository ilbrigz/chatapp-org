import React from "react";

import App from "./App";
import { AuthProvider } from "./context/authContext";

const Root = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

export default Root;
