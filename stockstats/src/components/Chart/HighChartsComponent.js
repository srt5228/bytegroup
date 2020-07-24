import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

export const HighChartsComponent = (props) => {
    return (
        <div className="highchart">
            <HighchartsReact
                highcharts={Highcharts}
                options={props.options} 
                updateArgs={[true]}
            />
        </div>
    )
}
