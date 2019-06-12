import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import Loadable from "react-loadable";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import PageLoader from "./components/common/PageLoader";

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
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={AsyncHome} exact />
        <Route path="/signUp" component={AsyncSign} exact />
        <Route path="/signIn" component={AsyncSign} exact />
      </Switch>
      <Route
        path="/dashboard"
        render={() => (
          <Layout>
            <Sidebar />
            <Layout style={{ minHeight: "100vh" }}>
              <Header />
              <Switch>
                <Route path="/dashboard" exact component={AsyncDashboardHome} />
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
        )}
      />
    </React.Fragment>
  );
};
