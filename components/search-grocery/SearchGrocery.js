import React, { Fragment } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const buttonStyle = {
    border: '2px solid black'
}

const SearchGrocery = (props) => (
    <Fragment>
        <div className="search">
            <div className="input-group">
                <DropdownButton id="dropdown-basic-button" name='searchType' variant='default' style={buttonStyle} title="Search">
                    <div className="search">
                        <div className='form-group inputs'>
                            <div className="form-group inputs">
                                <label for="grocerySearchQuery">Grocery Search</label>
                                <input type="text" className="form-control" name='grocerySearchQuery' value={props.searchValueQuery} placeholder='(e.g. Cool Ranch Doritos)' id='grocerySearchQuery' onChange={(e) => props.formStateChange(e)} />
                            </div>
                        </div>
                        <div className='input-group-append'>
                            <button type='button' className='btn btn-outline-dark col' id='groceryQuerySearchButton' onClick={props.btnClickGrocery}>Search</button>
                        </div>
                    </div>
                </DropdownButton>
                <div className="input-group-prepend">
                    <DropdownButton id="dropdown-basic-button" name='searchType' variant='default' style={buttonStyle} onSelect={(e) => props.typeStateChange(e)} title="Grocery Items">
                        <Dropdown.Item eventKey='recipes'>Recipes</Dropdown.Item>
                        <Dropdown.Item eventKey='grocery'>Grocery Items</Dropdown.Item>
                        <Dropdown.Item eventKey='menu'>Menu Items</Dropdown.Item>
                    </DropdownButton>
                </div>
                <style jsx>{`
                input {
                    width: 100%;
                    margin: auto;
                    height: 50px;
                    font-size: 20px;
                    border: 2px solid black;
                    padding: 7px;
                }
                .inputs {
                    margin: auto;
                    width: 90%;
                }
                label {
                    height: 100%;
                    width: 100%;
                    font-size: 20px;
                    font-weight: bolder;
                    color: black;
                    text-align: center;
                }
                #groceryQuerySearchButton {
                    margin: 20px 7px 7px 7px;
                }
                .search {
                    min-width: 50vw;
                    max-width: 90vw;
                }
                `}</style>
            </div>
        </div>
    </Fragment>
)

export default SearchGrocery;