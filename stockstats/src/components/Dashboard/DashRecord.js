/* eslint-disable */
import React, {useState, useLayoutEffect} from 'react';
import '../../assets/css/dashdisplay.css';
import {useNavigate} from "@reach/router";


const DashRecord = props => {

    const [ispositive, setPositive] = useState(false)

    console.log(typeof props.positive_mentions);
    console.log(props.negative_mentions);


    // useLayoutEffect(() => {
    //     if (props.result.positive_mentions > props.result.negative_mentions) {
    //         setPositive(!ispositive);
    //     };
    // }, [])


    console.log(ispositive);

    const handleClick = () => {
        return navigate("/Search", {state: props.result});
    };

    const navigate = useNavigate();
    return (
        <div className="displaybox">
            <div className="resultcontainer" onClick= {handleClick}
            id={props.result.positive_mentions > props.result.negative_mentions ? 'positive' : 'negative'}>
            <span className="flexitem-left">{props.result.ticker} | {props.result.name}</span>
            <span className="flexitem-right">
            Positive: {props.result.positive_mentions} | Negative: {props.result.negative_mentions} | Neutral: {props.result.neutral_mentions}</span>
            </div>
        </div>
    )
};

export default DashRecord;