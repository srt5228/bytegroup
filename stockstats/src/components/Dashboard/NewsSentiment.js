import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


const NewsSentiment = props => {

    function sentimentData(sentiment) {
        const arrayUsedForHighcharts = []
        for (const iterator in props.sentimentresult) {
            arrayUsedForHighcharts.push(props.sentimentresult[iterator][sentiment]);
        }
        return arrayUsedForHighcharts;
    }

    const generalNewsOptions = {
        chart: {
            type: 'column'
        },
        title: {
           text: undefined
        },
        xAxis: {
            //keys equal the dates
            categories: Object.keys(props.sentimentresult)
        },
        yAxis: {
            min: 0,
            title: {
                text: '# of news articles published'
            }
        },
        colors: ['#2EC06C', '#FFDE59','#FF5A5D'],
        plotOptions: {
            column: {
                stacking: '# of articles'
            }
        },
        series: [{
            name: 'Positive',
            data: sentimentData('Positive')
        }, {
            name: 'Neutral',
            data: sentimentData('Neutral')
        }, {
            name: 'Negative',
            data: sentimentData('Negative')
        }]
    }

    return (
        <div className="displaybox">
                <HighchartsReact 
                highcharts = {Highcharts}
                options = {generalNewsOptions}
                />
        </div>
    )
};

export default NewsSentiment;