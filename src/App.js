import React, {useEffect} from "react";
import './App.css';
import TopNav from './top-nav/TopNav';
import Footer from './footer/Footer';
import Routing from "./routing/Routing";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './common-style/index.scss'
import LogIn from './component/log-in/LogIn'

function App() {
  useEffect(() =>
  console.log("=========", currentPath)
  )

  const currentPath = window.location.pathname;

  return (
    <div>
         <Router>
            <TopNav/>
            <div style={{margin: '62px 0'}}>
              <Routing/>
            </div>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
