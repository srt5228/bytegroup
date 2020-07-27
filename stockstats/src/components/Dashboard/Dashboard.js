import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashTable from './DashTable';
import '../../assets/css/dashboard.css';

export default function Dashboard() {
    //setting state where results will be stored
    const [results, setResults] = useState([]);
    //Hook equivelant to componentDidMount - pass empty array to specify run and cleanup
    //limited to a single time
    //This Effect gets top 10 talked about stocks for current date
    useEffect(() => {
        axios.get("https://stocknewsapi.com/api/v1/top-mention?&date=last7days&token=l2w6rgubmopubobdtkod8ctu2bhe6fxzhwdgsn6r").then((res) => {
        console.log(res);
        let api = res.data.data.all;
        setResults(api);
        });}, []);
    console.log(results);




    return (
        <section className="container">

            <h1>This Week's Top Stocks By Total Mentions</h1>

            <DashTable resultset = {results} />

        </section>
    );


}