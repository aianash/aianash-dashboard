import React from 'react';
import { IndexRedirect, Route } from 'react-router';

import {
  App,
  Dashboard,
  LoginOrRegister,
  NotFound
} from 'containers'

// [TODO] move to containers
import {
  Behavior,
  Predict,
  ABTest
} from 'containers';

export default (store) => {
  const requireLogin = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState()
    if(!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState()
    if(authenticated) {
      replace({
        pathname: '/'
      })
    }
    callback()
  };

  return (
    <Route path="/" component={App}>
      <Route path="dashboard" component={Dashboard}>
        <IndexRedirect to="behavior"/>
        <Route path="behavior" component={Behavior}/>
        <Route path="predict" component={Predict}/>
        <Route path="abtest" component={ABTest}/>
      </Route>
      <Route path="login" component={LoginOrRegister}/>
    </Route>
  )
}