import React, { Fragment } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const buttonStyle = {
    borderTop: '2px solid black',
    borderLeft: '2px solid black',
    borderBottom: '2px solid black',
    backgroundColor: '#343a40',
    height: '50px'
};

const SearchRecipes = (props) => (
    <Fragment>
        <div className='jumbotron jumbotron-fluid search-field-jumbotron'>
            <div className='container'>
                <div className='row'>
                    <h3 className='search-jumbotron-title'>What would you like to search?</h3>
                </div>
                <form onSubmit={(e) => props.btnClickFunc(e)}>
                    <div className='form-row'>
                            <div className='container'>
                                <div className='input-group'>
                                    <div className='input-group-prepend'>
                                        <DropdownButton id='dropdown-search-selector' variant='default' style={buttonStyle} onSelect={(e) => props.typeStateChange(e)} title='Recipes'>
                                            <Dropdown.Item eventKey='recipes'>Recipes</Dropdown.Item>
                                            <Dropdown.Item eventKey='grocery'>Grocery Items</Dropdown.Item>
                                            <Dropdown.Item eventKey='menu'>Menu Items</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                    <input type='text' className='form-control bg-light' name='recipeSearchQuery' value={props.searchValueQuery} id='recipeSearchQuery' placeholder='(optional: e.g. Chicken Parm)' onChange={(e) => props.formStateChange(e)}></input>
                                </div>
                            </div>
                    </div>
                    <div className='form-row'>
                        <div className='container'>
                            <button type='button' className='btn btn-dark btn-block refine-search-btn' data-toggle='collapse' onClick={props.openClick} data-target='#refineSearchCollapse'>Refine Search</button>
                        </div>
                    </div>
                    <div className='form-row search-btn-container'>
                        <div className='container'>
                            {props.isOpen ? <button type='submit' className='btn btn-dark btn-block search-submit-btn' data-toggle='collapse' data-target='#refineSearchCollapse' id='recipeQuerySearchButton' onClick={props.btnClickFunc}>Search</button> :
                            <button type='submit' className='btn btn-dark btn-block search-submit-btn' id='recipeQuerySearchButton' onClick={props.btnClickFunc}>Search</button>}
                        </div>
                    </div>
                    <div className='form-row'>
                        <div className='collapse collapse-container' id='refineSearchCollapse'>
                            <div className='form-group row itemDrop'>
                                <label htmlFor='recipeSearchType'>Recipe Type</label>
                                <select className='form-control btn btn-outline-dark dropdowns' name='recipeSearchType' id='recipeSearchType' onChange={(e) => props.formStateChange(e)}>
                                    <option value='none' defaultValue>Type (Optional)</option>
                                    <option value='appetizer'>Appetizer</option>
                                    <option value='beverage'>Beverage</option>
                                    <option value='bread'>Bread</option>
                                    <option value='breakfast'>Breakfast</option>
                                    <option value='desert'>Dessert</option>
                                    <option value='drink'>Drink</option>
                                    <option value='main+course'>Main Course</option>
                                    <option value='salad'>Salad</option>
                                    <option value='sauce'>Sauce</option>
                                    <option value='side+dish'>Side Dish</option>
                                    <option value='soup'>Soup</option>
                                </select>
                            </div>
                            <div className='form-group row itemDrop'>
                                <label htmlFor='recipeSearchDiet'>Diet Type</label>
                                <select className='form-control btn btn-outline-dark dropdowns' name='recipeSearchDiet' id='recipeSearchDiet' onChange={(e) => props.formStateChange(e)}>
                                    <option value='none' defaultValue>Choose Diet (Optional)</option>
                                    <option value='ketogenic'>Ketogenic</option>
                                    <option value='vegan'>Vegan</option>
                                    <option value='vegetarian'>Vegetarian</option>
                                    <option value='pescetarian'>Pescetarian</option>
                                </select>
                            </div>
                            <div className='form-group row itemDrop'>
                                <label htmlFor='recipeSearchAllergies'>Allergies/Intolerances</label>
                                <select className='form-control btn btn-outline-dark dropdowns' name='recipeSearchAllergies' id='recipeSearchAllergies' onChange={(e) => props.formStateChange(e)}>
                                    <option value='none' defaultValue>Choose Intolerances/allergies (Optional)</option>
                                    <option value='dairy+free'>Dairy Free</option>
                                    <option value='egg+free'>Egg Free</option>
                                    <option value='gluten+free'>Gluten Free</option>
                                    <option value='grain+free'>Grain Free</option>
                                    <option value='peanut+free'>Peanut Free</option>
                                    <option value='seafood+free'>Seafood Free</option>
                                    <option value='sesame+free'>Sesame Free</option>
                                    <option value='shellfish+free'>Shellfish Free</option>
                                    <option value='soy+free'>Soy Free</option>
                                    <option value='sulfite+free'>Sulfite Free</option>
                                    <option value='tree+nut+free'>Tree Nut Free</option>
                                    <option value='wheat+free'>Wheat Free</option>
                                </select>
                            </div>
                            <div className='form-group row itemDrop'>
                                <label htmlFor='recipeSearchCuisine'>Cuisine Type</label>
                                <select className='form-control btn btn-outline-dark dropdowns' name='recipeSearchCuisine' id='recipeSearchCuisine' onChange={(e) => props.formStateChange(e)}>
                                    <option value='none' defaultValue>Choose Cuisine (Optional)</option>
                                    <option value='american'>American</option>
                                    <option value='african'>African</option>
                                    <option value='british'>British</option>
                                    <option value='cajun'>Cajun</option>
                                    <option value='caribbean'>Caribbean</option>
                                    <option value='chinese'>Chinese</option>
                                    <option value='eastern+european'>Eastern European</option>
                                    <option value='french'>French</option>
                                    <option value='german'>German</option>
                                    <option value='greek'>Greek</option>
                                    <option value='indian'>Indian</option>
                                    <option value='irish'>Irish</option>
                                    <option value='italian'>Italian</option>
                                    <option value='japanese'>Japanese</option>
                                    <option value='jewish'>Jewish</option>
                                    <option value='korean'>Korean</option>
                                    <option value='latin+american'>Latin American</option>
                                    <option value='mexican'>Mexican</option>
                                    <option value='middle+eastern'>Middle Eastern</option>
                                    <option value='nordic'>Nordic</option>
                                    <option value='southern'>Southern</option>
                                    <option value='spanish'>Spanish</option>
                                    <option value='thai'>Thai</option>
                                    <option value='vietnamese'>Vietnamese</option>
                                </select>
                            </div>
                            <div className='form-group inputs'>
                                <label htmlFor='recipeSearchInclude'>Include Ingredients</label>
                                <input type='text' className='form-control' name='recipeSearchInclude' value={props.searchValue} placeholder='(optional: e.g. Cheese) ' id='recipeSearchInclude' onChange={props.formStateChange}></input>
                            </div>
                            <div className='form-group inputs'>
                                <label htmlFor='recipeSearchExclude'>Exclude Ingredients</label>
                                <input type='text' className='form-control' name='recipeSearchExclude' value={props.searchValue} placeholder='(optional: e.g. Onions) ' id='recipeSearchExclude' onChange={props.formStateChange}></input>
                            </div>
                        </div>
                    </div>
                    <div className='form-row'>

                    </div>
                </form>
            </div>
        </div>
        <style jsx>{`
                                    .search-submit-btn {
                                        margin: 0 auto;
                                        margin-top: 25px;
                                    }

                                    .refine-search-btn {
                                        margin: 0 auto;
                                        margin-top: 25px;
                                    }

                                    .search-jumbotron-title {
                                        text-align: center;
                                        margin: 0 auto;
                                        margin-bottom: 25px;
                                    }

                                    .collapse-container {
                                        width: 100%;
                                    }


                                    input {
                                        width: 100%;
                                        margin: auto;
                                        height: 50px;
                                        font-size: 20px;
                                        border: 2px solid black;
                                        padding: 7px;
                                    }
                                    .dropdowns {
                                        height: 50px;
                                        font-size: 20px;
                                    }
                                    label {
                                        height: 100%;
                                        width: 100%;
                                        font-size: 20px;
                                        font-weight: bolder;
                                        color: black;
                                        text-align: center;
                                    }
                                    .inputs {
                                        margin: auto;
                                        width: 90%;
                                    }
                                    .itemDrop {
                                        width: fit-content;
                                        width: 90%;
                                        margin: 5px auto!important;
                                    }
                                    
                                    .input-group {
                                        max-width: 1070px;
                                        margin: auto;
                                        margin-top: 25px;
                                    }
                                    .btn-group {
                                        width: 90%;
                                    }
                                    .searchMobile {
                                        min-width: 95vw;
                                        max-width: 90vw;
                                        padding-top: 10px;
                                        position: relative;
                                    }
                                    .searchDesktop {
                                        min-width: 60vw;
                                        padding-top: 10px;
                                        position: relative;
                                    }
                                    .closeButton {
                                        font-size: 30px;
                                        position: absolute;
                                        right: 1%;
                                        top: 0.3%;
                                        color: black;
                                    }
                                    .closeButton:hover {
                                        cursor: pointer;
                                    }
                                `}</style>
    </Fragment>
)

export default SearchRecipes;

