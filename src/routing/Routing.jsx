import React, { useEffect } from "react";
import {Switch,Route,Redirect } from "react-router-dom"
import HomePage from "../component/home-page/HomePage";
import SellerPage from "../component/seller-page/SellerPage";
import LogIn from "../component/log-in/LogIn"
import ViewPost from "../component/home-page/ViewPost/ViewPost";
import { useLocation } from "react-router";
import BuyerPage from "../component/buyer-page/BuyerPage";
import LessorPage from "../component/lessor-page/LessorPage";
import TenantPage from "../component/tenant-page/TenantPage";
import ViewChartSeller from "../component/view-chart-seller/ViewChartSeller";

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
          <Route path="/seller-page">
            <SellerPage/>
          </Route>
          <Route path="/buyer-page">
            <BuyerPage/>
          </Route>
          <Route path="/lessor-page">
            <LessorPage/>
          </Route>
          <Route path="/tenant-page">
            <TenantPage/>
          </Route>
          <Route path="/edit">
            <div style={{textAlign: 'center', padding: '32px', textTransform: 'uppercase', color: 'red'}}>
             <h2>It will be coming soon.</h2> 
            </div>
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/view-post">
            <ViewPost/>
          </Route>
          <Route path="/view-chart-seller">
            <ViewChartSeller/>
          </Route>
          <Redirect to="/home" />
    </Switch>
  );
}

export default Routing;
