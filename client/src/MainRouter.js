import React, { useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Loadable from "react-loadable";
import ThemeContext from "./context/themeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import PageLoader from "./components/common/PageLoader";
import themeReducer from "./context/themeReducer";
import { UPDATE_MENU } from "./context/types";

const AsyncHome = Loadable({
  loader: () => import("./components/main/Home"),
  loading: PageLoader
});
const AsyncSign = Loadable({
  loader: () => import("./components/sign/Sign"),
  loading: PageLoader
});
const AsyncDashboardHome = Loadable({
  loader: () => import("./components/dashboard/DashboardHome/DashboardHome"),
  loading: PageLoader
});
const AsyncActiveRooms = Loadable({
  loader: () => import("./components/dashboard/ActiveRooms/ActiveRooms"),
  loading: PageLoader
});

export default () => {
  const [state, dispatch] = useReducer(themeReducer, { menuState: "opened" });

  const updateMenu = payload =>
    dispatch({
      type: UPDATE_MENU,
      payload
    });

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={AsyncHome} exact />
        <Route path="/signUp" component={AsyncSign} exact />
        <Route path="/signIn" component={AsyncSign} exact />
      </Switch>
      <Route
        path="/dashboard"
        render={props => (
          <ThemeContext.Provider
            value={{
              menuState: state.menuState,
              updateMenuState: updateMenu
            }}
          >
            <Layout>
              <Sidebar {...props} />
              <Layout
                style={{
                  marginLeft:
                    state.menuState === "opened"
                      ? "260px"
                      : state.menuState === "closed"
                        ? "80px"
                        : "0"
                }}
              >
                <Header />
                <Switch>
                  <Route
                    path="/dashboard"
                    exact
                    component={AsyncDashboardHome}
                  />
                  <Route
                    path="/dashboard/activeRooms"
                    component={AsyncActiveRooms}
                  />
                  {/*<Route path="/error" component={AsyncNotFound} />*/}
                  {/*<Route component={AsyncNotFound} />*/}
                </Switch>
                <Footer />
              </Layout>
            </Layout>
          </ThemeContext.Provider>
        )}
      />
    </React.Fragment>
  );
};
