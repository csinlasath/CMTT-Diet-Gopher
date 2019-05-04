import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';

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
                        <div className='input-group' id='secondary-hero-search'>
                            <MediaQuery maxDeviceWidth={767}>
                                <button type='button' className='btn btn-outline-dark mobile' name="recipes" id='secondary-hero-search-btn-recipe' onClick={(e) => { props.btnClickFront(e) }}>Search Recipes</button>
                                <button type='button' className='btn btn-outline-dark mobile' name="menu" id='secondary-hero-search-btn-menu' onClick={(e) => { props.btnClickFront(e) }}>Search Menu Items</button>
                                <button type='button' className='btn btn-outline-dark mobile' name="grocery" id='secondary-hero-search-btn-grocery' onClick={(e) => { props.btnClickFront(e) }}>Search Grocery</button>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={768}>
                                <button type='button' className='btn btn-outline-dark desktop' name="recipes" id='secondary-hero-search-btn-recipe' onClick={(e) => { props.btnClickFront(e) }}>Search Recipes</button>
                                <button type='button' className='btn btn-outline-dark desktop' name="menu" id='secondary-hero-search-btn-menu' onClick={(e) => { props.btnClickFront(e) }}>Search Menu Items</button>
                                <button type='button' className='btn btn-outline-dark desktop' name="grocery" id='secondary-hero-search-btn-grocery' onClick={(e) => { props.btnClickFront(e) }}>Search Grocery</button>
                            </MediaQuery>
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>{`
                #secondary-hero-jumbotron {
                    height: fit-content;
                }
                #secondary-hero-search {
                    margin: 0 auto;
                    width: fit-content;
                    text-align: center;
                }
                .input-group {
                    text-align: center;
                }
                .desktop {
                    margin: 5px;
                }
                .mobile {
                    margin: 5px auto
                }
                @media 
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