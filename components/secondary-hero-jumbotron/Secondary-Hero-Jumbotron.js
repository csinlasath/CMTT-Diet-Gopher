import React, { Fragment } from 'react';
import Media from 'react-media';

const SecondaryHeroJumbotron = (props) => (
    <Media query="(min-width: 768px)">
        {matches => (
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
                                    <button type='button' className={matches ? 'btn btn-outline-dark desktop' : 'btn btn-outline-dark mobile'} name="recipes" id='secondary-hero-search-btn' onClick={(e) => {props.btnClickFront(e)}}>Search Recipes</button>
                                    <button type='button' className={matches ? 'btn btn-outline-dark desktop' : 'btn btn-outline-dark mobile'} name="menu" id='secondary-hero-search-btn' onClick={(e) => {props.btnClickFront(e)}}>Search Menu Items</button>
                                    <button type='button' className={matches ? 'btn btn-outline-dark desktop' : 'btn btn-outline-dark mobile'} name="grocery" id='secondary-hero-search-btn' onClick={(e) => {props.btnClickFront(e)}}>Search Grocery</button>
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
        )}
    </Media>
);

export default SecondaryHeroJumbotron;