import React, { Fragment } from 'react';

const SearchResults = (props) => (
    <li>
        <h3 className='list-group-item'><strong>{props.resultName}</strong></h3>
        <img src={props.imageLink} id={props.resultId} />
    </li>
);

export default SearchResults;