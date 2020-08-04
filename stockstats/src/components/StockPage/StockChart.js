import React, { Component } from 'react';
import { HighChartsComponent } from '../Chart/HighChartsComponent';
import Highcharts from 'highcharts'
import API_Service from './API_Service'
import '../Chart/Chart.css'


class Chart extends Component {
    constructor(props) {
        super(props);

        this.a = new API_Service();

        this.state = {
            showOutput: false,
            ticker: this.props.info.ticker,

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
                    title: { text: '' },
                    minTickInterval: 24 * 3600 * 1000, //ensures no hours display between dates 
                    labels: { //changes the format of the date axis
                        formatter: function () {
                            return Highcharts.dateFormat("%b %e", this.value);
                        }
                    }
                },
                yAxis: {
                    title: { text: 'Article volume' }
                },
                legend: { enabled: false },
                caption: {
                    text: 'Click and drag inside chart to zoom.',
                    x: 50 //aligns the caption with the y axis
                },
            }
        };
    };

    componentDidMount() {
        let dataSeries = []
        let ticks = []
        let tickers = []

        this.a.importData(this.props.info.ticker) //this returns a promise
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

                this.state.options.series[0].data = dataSeries

                this.setState({ data: dataSeries })

                return response
            })
            .catch((error) => {
                console.log("Please enter a valid ticker. " + error);
            });
    };


    render() {
        return (
            <HighChartsComponent options={this.state.options} />
        );
    }
};


export default Chart;
