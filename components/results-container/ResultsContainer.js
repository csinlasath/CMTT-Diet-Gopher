import React, { Fragment } from 'react';

const ResultsContainer = (props) => (
    <Fragment>
        <ul className='list-group list-group-flush'>
            {props.children}
        </ul>
    </Fragment>
)

export default ResultsContainer;