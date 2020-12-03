import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { pages } from '../commons/data'
import { GuardProvider, GuardedRoute } from 'react-router-guards';

const getIsLoggedIn = true;

const requireLogin = (to, from, next) => {


  if (to.meta.auth) {
   
    if (getIsLoggedIn) {
      next();
    }
    next.redirect('/login');
  } else {
    next();
  }
};


const renderRoute = (props) => {
  // return (
  return pages.map(({ path, Component, exact, meta}) => 
    <GuardedRoute  key={pages.name} meta={meta} path={path} exact>{<Component />}</GuardedRoute>
  )
}

const  Routes = (props) => {
  return (
    <>
      <GuardProvider guards={[requireLogin]}>
         <Switch children={renderRoute(props)} />
     </GuardProvider><GuardProvider></GuardProvider>
    </>
  )
}

export default Routes
