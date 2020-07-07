import React from 'react';
import { Router } from '@reach/router';
import Dashboard from '../Dashboard/Dashboard';
import Search from '../Search/Search';
import ResponsiveNavigation from '../ResponsiveNavigation/ResponsiveNavigation';
import logo from '../../assets/logo.svg';




function App() {
    const navLinks = [
      {
        text: 'Market Pulse',
        path: '/',
        icon: 'ion-ios-pulse'
      },
      {
        text: 'Stock Search',
        path: '/Search',
        icon: 'ion-ios-search'
      }
    ]
    return (

      <div className='app'>
        <ResponsiveNavigation
          navLinks={navLinks}
          logo={logo}
        />
        <Router>
          <Dashboard path="/" />
          <Search path="/Search" />
        </Router>

      </div>



    );
}

export default App;
