import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const RecipeDetails = (props) => (
    <Fragment>
        <div className="container main">
            <div className="row">
                <div className="col-lg-6 imageDiv">
                    <i data-id="recipes" onClick={(e) => { props.clickBack(e) }} className=" arrow fas fa-arrow-circle-left"></i>
                    <img className='recipeImg' alt={`${props.result.title} Image`} src={props.result.image} />
                    {props.favorite ? <i className="star fas fa-heart favorite" onClick={(e) => { props.favoriteClick(e) }} data-id={props.result.id} data-type="recipe"></i> : <i className="star fas fa-heart" onClick={(e) => { props.favoriteClick(e) }} data-id={props.result.id} data-type="recipe"></i>}
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
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-8">
                            <h3 className="text-center">{props.result.title}</h3>
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        {props.result.preparationMinutes ? <h5 className="estimated-times">Estimated Prep Time: {props.result.preparationMinutes} mins.</h5> : <h5 className="estimated-times">Estimated Prep Time: N/A</h5>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        {props.result.cookingMinutes ? <h5 className="estimated-times">Estimated Prep Time: {props.result.cookingMinutes} mins.</h5> : <h5 className="estimated-times">Estimated Prep Time: N/A</h5>}
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
                                <ul id="nutrition-facts">
                                    {props.result.nutrition.nutrients.map(nutr => {
                                        return <li key={nutr.title}>{nutr.title}: {nutr.amount} {nutr.unit}</li>
                                    })}
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
                        {props.result.extendedIngredients.map(ing => {
                            return <li key={ing.original}>{ing.original}</li>
                        })}
                    </ul>
                </div>
                <div className="col-lg-6">
                    <h5 id="instructions-title" className="text-center">Instructions</h5>
                    <ul id="instructions">
                        {props.result.analyzedInstructions[0].steps.map(inst => {
                            return <li key={inst.number}>{inst.step}</li>
                        })}
                    </ul>
                </div>
            </div>
            <Card.Header>Comments</Card.Header>
            {props.comments.map(comment => {
                return <Card key={comment.id}>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                {comment.body}
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                                <cite title="Source Title">{comment.userName}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            })}
            <Card>
                <Card.Header>Add Your Thoughts</Card.Header>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add Comments Here"
                            aria-label="Add Comments Here"
                            aria-describedby="basic-addon2"
                            value={props.commentInput}
                            onChange={props.onChange}
                            name="commentInput"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={props.commentSubmit}>Submit</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Card.Body>
            </Card>
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
            }`}</style>
        </div>
    </Fragment>
);

export default RecipeDetails;