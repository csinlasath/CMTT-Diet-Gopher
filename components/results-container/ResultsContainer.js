import React, { Fragment } from 'react';

const ResultsContainer = (props) => (
    <Fragment>
        <ul className='list-group list-group-flush results'>
            {props.children}
        </ul>
        <style jsx>{`
                .results {
                    min-height: 90vh;
                }
            `}</style>
    </Fragment>
)

export default ResultsContainer;