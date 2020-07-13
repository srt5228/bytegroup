import React, { Component } from 'react';
import { HighChartsComponent } from './HighChartComponent';
import Highcharts from 'highcharts'
import SearchComponent from '../search-box/SearchComponent';



class Chart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            showOutput: false,
            ticker: '',

            options: {
                title: { text: 'Most Talked About' },
                chart: {
                    inverted: false,
                    style: { fontFamily: "Circular, sans-serif" },
                    zoomType: 'x'
                },
                series: [
                    {
                        type: 'spline',
                        name: 'Volume',
                        data: []
                    }
                ],
                xAxis: {
                    type: 'datetime',
                    title: {
                        text: 'Date'
                    },
                },
                yAxis: {
                    title: { text: 'Date' },
                    type: ''
                },
                legend: { enabled: true }
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



    handleChange = (e) => {
        //search ticker on pressing enter
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchString = e.target.value;
            this.fetchResults(searchString);
            this.fetchPlotbands();
            //hide chart outline until results are fetched
            this.setState({ showOutput: true })
        }
    };

 

    render() {
        return (
            <div>
                <br></br>
                <SearchComponent onKeyPress={this.handleChange}/>
                <br></br>
                {this.props.ticker.toUpperCase()}
                {
                    this.props.showOutput &&
                    <HighChartsComponent
                        highCharts={Highcharts}
                        options={this.state.options}
                    />
                }
            </div>
        );
    }
};


export default LineChart;

