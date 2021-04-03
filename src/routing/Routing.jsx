import React from "react";
import {Switch,Route,Redirect } from "react-router-dom"
import HomePage from "../component/home-page/HomePage";
import ViewChart from "../component/view-chart/ViewChart";

function Routing() {
  return (
    <Switch>
          <Route path="/home">
             <HomePage /> 
          </Route>
          <Route path="/view">
            <ViewChart/>
          </Route>
          <Route path="/edit">
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit impedit amet quasi, qui placeat culpa enim voluptates, maxime corrupti modi saepe vitae assumenda odio ipsam ex sit consectetur at labore?
            </div>
          </Route>
          <Redirect to="/home" />
    </Switch>
   
  );
}

export default Routing;
