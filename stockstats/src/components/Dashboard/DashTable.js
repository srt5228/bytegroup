import React from 'react';
import DashRecord from './DashRecord';





const DashTable = props => {

    return (
    <div className="table-container" aria-label="Results">
    {props.resultset.map(result => {
        return (
            <DashRecord result={result} key={result.ticker}/>
        )
    })}
    </div>
    )
};

export default DashTable;