import React, { Component, Fragment } from "react";

class SecondaryEdit extends Component {
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
                      src="static/img/garden-carrots.jpg"
                      className="card-img secondprofileImg"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="container">
                  <form>
                    <h4 className="text-center" id="profileLabelSignUp">
                      Tell us about yourself
                    </h4>
                    
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="Height">Height</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          id="Height"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="Weight">Weight</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          id="Weight"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="Intolerances">Intolerances</label>

                        <select name="intolerance">
                          <option value="dairy">Dairy free</option>
                          <option value="eggs">Egg free</option>
                          <option value="gluten">Gluten free</option>
                          <option value="grain">Grain free</option>
                          <option value="peanut">Peanut free</option>
                          <option value="seafood">Seafood free</option>
                          <option value="sesame">Sesame free</option>
                          <option value="shellfish">Shellfish free</option>
                          <option value="soy">Soy free</option>
                          <option value="sulfite">Sulfite free</option>
                          <option value="treenut">Treenut free</option>
                          <option value="wheat">Wheat free</option>
                        </select>
                      </div>
                      <div className="form-group col-md-12">
                        <label htmlFor="Diet-type">Diet Type</label>
                        <select name="diet">
                          <option value="ketogenic">Ketogenic</option>
                          <option value="Vegan">Vegan</option>
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="pescatarian">Pescatarian</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="favorite-ingredients">Favorite Ingredients</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          id="Favorite-ingredients"
                        
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="exclude">Exclude Ingredients</label>
                        <input
                          type="text"
                          className="form-control bg-light"
                          id="exclude"
                        
                        />
                      </div>
                    </div>
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .btn btn-outline-dark save-btn {
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
          #jumbotronUserProfile {
            margin: 0 auto;
            style: block;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default SecondaryEdit;
