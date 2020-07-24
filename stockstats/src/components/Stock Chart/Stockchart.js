import React, { Component } from 'react';
import { HighChartsComponent } from './HighChartComponent';
import Highcharts from 'highcharts'
import TickerInfoComponent from './TickerInfoComponent'
import SearchComponent from '../Chart/SearchComponent'


class StockChart extends Component {
    constructor(props) {
        super(props);

        this.f = new FundService();

        this.array = ["AAPL", "AMZN", "MSFT", "WBA", "PFE", "NKE", "UAL", "HLT", "TGT", "JPM", "GOOG"];

        this.state = {
            showOutput: this.props.showOutput,
            ticker: this.props.ticker,

            name: this.props.name,
            sector: this.props.sector,
            industry: this.props.industry,

            options: {
                title: { text: 'Time Series' },
                chart: {
                    inverted: false,
                    style: { fontFamily: "Circular, sans-serif" },
                    zoomType: 'x'
                },
                series: [
                    {
                        type: 'spline',
                        name: 'Close Price',
                        data: this.props.data
                    }
                ],
                xAxis: {
                    type: 'datetime',
                    title: { text: 'Date' },
                },
                yAxis: {
                    title: { text: 'Close Price' },
                    type: ''
                },
                legend: { enabled: true },
                caption: {
                    text: 'Click and drag inside chart to zoom.',
                    x: 50 //aligns the caption with the y axis
                },
            }
        };
    }

    fetchResults(search) {
        this.f.importData(search) //this returns a promise
            .then((response) => { //this returns an array of fund dictionary objects
                let responseDataOne = [];
                let symbol = '';

                //loop through the response to parse out the fields
                for (var i = 0; i < response.length; i++) {
                    //create an array of just date and close price to use as chart series data
                    responseDataOne.push([Date.parse(response[i].date), response[i].close_price]);
                    symbol = response[0].symbol;
                }

                //only update first series with API data
                let series_one = this.state.options.series[0]
                series_one.data = responseDataOne

                this.props.handleSeries(responseDataOne)
                return responseDataOne
            })
            .catch((error) => {
                console.log("Please enter a valid ticker. " + error);
            });
    };

    // getTickerInfo(symbol) {
    //     let name = '', sector = '', industry = '';
    //     this.t.importData()
    //         .then((response) => {
    //             for (var i in response) {
    //                 if (response[i].ticker === symbol) {
    //                     name = response[i].name
    //                     sector = response[i].sector
    //                     industry = response[i].industry
    //                 }
    //             }
    //             this.props.handleName(name);
    //             this.props.handleSector(sector);
    //             this.props.handleIndustry(industry);

    //             return response
    //         })
    // }

    handleSelect = (event) => {
        event.preventDefault();
        let choice = event.nativeEvent.target[event.nativeEvent.target.selectedIndex].text;

        this.props.handleTicker(choice);
        this.fetchResults(choice)
        // this.getTickerInfo(choice)

        //hide chart outline until results are fetched
        this.props.handleShowOutput();
    }

    render() {
        return (
            <div>
                <br></br>
                <FundsList handleSelect={this.handleSelect} data={this.array} />
                <SearchComponent handleSelect={this.handleSelect} />

                <br></br>
                <div id="ticker">{this.props.ticker.toUpperCase()}</div>

                {
                    this.props.showOutput &&
                    <div className="row">
                        <TickerInfoComponent
                            name={this.props.name}
                            sector={this.props.sector}
                            industry={this.props.industry} />

                        <HighChartsComponent
                            highCharts={Highcharts}
                            options={this.state.options}
                        />
                    </div>
                }

            </div>
        );
    }
};

export default StockChart;

