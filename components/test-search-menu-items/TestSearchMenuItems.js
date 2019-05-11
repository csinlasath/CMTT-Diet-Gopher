import React, { Fragment } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const buttonStyle = {
    borderTop: '2px solid black',
    borderLeft: '2px solid black',
    borderBottom: '2px solid black',
    backgroundColor: '#343a40',
    height: '50px'
};


const SearchMenuItems = (props) => (
    <Fragment>
        <div className='jumbotron jumbotron-fluid search-field-jumbotron'>
            <div className='container'>
                <div className='row'>
                    <h3 className='search-jumbotron-title'>What would you like to search?</h3>
                </div>
                <form onSubmit={(e) => props.btnClickMenu(e)}>
                    <div className='form-row'>
                        <div className='container'>
                            <div className='input-group'>
                                <div className='input-group-prepend'>
                                    <DropdownButton id='dropdown-search-selector' variant='default' style={buttonStyle} onSelect={(e) => props.typeStateChange(e)} title='Menu Items'>
                                        <Dropdown.Item eventKey='recipes'>Recipes</Dropdown.Item>
                                        <Dropdown.Item eventKey='grocery'>Grocery Items</Dropdown.Item>
                                        <Dropdown.Item eventKey='menu'>Menu Items</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <input type='text' className='form-control bg-light' name='menuSearchQuery' value={props.searchValueQuery} id='menuSearchQuery' placeholder='(e.g. Doritos Locos Tacos)' onChange={(e) => props.formStateChange(e)}></input>
                            </div>
                        </div>
                    </div>
                    <div className='form-row search-btn-container'>
                        <div className='container'>
                            <button type='submit' className='btn btn-dark btn-block search-submit-btn' id='menuQuerySearchButton' onClick={(e) => props.btnClickMenu(e)}>Search</button>
                        </div>
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

export default SearchMenuItems;