import React, { Fragment } from 'react';

const SearchRecipes = (props) => (
    <Fragment>
        <form>
            <div className='form-group row'>
                <div className='form-row input-group' id='primary-search'>
                    <div className='input-group-prepend'>
                        <label htmlFor='recipeSearchQuery' className='form-control bg-light text-dark text-center col'>Search Recipe</label>
                    </div>
                    <input type='text' className='form-control bg-light col' name='recipeSearchQuery' value={props.searchValueQuery} placeholder='(optional: e.g. Chicken Parm)' id='recipeSearchQuery' onChange={(e) => props.formStateChange(e)}></input>
                    <div className='input-group-append'>
                        <button type='button' className='btn btn-outline-dark col' id='recipeQuerySearchButton' onClick={props.btnClickFunc}>Search</button>
                    </div>

                </div>
            </div>
            <div className='form-group row'>
                <select className='form-control btn btn-outline-dark' name='recipeSearchDiet' id='recipeSearchDiet' onChange={(e) => props.formStateChange(e)}>
                    <option value='none' defaultValue>Choose Diet (Optional)</option>
                    <option value='ketogenic'>Ketogenic</option>
                    <option value='vegan'>Vegan</option>
                    <option value='vegetarian'>Vegetarian</option>
                </select>
            </div>
            <div className='form-group row'>
                <select className='form-control btn btn-outline-dark' name='recipeSearchType' id='recipeSearchType' onChange={(e) => props.formStateChange(e)}>
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
            <div className='form-group row'>
                <select className='form-control btn btn-outline-dark' name='recipeSearchCuisine' id='recipeSearchCuisine' onChange={(e) => props.formStateChange(e)}>
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
            <div className='form-group row'>
                <div className='form-row input-group'>
                    <div className='input-group-prepend'>
                        <label htmlFor='recipeSearchInclude' className='form-control bg-light text-dark text-center col'>Include Ingredients</label>
                    </div>
                    <input type='text' className='form-control bg-light col-10' name='recipeSearchInclude' value={props.searchValue} placeholder='(optional: e.g. Cheese) ' id='recipeSearchInclude' onChange={props.formStateChange}></input>
                </div>
            </div>
            <div className='form-group row'>
                <div className='form-row input-group'>
                    <div className='input-group-prepend'>
                        <label htmlFor='recipeSearchExclude' className='form-control bg-light text-dark text-center col'>Exclude Ingredients</label>
                    </div>
                    <input type='text' className='form-control bg-light col-10' name='recipeSearchExclude' value={props.searchValue} placeholder='(optional: e.g. Onions) ' id='recipeSearchExclude' onChange={props.formStateChange}></input>
                </div>
            </div>
            <div className='form-group row'>
                <div className='form-row input-group'>
                    <div className='input-group-prepend'>
                        <label htmlFor='recipeSearchAllergies' className='form-control bg-light text-dark text-center col'>Allergies</label>
                    </div>
                    <input type='text' className='form-control bg-light col-10' name='recipeSearchAllergies' value={props.searchValue} placeholder='(optional: e.g. Dairy, Shellfish) ' id='recipeSearchAllergies' onChange={props.formStateChange}></input>
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

export default SearchRecipes;