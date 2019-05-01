import React, { Fragment } from 'react';

const SearchResults = (props) => (
    <Fragment>
        <button type='button' className='list-group-item' onClick={(e) => { props.clickHandler(e)}} data-id={props.resultId}>
            <div className='card text-center'>
                <div data-id={props.resultId} className='row'>
                    <div data-id={props.resultId} className='col-md-4'>
                        <img className='card-img' data-id={props.resultId} src={props.imageLink} alt={`${props.resultName} Image`}></img>
                    </div>
                    <div data-id={props.resultId} className='col-md-8'>
                        <div data-id={props.resultId} className='card-body'>
                            <h5 data-id={props.resultId} className='card-title text-center'>{props.resultName}</h5>
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