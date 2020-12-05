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

const renderRoute = (props) => {
  return pages.map((  {name, path, Component, exact, meta}) => 
    <GuardedRoute  key={name} meta={meta} path={path} exact>{<Component name={name}/>}</GuardedRoute>
  )
}

const  Routes = (prop) => {

  const getIsLoggedIn = useSelector(state => state.user.is_logged)

  // middleware
  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {

      prop.checkAuth()

      if (getIsLoggedIn) {
        next();
      }
      next.redirect('/login');
    } else {
      if (getIsLoggedIn) {
        next.redirect('/entries');
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
