import React from 'react';
import '../../assets/css/dashdisplay.css';
import {useNavigate} from "@reach/router";


const DashRecord = props => {

    const handleClick = () => {
        return navigate("/Search", {state: props.result});
    };

    const navigate = useNavigate();
    return (
        <div className="displaybox">
            <div className="resultcontainer" onClick= {handleClick}>
            <span className="flexitem-left">{props.result.ticker} | {props.result.name}</span>
            <span className="flexitem-right">
            Positive: {props.result.positive_mentions} | Negative: {props.result.negative_mentions} | Neutral: {props.result.neutral_mentions}</span>
            </div>
        </div>
    )
};

export default DashRecord;