import React, {useEffect} from "react";
import './App.css';
import TopNav from './top-nav/TopNav';
import Footer from './footer/Footer';
import Routing from "./routing/Routing";
import {BrowserRouter as Router } from 'react-router-dom';
import './common-style/index.scss'
import LogIn from './component/log-in/LogIn'
import './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// const store = createStore('counterReducer')


function App() {
  const currentPath = window.location.pathname;



  return (
    <div>
         <Router>
            <TopNav/>
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <div style={{margin: '68px 0'}}>
              <Routing/>
            </div>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
