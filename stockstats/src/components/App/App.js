import React from 'react';
import { Router } from '@reach/router';
import Dashboard from '../Dashboard/Dashboard';
import Search from '../Search/Search';
import ResponsiveNavigation from '../ResponsiveNavigation/ResponsiveNavigation';
import logo from '../../assets/logo.svg';
import SearchComponent from '../Chart/SearchComponent';
import Chart from '../Chart/Chart';


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
    },
    {
      text: 'Judith Search',
      path: '/Judith',
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
        <Chart path="/Judith" />
      </Router>

    </div>

  );
}

export default App;
