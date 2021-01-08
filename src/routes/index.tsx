import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

import CustomRoute from './CustomRoute';

const routes: React.FC = () => {
  return (
    <Switch>
      <CustomRoute exact path="/" component={SignIn} />
      <CustomRoute path="/signUp" component={SignUp} />
      <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default routes;
