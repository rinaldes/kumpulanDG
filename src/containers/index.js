import React from "react";
import { WebContainer } from "components"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PublicRoute, PrivateRoute } from 'configs';

const AppWeb = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path="/"><WebContainer page="home" /></Route>
            <Route path="/works"><WebContainer page="works" /></Route>
            <Route path="/about"><WebContainer page="about" /></Route>
            <Route path="/contact"><WebContainer page="contact" /></Route>
            <PublicRoute path="/login" component={WebContainer} type="login"></PublicRoute>
            <PublicRoute path="/register" component={WebContainer} type="register"></PublicRoute>
            <PublicRoute path="/forgot" component={WebContainer} type="forgot"></PublicRoute>
            <PrivateRoute path="/profile" type="profile"><WebContainer page="profile" /></PrivateRoute>
            <PrivateRoute path="/setting" type="setting"><WebContainer page="setting" /></PrivateRoute>
            <PrivateRoute path="/upload"><WebContainer page="upload" /></PrivateRoute>
            <PrivateRoute path="/logout" type="logout"></PrivateRoute>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppWeb