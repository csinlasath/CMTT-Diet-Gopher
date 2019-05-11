import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Main from '../compositions/main';

import LogMealModal from '../components/log-meal-modal';
import PlanMealModal from '../components/plan-meal-modal';
const moment = require('moment');

const RecipeDetails = (props) => (
    <Fragment>
        <Main>
            <div className='container main'>
                <div className='row'>
                    <div className='col-lg-6 imageDiv'>
                        <i data-id='recipes' className=' arrow fas fa-arrow-circle-left'></i>
                        <button className='btn btn-outline-dark log-meal-btn' data-toggle='modal' data-target='#logMealModal' >Log Meal</button>
                        <button className='btn btn-outline-dark plan-meal-btn' data-toggle='modal' data-target='#planMealModal'>Plan Meal</button>
                        <img className='recipeImg' alt={`Banh Mi Burgers with Spicy Sriracha Mayo Image`} src='https://spoonacular.com/recipeImages/864633-556x370.jpg' />
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='card'>
                                    <h5 className='card-title text-center text-dark'>Diet</h5>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <ul id='special-diet'>
                                            </ul>
                                        </div>
                                        <div className='col-sm-6'>
                                            <ul id='special-diet'>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-sm-8'>
                                <h3 className='text-center'>Banh Mi Burgers with Spicy Sriracha Mayo</h3>
                            </div>
                            <div className='col-sm-4'>
                            </div>
                        </div>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-12'>

                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h5 id='recipe-servings'>Serves: 4</h5>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <ul id='nutrition-facts'>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h5 id='ingredients-title' className='text-center'>Ingredients</h5>
                        <ul id='ingredients'>

                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <h5 id='instructions-title' className='text-center'>Instructions</h5>
                        <ul id='instructions'>

                        </ul>
                    </div>
                </div>
                <Card.Header>Comments</Card.Header>

                <Card>
                    <Card.Header>Add Your Thoughts</Card.Header>
                    <Card.Body>
                        <InputGroup className='mb-3'>
                            <FormControl
                                placeholder='Add Comments Here'
                                aria-label='Add Comments Here'
                                aria-describedby='basic-addon2'
                                name='commentInput'
                            />
                            <InputGroup.Append>
                                <Button variant='outline-secondary' >Submit</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Card.Body>
                </Card>
                <style jsx>{`{
                .log-meal-btn {
                    font-size: 0.765625rem;
                    background-color: white;
                    border: 1px solid black;
                    color: #1a1a1a;
                    padding: 10px;
                    border-radius: 2%;
                    position: absolute;
                    bottom: 14%;
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
                    bottom: 14%;
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
                .estimated-times{
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
                #special-diet {
                    list-style-type: none!important;
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
                #instructions {
                    list-style-type: decimal;
                }
                #ingredients-title, #instructions-title {
                    padding-top: 20px;
                }
                #edit {
                    color: blue;
                }
                #edit:hover {
                    cursor: pointer;
                }
                #delete {
                    color: red;
                }
                #delete:hover {
                    cursor: pointer;
                }
            }`}</style>
            </div>
            <LogMealModal />
            <PlanMealModal />
        </Main>
    </Fragment>
);

export default RecipeDetails;