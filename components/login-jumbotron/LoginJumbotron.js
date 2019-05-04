import React, { Component, Fragment } from 'react';

class LoginJumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userClick: ""
        }
    }

    render() {
        return (
            <Fragment>
                <div className='jumbotron jumbotron-fluid'>
                    <div className='container'>
                        <div className='row' id='jumbotronSignUpContent'>
                            <div className='col-md-6'>
                                <div className='container' >
                                    <h1 className="display-8 text-center">
                                        Find food that fits your dietary needs.
                                    </h1>
                                    <p className="lead text-center">
                                        Create a profile, customize your regiment, and find new foods.
                                    </p>
                                    <div className='card'>
                                        <img src='static/img/sushi.jpg' className='card-img jumbotronImg'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='container'>
                                    <form>
                                        <h4 className='text-center' id='jumbotronLabelSignUp'>Sign Up</h4>
                                        <div className='form-row'>
                                            <div className='form-group col-md-6'>
                                                <label htmlFor='signUpFirstName'>First Name</label>
                                                <input type='text' className='form-control bg-light' id='signUpFirstName' placeholder='John'></input>
                                            </div>
                                            <div className='form-group col-md-6'>
                                                <label htmlFor='signUpLastName'>Last Name</label>
                                                <input type='text' className='form-control bg-light' id='signUpLastName' placeholder='Smith'></input>
                                            </div>
                                        </div>
                                        <div className='form-row'>
                                            <div className='form-group col-md-12'>
                                                <label htmlFor='signUpEmail'>Email Address</label>
                                                <input type='text' className='form-control bg-light' id='signUpEmail' placeholder='john@dietgopher.com'></input>
                                            </div>
                                        </div>
                                        <div className='form-row'>
                                            <div className='form-group col-md-12'>
                                                <label htmlFor='signUpPassword'>Password</label>
                                                <input type='text' className='form-control bg-light' id='signUpPassword' placeholder='Type in a password'></input>
                                                <small className='text-muted'>Passwords must contain a minimum of 8 characters, an Uppercase Letter, an Lowercase Letter, a Symbol, and a Number.</small>
                                            </div>
                                        </div>
                                        <button type='submit' className='btn btn-outline-dark' id='jumbotronSignUpBtn'>Sign Up</button>
                                        <p className='other-auth-text'>Already have an Account? <a href='#'>Login</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    #jumbotronImg {
                        margin-bottom: 50px;
                    }

                    #jumbotronLabelSignUp {
                        margin-bottom: 30px;
                    }

                    #jumbotronSignUpBtn {
                        display: block;
                        margin: 0 auto;
                        width: 100%;
                    }
                    #jumbotronSignUpContent {
                        margin: 0 auto;
                    }

                    .other-auth-text {
                        margin-top: 30px;
                    }
                `}</style>
            </Fragment>
        )
    }
}

export default LoginJumbotron;