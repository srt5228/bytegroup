import React from 'react';
import '../../assets/css/generalnews.css';





const NewsRecord = props => {

    return (
        <div className="displaybox">
            <div className="articlecontainer">
            <a href={props.article.news_url} target="blank_"><img className="articleimage" src={props.article.image_url} alt="articleimage"></img></a>
                <span className = "textinfo">

                <a href={props.article.news_url} className="articlelink" target="blank">{props.article.title}</a><br/>
                <p>{props.article.text}<br/></p>
                <p className="bottomrow">{props.article.source_name} | {props.article.date} | <span id={props.article.sentiment === "Positive" ? 'pos' : props.article.sentiment === "Negative" ? 'neg' : ""}>{props.article.sentiment}</span></p>
                </span>
            {/* <span className="flexitem-right">
            Positive: {props.result.positive_mentions} | Negative: {props.result.negative_mentions} | Neutral: {props.result.neutral_mentions}</span> */}
            </div>
        </div>
    )
};

export default NewsRecord;