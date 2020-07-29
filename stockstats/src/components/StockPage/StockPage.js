import React from 'react';
import Chart from '../Chart/Chart';





const StockPage = props => {
    console.log(props.location.state)
    const info = props.location.state
    return (
        <div>
            <h1>{info.ticker}</h1>
            <h2>{info.name}</h2>
            <img src="https://www.perkinselearning.org/sites/elearning.perkinsdev1.org/files/Amazon_1.png"></img>
            <h1>News Feed Here</h1>
            {/* <StockPageChart ticker={info.ticker}/> */}
        </div>
    );
};

export default StockPage;