import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/main/Home";
import Menu from "./components/layout/Menu";

export default () => {
  return (
    <React.Fragment>
      <Menu />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </React.Fragment>
  );
};
