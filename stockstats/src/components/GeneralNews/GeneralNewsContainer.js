import React from 'react';
import NewsRecord from './NewsRecord';
import '../../assets/css/generalnews.css';






const GeneralNewsContainer = props => {

    return (
    <div className="news-container" aria-label="News">
    {props.news.map(article => {
        return (
            <NewsRecord article={article}/>
        )
    })}
    </div>
    )
};

export default GeneralNewsContainer;