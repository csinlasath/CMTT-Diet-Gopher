import React, { Fragment } from 'react';

const Search = (props) => (
    <Fragment>
        <form>
            <div className='form-group row'>
                <div className='form-row input-group' id='primary-search'>
                    <div className='input-group-prepend'>
                        <label htmlFor='primary-search' className='form-control bg-light text-dark text-center col'>Search Food</label>
                    </div>
                    <input type='text' className='form-control bg-light col' name='primary-search' value={props.searchValue} placeholder='(required: e.g. Chicken)' id='primary-search-field' onChange={props.formStateChange}></input>
                    <div className='input-group-append'>
                        <button type='button' className='btn btn-outline-dark col' id='secondary-hero-search-btn' onClick={props.btnClickFunc}>Search</button>
                    </div>

                </div>
            </div>
            <div className='form-group row'>
                <select className='form-control btn btn-outline-dark'>
                    <option defaultValue>Choose Diet (Required)</option>
                    <option value='1'>No Preferences</option>
                    <option value='2'>Ketogenic</option>
                    <option value='3'>Vegan</option>
                    <option value='4'>Vegetarian</option>
                </select>
            </div>
            <div className='form-group row'>
                <select className='form-control btn btn-outline-dark'>
                    <option defaultValue>Choose Cuisine (Optional)</option>
                    <option value='1'>No Preferences</option>
                    <option value='2'>Ketogenic</option>
                    <option value='3'>Vegan</option>
                    <option value='4'>Vegetarian</option>
                </select>
            </div>
            <div className='form-group row'>
                <div className='form-row input-group' id='secondary-search'>
                    <div className='input-group-prepend'>
                        <label htmlFor='secondary-search' className='form-control bg-light text-dark text-center col'>Include Ingredients</label>
                    </div>
                    <input type='text' className='form-control bg-light col-10' name='primary-search' value={props.searchValue} placeholder='(optional: e.g. Cheese) ' id='primary-search-field' onChange={props.formStateChange}></input>
                    <div className='input-group-append'>
                        <button type='button' className='btn btn-outline-dark col' id='secondary-hero-search-btn' onClick={props.btnClickFunc}>Search</button>
                    </div>
                </div>
            </div>
            <div className='form-group row'>
                <div className='form-row input-group' id='secondary-search'>
                    <div className='input-group-prepend'>
                        <label htmlFor='secondary-search' className='form-control bg-light text-dark text-center col'>Exclude Ingredients</label>
                    </div>
                    <input type='text' className='form-control bg-light col-10' name='primary-search' value={props.searchValue} placeholder='(optional: e.g. Onions) ' id='primary-search-field' onChange={props.formStateChange}></input>
                    <div className='input-group-append'>
                        <button type='button' className='btn btn-outline-dark col' id='secondary-hero-search-btn' onClick={props.btnClickFunc}>Search</button>
                    </div>
                </div>
            </div>
            <div className='form-group row'>
                <div className='form-row input-group' id='secondary-search'>
                    <div className='input-group-prepend'>
                        <label htmlFor='secondary-search' className='form-control bg-light text-dark text-center col'>Allergies</label>
                    </div>
                    <input type='text' className='form-control bg-light col-10' name='primary-search' value={props.searchValue} placeholder='(optional: e.g. Dairy, Shellfish) ' id='primary-search-field' onChange={props.formStateChange}></input>
                    <div className='input-group-append'>
                        <button type='button' className='btn btn-outline-dark col' id='secondary-hero-search-btn' onClick={props.btnClickFunc}>Search</button>
                    </div>
                </div>
            </div>
            <div className='form-group row'>
                <select className='form-control btn btn-outline-dark'>
                    <option defaultValue>Type (Optional)</option>
                    <option value='1'>Appetizer</option>
                    <option value='2'>Beverage</option>
                    <option value='3'>Bread</option>
                    <option value='4'>Breakfast</option>
                    <option value='5'>Dessert</option>
                    <option value='6'>Drink</option>
                    <option value='7'>Main Course</option>
                    <option value='8'>Salad</option>
                    <option value='9'>Sauce</option>
                    <option value='10'>Side Dish</option>
                    <option value='11'>Soup</option>
                </select>
            </div>
            <input type='text' className='form-control bg-light' name='primary-search' value={props.searchValue} placeholder='Exclude Foods' id='primary-search-field' onChange={props.formStateChange}></input>

        </form>
        <style jsx>{`
            label {
                height: 100%;
            }
        `}</style>
    </Fragment>
)

export default Search;