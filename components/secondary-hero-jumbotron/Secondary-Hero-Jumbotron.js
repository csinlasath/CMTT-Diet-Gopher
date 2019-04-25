import React, { Fragment } from 'react';
const SecondaryHeroJumbotron = (props) => (
    <Fragment>
        <div className='jumbotron jumbotron-fluid' id='secondary-hero-jumbotron'>
            <div className='container'>
                <div className='container'>
                    <h1 className='display-8 text-center'>Search nutrition facts on all kinds of food.</h1>
                    <p className='lead text-center'>Special Diets.  Allergies.  All covered.</p>
                </div>
                <form>
                    <div className='form-group'>
                        <label htmlFor='secondary-hero-search' className='form-control text-center'>Search</label>
                        <div className='input-group' id='secondary-hero-search'>
                            <div className='input-group-append'>
                                <button type='button' className='btn btn-outline-dark' name="recipes" id='secondary-hero-search-btn' onClick={props.btnClickRec}>Search Recipes</button>
                            </div>
                            <div className='input-group-append'>
                                <button type='button' className='btn btn-outline-dark' name="menu" id='secondary-hero-search-btn' onClick={props.btnClickMenu}>Search Menu Items</button>
                            </div>
                            <div className='input-group-append'>   
                                <button type='button' className='btn btn-outline-dark' name="grocery" id='secondary-hero-search-btn' onClick={props.btnClickGroc}>Search Grocery</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>{`
                #secondary-hero-jumbotron {
                    height: 400px;
                }

                #secondary-hero-search {
                    margin: 0 auto;
                    width: max-content;
                }
                .input-group-append {
                    margin: 5px;
                }
            `}</style>
        </div>
        <div className='jumbotron-spacer'>
            <style jsx>{`
                .jumbotron-spacer {
                    height: 50px
                }
            `}</style>
        </div>
    </Fragment>
);

export default SecondaryHeroJumbotron;