import React from 'react';
import Chart from './StockChart';

const StockPage = props => {
    console.log(props.location.state)
    const info = props.location.state
    return (
        <div>
            <h1>{info.ticker}</h1>
            <h2>{info.name}</h2>
            <Chart info={info}/> 
            <h1>News Feed Here</h1>
            
        </div>
    );
};

export default StockPage;
