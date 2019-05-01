import React, { Fragment } from 'react';

const SearchRecipeResultsDetails = (props) => (
    <Fragment>
        <div className="container main">
            <div className="row">
                <div className="col-lg-6">
                    <img className='recipeImg' alt={`${props.result.title} Image`} src={props.result.image} />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-8">
                            <h3 className="text-center">{props.result.title}</h3>
                        </div>
                        <div className="col-sm-4">
                            <span className='star'>&#9734;</span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <h5 className="card-title text-center text-dark">Diet</h5>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul id="special-diet">
                                                {props.result.glutenFree ? <li>&#9745; Gluten free</li> : <li>&#9634; Gluten free</li>}
                                                {props.result.ketogenic ? <li>&#9745; Ketogenic</li> : <li>&#9634; Ketogenic</li>}
                                                {props.result.whole30 ? <li>&#9745; Whole 30</li> : <li>&#9634; Whole 30</li>}
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul id="special-diet">
                                                {props.result.vegan ? <li>&#9745; Vegan</li> : <li>&#9634; Vegan</li>}
                                                {props.result.vegetarian ? <li>&#9745; Vegetarian</li> : <li>&#9634; Vegetarian</li>}
                                                {props.result.dairyFree ? <li>&#9745; Diary free</li> : <li>&#9634; Diary free</li>}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <div className="row">
                                        <h5 className="estimated-times">Estimated Prep Time: {props.result.preparationMinutes}</h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="estimated-times"> Estimated Cook Time: {props.result.cookingMinutes}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h5 id="recipe-servings">Serves: {props.result.servings}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <h5 id="nutrition-facts-title" className="text-center">Nutrition Facts</h5>
                                <ul id="nutrition-facts">
                                    {/* {props.results.nutritionFacts.map(nutrition => {
                                        return <li>{nutrition}</li>
                                    })} */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h5 id="ingredients-title" className="text-center">Ingredients</h5>
                    <ul id="ingredients">
                        {/* {props.ingredients.map(ingredient => {
                                    return <li>{ingredient.original}</li>
                                })} */}
                    </ul>
                </div>
                <div className="col-lg-6">
                    <h5 id="instructions-title" className="text-center">Instructions</h5>
                </div>
            </div>
            <style jsx>{`{
                .card{
                    border-radius:10px;
                    background:lightgrey;
                }
                .main {
                    min-height: 80vh;
                    height: fit-content;
                }
                img{
                    height: 450px;
                    width: 450px;
                }
                li{
                    color: black
                }
                .estimated-times{
                    color: black
                }
                i{
                    color: white;
                    text-shadow:
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    -1px 1px 0 #000,
                    1px 1px 0 #000;
                }
                i:hover{
                    color: yellow
                }
                .recipeImg {
                    max-width: 400px;
                    max-height: 296px;
                }
                .star {
                    font-size: 40px;
                    color: black;
                }
                #special-diet {
                    list-style-type: none!important;
                }
            }`}</style>
        </div>
    </Fragment>
);

export default SearchRecipeResultsDetails;