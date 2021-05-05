import React, { useEffect } from "react";
import {Switch,Route,Redirect } from "react-router-dom"
import HomePage from "../component/home-page/HomePage";
import ViewChart from "../component/view-chart/ViewChart";
import LogIn from "../component/log-in/LogIn"
import ViewPost from "../component/home-page/ViewPost/ViewPost";
import { useLocation } from "react-router";

function Routing() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (


    <Switch>
          <Route path="/home">
             <HomePage /> 
          </Route>
          <Route path="/view">
            <ViewChart/>
          </Route>
          <Route path="/edit">
            <div style={{textAlign: 'center', padding: '32px', textTransform: 'uppercase', color: 'red'}}>
             <h2>It will be coming soon.</h2> 
            </div>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/view-post">
            <ViewPost/>
          </Route>
          <Redirect to="/home" />
    </Switch>
  );
}

export default Routing;
