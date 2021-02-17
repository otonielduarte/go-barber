import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ResetPassword from '../pages/ResetPassword';

import CustomRoute from './CustomRoute';
import ForgotPassword from '../pages/ForgotPassword';
import { useAuth } from '../hooks/auth';

const routes: React.FC = () => {
  return (
    <Switch>
      <CustomRoute exact path="/" component={SignIn} />
      <CustomRoute path="/signUp" component={SignUp} />
      <CustomRoute path="/forgot-password" component={ForgotPassword} />
      <Route path="/logout" component={Logout} />
      <Route path="/reset-password" component={ResetPassword} />
      <CustomRoute path="/dashboard" component={Dashboard} isPrivate />
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    </Switch>
  );
};

const Logout: React.FC = () => {
  const { signOut } = useAuth();
  const history = useHistory();
  useEffect(() => {
    signOut();
    history.push('/');
  }, [signOut, history]);
  return <></>;
};

export default routes;
