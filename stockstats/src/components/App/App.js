import React from 'react';
import { Router } from '@reach/router';
import Dashboard from '../Dashboard/Dashboard';
import Search from '../Search/Search';
import ResponsiveNavigation from '../ResponsiveNavigation/ResponsiveNavigation';
import logo from '../../assets/StockStats.svg';
import SearchComponent from '../Chart/SearchComponent';
import Chart from '../Chart/Chart';
import StockPage from '../StockPage/StockPage';


function App() {
  const navLinks = [
    {
      text: 'Market Pulse',
      path: '/',
      icon: 'ion-ios-pulse'
    },
    {
      text: 'Ticker Search',
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
        <StockPage path="/Search" />
        <Chart path="/Judith" />
      </Router>

    </div>

  );
}

export default App;
