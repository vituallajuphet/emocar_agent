import React, {useState, useEffect} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Switch,
  Route,
} from "react-router-dom";
import { pages } from '../commons/data'
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import {useSelector} from "react-redux"
import { Redirect } from "react-router-dom";
import {checkAuth} from "../store/actions/UserAction"
import {connect} from "react-redux"
import { PageNotFound } from "../pages"; 

const renderRoute = (props) => {

  let allRoutes = pages.map((  {name, path, Component, exact, meta}) => 
    <GuardedRoute  key={name} meta={meta} path={path} exact>{<Component name={name}/>}</GuardedRoute>
  );

  const Page404 = <GuardedRoute meta={{meta:{ auth: false, pagename:404 }}}>{<PageNotFound />}</GuardedRoute>
  const redirect = <GuardedRoute path="/" exact meta={{meta:{ auth: false }}}>{<Redirect to="/entries"/>}</GuardedRoute>
  

  allRoutes = [...allRoutes, redirect, Page404];

  return allRoutes;
}

const  Routes = (prop) => {

  const getIsLoggedIn = useSelector(state => state.user.is_logged)

  // middleware
  const requireLogin = (to, from, next) => {

    prop.checkAuth()

    if (to.meta.auth) {
      if (getIsLoggedIn) {
        next();
      }
      next.redirect('/login');
    } else {
      if (getIsLoggedIn) {
        next.redirect('/');
      }
      next();
    }
};

  return (
    <>
        <GuardProvider guards={[requireLogin]}>
          <AnimatePresence>
                <Switch children={renderRoute(prop)} />
          </AnimatePresence>
        </GuardProvider>
    </>
  )
}

export default connect(null, {checkAuth})(Routes);
