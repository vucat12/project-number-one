import React from "react";
import './App.css';
import TopNav from './top-nav/TopNav';
import Routing from "./routing/Routing";
import {BrowserRouter as Router} from 'react-router-dom'
import './common-style/index.scss'

function App() {
  return (
    <div>
        <Router>
          <TopNav/>
          <Routing/>
        </Router>
    </div>
   
  );
}

export default App;
