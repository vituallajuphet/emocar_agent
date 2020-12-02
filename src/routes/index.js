import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import { pages } from '../commons/data'

const renderRoute = (props) => {
  // return (
  return pages.map(({ path, Component, exact}) => 
    <Route key={pages.name} path={path} exact>{<Component />}</Route>
  )
}

const  Routes = (props) => {
  return <Switch children={renderRoute(props)} />
}

export default Routes
