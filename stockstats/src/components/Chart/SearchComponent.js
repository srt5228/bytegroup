import React from 'react'

const SearchComponent = (props) => {
    return (
        <div className="search-input">
            <input id="search-box"
                type="text"
                onKeyPress={props.handleChange}
                placeholder="Search ticker..."
            />
        </div>
    )
};

export default SearchComponent;

