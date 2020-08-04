import React, { useState, useEffect } from 'react';
import Chart from '../Chart/Chart';
import axios from 'axios';
import TickerNewsContainer from '../TickerNews/TickerNewsContainer';





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
            <img src="https://www.perkinselearning.org/sites/elearning.perkinsdev1.org/files/Amazon_1.png"></img>
            <h1>News Feed Here</h1>
            <TickerNewsContainer news={Tickernews}/>

        </div>
    );
};

export default StockPage;