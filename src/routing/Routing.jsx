import React from "react";
import {Switch,Route,Redirect } from "react-router-dom"
import HomePage from "../component/home-page/HomePage";
import ViewChart from "../component/view-chart/ViewChart";
import LogIn from "../component/log-in/LogIn"
import TableEdit from "../component/table-edit/TableEdit";

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
            <TableEdit/>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Redirect to="/home" />
    </Switch>
  );
}

export default Routing;
