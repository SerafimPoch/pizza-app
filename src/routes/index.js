import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import Login from "../containers/Login/";
import Reg from "../containers/Reg/";
import PizzaList from "../containers/PizzaList/";
import UserInfo from "../containers/UserInfo/";
import createHistory from "history/createBrowserHistory";

export const history = createHistory({ basename: "/pizza-app" });

export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/pizza-list" component={PizzaList} />
      <Route exact path="/reg" component={Reg} />
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/user" component={UserInfo} />
    </Switch>
  </ConnectedRouter>
);
