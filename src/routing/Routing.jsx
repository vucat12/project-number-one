import React from "react";
import {Switch,Route} from "react-router-dom"
import HomePage from "../component/home-page/HomePage";

function Routing() {
  return (
    <Switch>
          <Route path="/home">
            <HomePage/>
          </Route>
    </Switch>
   
  );
}

export default Routing;
