import React from 'react';

import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface CustomRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const CustomRoute: React.FC<CustomRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === !!user ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        );
      }}
    />
  );
};

export default CustomRoute;
