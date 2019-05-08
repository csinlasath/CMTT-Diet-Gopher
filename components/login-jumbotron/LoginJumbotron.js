import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class LoginJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userClick: ""
    };
  }
  render() {
    return (
      <Fragment>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <div className='row' id='jumbotronLoginContent'>
              <div className='col-md-6'>
                <div className='container' >
                  <h1 className="display-8 text-center">
                    Find food that fits your dietary needs.
                                    </h1>
                  <p className="lead text-center">
                    View Your Profile, Customize Your Regiment, and Find New Foods.
                                    </p>
                  <div className='card'>
                    <img src='static/img/sushi.jpg' className='card-img jumbotronImg'></img>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='container'>
                  <form role='form' action='/login' method='POST'>
                    <h4 className='text-center' id='jumbotronLabelLogin'>Login</h4>
                    <div className='form-row'>
                      <div className='form-group col-md-12'>
                        <label htmlFor='loginUsername'>Username</label>
                        <input type='text' name='username' className='form-control bg-light' id='loginUsername' placeholder='johnsmith2019'></input>
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-md-12'>
                        <label htmlFor='loginPassword'>Password</label>
                        <input type='password' name='password' className='form-control bg-light' id='loginPassword' placeholder='Type in your password'></input>
                        <small className='text-muted'>Passwords must contain a minimum of 8 characters, an Uppercase Letter, an Lowercase Letter, a Symbol, and a Number.</small>
                      </div>
                    </div>
                    <button type='submit' className='btn btn-outline-dark' id='jumbotronSignUpBtn'>Log in</button>
                    <p className='other-auth-text'>Don't have an Account? <Link href='/signup'><a>Sign Up</a></Link></p>
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
    );
  }
}

export default LoginJumbotron;
