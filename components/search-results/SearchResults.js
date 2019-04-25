import React, { Fragment } from 'react';

const SearchResults = (props) => (
    <li className='list-group-item'>{props.resultName}</li>
);

export default SearchResults;