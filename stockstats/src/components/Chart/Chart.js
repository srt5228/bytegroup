import React, { Component } from 'react';
import { HighChartsComponent } from './HighChartsComponent';
import SearchComponent from './SearchComponent';
import API_Service from './API_Service'
import Moment from 'react-moment';
import './Chart.css'


class Chart extends Component {
    constructor(props) {
        super(props);

        this.a = new API_Service();

        this.state = {
            showOutput: false,
            ticker: '',

            options: {
                title: { text: 'In the News' },
                chart: {
                    inverted: false,
                    style: { fontFamily: "Circular, sans-serif" },
                    zoomType: 'x'
                },
                series: [{
                    type: 'spline',
                    name: 'Ticker',
                    data: []
                }],
                xAxis: {
                    type: 'datetime',
                    title: { text: 'date' }
                    // ,dateTimeLabelFormats: {
                    //     day: '%b %e',
                    //   }
                    // ,min: 1577854800000
                },
                yAxis: {
                    title: { text: 'Article volume' }
                },
                // tooltip: {
                //     formatter: function () {
                //         return 'The value for <b>' + this.x +
                //             '</b> is <b>' + this.y + '</b>';
                //     }
                // },
                // rangeSelector: {
                //     selected: 1
                // },
                legend: { enabled: false },
                caption: {
                    text: 'Click and drag inside chart to zoom.',
                    x: 50 //aligns the caption with the y axis
                },
            }
        };
    }


    fetchResults(search) {
        let dataSeries = []
        let ticks = []
        let tickers = []

        this.a.importData(search) //this returns a promise
            .then((response) => { //this returns an array of objects

                let i = 0;
                let data = response.data
                var counts = {}, value;
                let distinctValues = [];

                for (i = 0; i < data.length; i++) {

                    //shorten the date field to remove the time
                    value = data[i].date.substring(0, 16);

                    if (!distinctValues.includes(value)) {
                        distinctValues.push(value)
                    }

                    //get count of articles per day
                    if (typeof counts[value] === "undefined") {
                        counts[value] = 1;
                    } else {
                        counts[value]++;
                    }

                    //create the data series with the date and the count of articles
                    dataSeries.push([Date.parse(data[i].date), counts[value]])
                    dataSeries.sort()


                    ticks = data[i].tickers
                    for (let t = 0; t < ticks.length; t++) {
                        tickers.push(ticks[t]);
                    }
                }
                // console.log(distinctValues)
                // console.log(counts)
                // console.log(dataSeries)

                // let distinctTickers = [...new Set(tickers)]

                this.state.options.series[0].data = dataSeries
                // this.state.options.xAxis.categories = distinctTickers

                this.setState({
                    ticker: search,
                    data: dataSeries
                    //categories: distinctTickers
                })
                console.log(this.state.options)
                return response
            })
            .catch((error) => {
                console.log("Please enter a valid ticker. " + error);
            });
    };


    handleSelect = (e) => {
        //search ticker on pressing enter
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchString = e.target.value;
            console.log(searchString)
            this.fetchResults(searchString);
            //hide chart outline until results are fetched
            this.setState({ showOutput: true })
        }
    };


    render() {
        // console.log(this.state.options)
        return (
            <div>
                <br></br>
                <br></br>
                <SearchComponent handleSelect={this.handleSelect} />
                <br></br>
                {this.state.ticker.toUpperCase()}
                {
                    this.state.showOutput &&
                    <HighChartsComponent options={this.state.options} />
                }

            </div>
        );
    }
};


export default Chart;
