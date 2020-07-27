import React from 'react';
import DashRecord from './DashRecord';




const DashTable = props => (
    <div className="table-container" aria-label="Results">
    {props.resultset.map(result => {
        return (
            <DashRecord result={result} />
        )
    })}
    </div>
);

export default DashTable;