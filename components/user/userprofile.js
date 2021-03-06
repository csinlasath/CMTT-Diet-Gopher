import React, { Component, Fragment } from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userClick: ""
    };
  }

  render() {
    return (
      <Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row" id="jumbotronUserProfile">
              <div className="col-md-6">
                <div className="container">
                  <div className="card">
                    <img
                      src="static/img/healthy-breakfast.jpg"
                      className="card-img profileImg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="container">
                  <form>
                    <h4 className="text-center" id="profileLabelSignUp">
                      Get started today
                    </h4>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="FirstName">First Name</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          id="FirstName"
                          placeholder="John"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="LastName">Last Name</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          id="LastName"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="Email">Email Address</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          id="signUpEmail"
                          placeholder="john@dietgopher.com"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="Password">Password</label>
                        <input
                          type="password"
                          className="form-control bg-light"
                          id="Password"
                          placeholder="Type in a password"
                        />
                        <small className="text-muted">
                          Passwords must contain a minimum of 8 characters, an
                          Uppercase Letter, an Lowercase Letter, a Symbol, and a
                          Number.
                        </small>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
         

          #profileSaveBtn {
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

export default UserProfile;
