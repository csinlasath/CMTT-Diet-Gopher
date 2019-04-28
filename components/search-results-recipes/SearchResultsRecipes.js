import React, { Fragment } from 'react';

const SearchResults = (props) => (
    <Fragment>
        <button type='button' className='list-group-item' onClick={() => props.clickHandler()} data-id={props.resultId}>
            <div className='card text-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img className='card-img' src={props.imageLink} alt={`${props.resultName} Image`}></img>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title text-center'>{props.resultName}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </button>
        <div className='jumbotron-spacer'>
            <style jsx>{`
                .jumbotron-spacer {
                    height: 50px
                }
            `}</style>
        </div>
    </Fragment>
);

export default SearchResults;