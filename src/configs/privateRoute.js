import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from 'utilities';
import { Modal } from 'antd';

export const PrivateRoute = ({ componet: Component, type, ...rest }) => {
  switch (type) {
    case "logout":
      localStorage.removeItem("token")
      Modal.success({
        content: 'Anda telah Logout..',
      })
      setTimeout(() => {
        window.location.replace("/")
      }, 150);
      break;
    default:
      return (
        <Route
          {...rest}
          render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
      )
      break;
  }
}