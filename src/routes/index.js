import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Login from '../containers/Login/';
import Reg from '../containers/Reg/';
import PizzaList from '../containers/PizzaList/';
import UserInfo from '../containers/UserInfo/';
import createHistory from 'history/createBrowserHistory';
import CatchError from '../containers/CatchErrors';

export const history = createHistory({ basename: '/pizza-app' });

export default () => (
  <ConnectedRouter history={history}>
    <CatchError>
      <Header />
      <Route exact path="/pizza-list" component={PizzaList} />
      <Route exact path="/reg" component={Reg} />
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/user" component={UserInfo} />
      <Footer />
    </CatchError>
  </ConnectedRouter>
);
