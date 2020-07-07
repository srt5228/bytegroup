import React from 'react';



class Dashboard extends React.Component {
    render() {
        return (
            <div className="display">
                <img src="https://assets.highcharts.com/images/demo-thumbnails/highcharts/line-labels-default.png" />
                <img src="https://assets.highcharts.com/images/demo-thumbnails/highcharts/line-ajax-default.png" />
                <div className="break"></div>
                <img src="https://assets.highcharts.com/images/demo-thumbnails/highcharts/line-time-series-default.png" />
            </div>
        );
    };
};

export default Dashboard;