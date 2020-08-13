import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from 'utilities';

const PublicRoute = ({ component: Component, type, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => !getToken() ? <Component {...props} page={type} auth={true} /> : <Redirect to={{ pathname: '/' }} />}
    />
  )
}

export default PublicRoute