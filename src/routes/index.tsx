import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ResetPassword from '../pages/ResetPassword';

import CustomRoute from './CustomRoute';
import ForgotPassword from '../pages/ForgotPassword';
import Profile from '../components/Profile';

const routes: React.FC = () => {
  return (
    <Switch>
      <CustomRoute exact path="/" component={SignIn} />
      <CustomRoute path="/signUp" component={SignUp} />
      <CustomRoute path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Dashboard} isPrivate />
      <Route path="/dashboard" component={Profile} isPrivate />
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    </Switch>
  );
};

export default routes;
