import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/main/Home";
// import Menu from "./components/layout/Menu";
import Sign from "./components/sign/Sign";

export default () => {
  return (
    <React.Fragment>
      {/*<Menu />*/}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signUp" component={Sign} exact />
        <Route path="/signIn" component={Sign} exact />
      </Switch>
    </React.Fragment>
  );
};
