import React, {useEffect} from "react";
import './App.css';
import TopNav from './top-nav/TopNav';
import Footer from './footer/Footer';
import Routing from "./routing/Routing";
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './common-style/index.scss'
import LogIn from './component/log-in/LogIn'

function App() {
  const autothen = true;
  return (
    <div>

      {autothen ? 
         <Router>

         {/* If without autothen move to log in */}

         <div>
           <TopNav/>
           <div style={{margin: '62px 0'}}>
             <Routing/>
           </div>
           <Footer/>
         </div>
        </Router>
        :
        <Router>
          <TopNav/>
          <div style={{paddingTop: '62px'}}>
            <Routing/>
          </div>
          <Footer/>
        </Router>
      
    
    
      }
     
    </div>
   
  );
}

export default App;
