import React, { useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Empty } from "antd";
import Loadable from "react-loadable";
import styled from "styled-components";
import ThemeContext from "./context/themeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import PageLoader from "./components/common/PageLoader";
import themeReducer from "./context/themeReducer";
import { UPDATE_MENU } from "./context/types";
import ReactResizeDetector from "react-resize-detector";

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

const StyledMainLayout = styled(Layout)`
  margin-left: ${props => (props.menu ? "260px" : "80px")};
  @media screen and (max-width: 576px) {
    margin-left: 0 !important;
  }
`;

const DarkOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #282c34;
  opacity: 0.7;
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
  }
`;

export default () => {
  const [state, dispatch] = useReducer(themeReducer, { menuOpened: true });

  const updateMenu = () => dispatch({ type: UPDATE_MENU });

  const onResize = width => {
    if (
      (state.menuOpened && width < 992) ||
      (!state.menuOpened && width > 992)
    ) {
      updateMenu();
    }
  };

  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={AsyncHome} exact />
        <Route path="/signUp" component={AsyncSign} exact />
        <Route path="/signIn" component={AsyncSign} exact />
        <Route
          path="/dashboard"
          render={props => (
            <ThemeContext.Provider
              value={{
                menuOpened: state.menuOpened,
                updateMenuState: updateMenu
              }}
            >
              <Layout>
                <Sidebar {...props} />
                <StyledMainLayout menu={state.menuOpened ? 1 : 0}>
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
                    <Route
                      component={() => (
                        <Empty
                          description="404 Page not Found"
                          style={{ marginTop: 200, minHeight: "60vh" }}
                        />
                      )}
                    />
                  </Switch>
                  {state.menuOpened && (
                    <DarkOverlay onClick={() => updateMenu()} />
                  )}
                  <Footer />
                </StyledMainLayout>
              </Layout>
            </ThemeContext.Provider>
          )}
        />
        <Route
          component={() => (
            <Empty
              description="404 Page not Found"
              style={{ paddingTop: 200 }}
            />
          )}
        />
      </Switch>
      <ReactResizeDetector
        handleWidth
        onResize={onResize}
        refreshMode="throttle"
      />
    </React.Fragment>
  );
};
