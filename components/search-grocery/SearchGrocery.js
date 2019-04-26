import React, { Fragment } from 'react';

const SearchGrocery = (props) => (
    <Fragment>
        <form>
            <div className='form-group row'>
                <div className='form-row input-group' id='primary-search'>
                    <div className='input-group-prepend'>
                        <label htmlFor='recipeSearchQuery' className='form-control bg-light text-dark text-center col'>Search Grocery Items</label>
                    </div>
                    <input type='text' className='form-control bg-light col' name='recipeSearchQuery' value={props.searchValueQuery} placeholder='(e.g. Cool Ranch Doritos)' id='recipeSearchQuery' onChange={(e) => props.formStateChange(e)}></input>
                    <div className='input-group-append'>
                        <button type='button' className='btn btn-outline-dark col' id='recipeQuerySearchButton' onClick={props.btnClickGrocery}>Search</button>
                    </div>

                </div>
            </div>

            <style jsx>{`
                input {
                    width: 100%;
                }

                label {
                    height: 100%;
                    width: 203px;
                }
        `}</style>
        </form>

        <div className='jumbotron-spacer'>
            <style jsx>{`
                .jumbotron-spacer {
                    height: 50px
                }
            `}</style>
        </div>
    </Fragment>
)

export default SearchGrocery;