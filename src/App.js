import React from "react";
import './App.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import TopNav from './top-nav/TopNav';
import Routing from "./routing/Routing";
import {BrowserRouter as Router} from 'react-router-dom'
import './common-style/index.scss'

function App() {
  return (
    <div>
        <TopNav/>
        <Router>
          <Routing/>
        </Router>
    </div>
   
  );
}

export default App;
