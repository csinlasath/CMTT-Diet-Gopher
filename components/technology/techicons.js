import React, { Fragment } from "react";
const TechIcons = props => (
  <Fragment>
    <div className="jumbotron jumbotron-fluid" id="techicon-jumbotron">
      <div className="container">
        <div className="container">
          <h1 className="display-8 text-center">Technology</h1>

          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-js-square" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js" />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm" />
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
            li
            {
              
              
               width:250px; // adjust
            
            }
            
              .dev-icons {
                font-size: 10rem;
              
                
                
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
