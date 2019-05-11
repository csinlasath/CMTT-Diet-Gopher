import React, { Fragment } from 'react';
import LogMealModal from '../log-meal-modal';
import PlanMealModal from '../plan-meal-modal';

const MenuDetails = (props) => (
    <Fragment>
        <div className="container main">
            <div className="row">
                <div className="col-lg-6 imageDiv">
                    <i data-id="menu" onClick={(e) => { props.clickBack(e) }} className=" arrow fas fa-arrow-circle-left"></i>
                    <button className='btn btn-outline-dark log-meal-btn' data-toggle='modal' data-target='#logMealModal' >Log Meal</button>
                    <button className='btn btn-outline-dark plan-meal-btn' data-toggle='modal' data-target='#planMealModal'>Plan Meal</button>
                    <img className='recipeImg' alt={`${props.result.title} Image`} src={props.result.images[1]} />
                    {props.favorite ? <i className="star fas fa-heart favorite" onClick={(e) => { props.favoriteClick(e) }} data-id={props.result.id} data-type="menu"></i> : <i className="star fas fa-heart" onClick={(e) => { props.favoriteClick(e) }} data-id={props.result.id} data-type="menu"></i>}
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="text-center">{props.result.restaurantChain}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="text-center">{props.result.title}</h3>
                        </div>
                    </div>
                    <div className="container">
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
            <style jsx>{`{
                .log-meal-btn {
                    font-size: 0.765625rem;
                    background-color: white;
                    border: 1px solid black;
                    color: #1a1a1a;
                    padding: 10px;
                    border-radius: 2%;
                    position: absolute;
                    bottom: 30%;
                    left: 5%;
                }
                .plan-meal-btn {
                    font-size: 0.765625rem;
                    background-color: white;
                    border: 1px solid black;
                    color: #1a1a1a;
                    padding: 10px;
                    border-radius: 2%;
                    position: absolute;
                    bottom: 30%;
                    right: 5%;
                }
                .log-meal-btn:hover {
                    cursor: pointer;
                    background-color: #1a1a1a;
                    color: #ffffff;
                }
                .plan-meal-btn:hover {
                    cursor: pointer;
                    background-color: #1a1a1a;
                    color: #ffffff;
                }
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
                .favorite {
                    color: red!important;
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
            }`}</style>
        </div>
    </Fragment>
);

export default MenuDetails;