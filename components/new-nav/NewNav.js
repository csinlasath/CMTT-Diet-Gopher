import React, { Component, Fragment } from 'react';

class NewNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <nav className='navbar sticky-top navbar-light bg-light'>
                    <div className='container'>
                        <div className='col-sm-10'>
                            <form className='form-inline'>
                                <div className='input-group'>
                                    <div className='input-group-prepend'>
                                        <a className='navbar-brand brand-left' href='/'>Diet Gopher</a>
                                    </div>
                                    <div className='input-group-prepend'>
                                        <select className='form-control btn btn-sm btn-outline-dark my-sm-0'>
                                            <option>Recipes</option>
                                            <option>Groceries Items</option>
                                            <option>Menu Items</option>
                                        </select>
                                    </div>
                                    <input type='search' className='form-control mr-sm-2 col-auto' id='searchBox' placeholder='Chicken Parm'></input>
                                    <div className='input-group-append'>
                                        <button className='form-control btn btn-sm btn-outline-dark my-2 my-sm-0'>Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <button className='btn btn-sm btn-outline-dark my-2 my-sm-0 auth-btn'>Sign Up</button>
                        <button className='btn btn-sm btn-outline-dark my-2 my-sm-0 auth-btn'>Log In</button>
                    </div>

                </nav>
                <style jsx>{`
                    .auth-btn {
                        margin-left: 15px;
                    }

                    .input-group {
                        width: 100%;
                    }


                    nav {
                        height: 100px;
                    }
                    
                `}</style>
            </Fragment>
        );
    }
}

export default NewNav;