import React, { Fragment } from 'react';

const GroceryDetails = (props) => (
    <Fragment>
        <div className="container main">
            <div className="row">
                <div className="col-lg-6 imageDiv">
                    <i data-id="grocery" onClick={(e) => { props.clickBack(e)}} className=" arrow fas fa-arrow-circle-left"></i>
                    <img className='recipeImg' alt={`${props.result.title} Image`} src={props.result.images[1]} />
                    <i className="star fas fa-heart"></i>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-8">
                            <h3 className="text-center">{props.result.title}</h3>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h5 id="recipe-servings">Serving Size: {props.result.serving_size}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul id="nutrition-facts">
                                    <li>Calories: {props.result.nutrition.calories}</li>
                                    <li>Carbs: {props.result.nutrition.carbs}</li>
                                    <li>Fat: {props.result.nutrition.fat}</li>
                                    <li>Protein: {props.result.nutrition.protein}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h5 id="ingredients-title" className="text-center">Ingredients</h5>
                    <p>{props.result.ingredientList}</p>
                </div>
            </div>
            <style jsx>{`{
                .card{
                    background:lightgrey;
                }
                .main {
                    min-height: 80vh;
                    height: fit-content;
                }
                li{
                    color: black
                }
                .recipeImg {
                    width: 100%;
                }
                .star {
                    font-size: 40px;
                    background-color: white;
                    border: 1px solid black;
                    color: lightgrey;
                    padding: 5px;
                    border-radius: 20%;
                    position: absolute;
                    top: 1.5%;
                    right: 5%;
                }
                .star:hover {
                    cursor:pointer;
                }
                .arrow {
                    font-size: 40px;
                    background-color: white;
                    border: 1px solid black;
                    color: lightgrey;
                    padding: 5px;
                    border-radius: 20%;
                    position: absolute;
                    top: 1.5%;
                    left: 5%;
                }
                .arrow:hover {
                    cursor: pointer;
                }
                #nutrition-facts {
                    list-style-type: none;
                    padding-left: 0;
                }
                .imageDiv {
                    position: relative;
                }
                #ingredients {
                    list-style-type: none;
                    padding-left: 0;
                }
                #ingredients-title {
                    padding-top: 20px;
                }
            }`}</style>
        </div>
    </Fragment>
);

export default GroceryDetails;