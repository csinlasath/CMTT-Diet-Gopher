import React, { Fragment } from "react";
const TechIcons = props => (
  <Fragment>
    <div className="jumbotron jumbotron-fluid" id="techicon-jumbotron">
      <div className="container">
        <div className="container">
          <h1 className="display-8 text-center">Technology</h1>
          <h2>How we did it</h2>
          <p>
            Diet Gopher utilizes Javascript, React, nextJS momentJS, mySQL, mongoDB,
            HTML, CSS and the Spoonacular API to bring you a personalized user
            experience. User validation provides you security in knowing your
            information is safe with us.
          </p>

          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img src="static/img/sqllogo.png" className="card-img sqllogo" />
          </ul>
          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img
              src="static/img/mongologo.jpg"
              className="card-img mongologo"
            />
          </ul>
          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img src="static/img/nextlogo.png" className="card-img nextlogo" />
          </ul>
          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img
              src="static/img/spoonacularlogo.png"
              className="card-img spoonacularlogo"
            />
          </ul>


          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img
              src="static/img/reactlogo.png"
              className="card-img reactlogo"
            />
          </ul>
          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img
              src="static/img/bootstraplogo.png"
              className="card-img bootstraplogo.png"
            />
          </ul>
          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img
              src="static/img/htmllogo.png"
              className="card-img htmllogo.png"
            />
          </ul>
          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img
              src="static/img/csslogo.png"
              className="card-img csslogo.png"
            />
          </ul>
          <ul className="list-inline image-icons">
            <li className="list-inline-item" />
            <img
              src="static/img/momentlogo.png"
              className="card-img momentlogo.png"
            />
          </ul>
        </div>
      </div>
      <style jsx>{`
           .image-icons
            {
             width: 20%;
             height: 20%; 
             display: inline-block;
             vertical-align: top;
           
             padding: 15px;
           
            }
          
             
            
            
         
            
        }
        .container {

            height: 500px;
        }
            
                }
            `}</style>
    </div>

    <div className="techicon-spacer">
      <style jsx>{`
        .techicon-spacer {
          height: 100px;
        }
      `}</style>
    </div>
  </Fragment>
);

export default TechIcons;
