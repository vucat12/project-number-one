import React, {useEffect} from "react";
import './App.css';
import TopNav from './top-nav/TopNav';
import Footer from './footer/Footer';
import Routing from "./routing/Routing";
import {BrowserRouter as Router} from 'react-router-dom'
import './common-style/index.scss'

function App() {
  return (
    <div>
        <Router>
          <TopNav/>
          <div style={{paddingTop: '62px'}}>
            <Routing/>
          </div>
          <Footer/>
        </Router>
    </div>
   
  );
}

export default App;
