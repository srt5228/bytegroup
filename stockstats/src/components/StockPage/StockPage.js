<<<<<<< HEAD
import React from 'react';
import Chart from './StockChart';
=======
import React, { useState, useEffect } from 'react';
import Chart from '../Chart/Chart';
import axios from 'axios';




>>>>>>> 1272f7606d1fbb9b2ae3c9cbbcc75ec4c47ec025

const StockPage = props => {
    console.log(props)
    const info = props.location.state
    const [Tickernews, setTickerNews] = useState([]);



    useEffect(() => {
        axios.get(`https://stocknewsapi.com/api/v1?tickers=${info.ticker}&items=50&date=last7days&token=l2w6rgubmopubobdtkod8ctu2bhe6fxzhwdgsn6r`).then((res) => {
        let tickernews = res.data.data;
        setTickerNews(tickernews);
        });}, [info.ticker]);
    console.log(Tickernews)

    return (
        <div>
            <h1>{info.ticker}</h1>
            <h2>{info.name}</h2>
            <Chart info={info}/> 
            <h1>News Feed Here</h1>
<<<<<<< HEAD
            
=======

>>>>>>> 1272f7606d1fbb9b2ae3c9cbbcc75ec4c47ec025
        </div>
    );
};

export default StockPage;
