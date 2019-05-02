import React, { Fragment } from "react";

const UserProfile = props => (
  <Fragment>
    <div className="container" />
    <div className="container" />
    <h1 className="display-8 text-center">Save your preferences.</h1>
    <br />

    <form action="/" />

    <ul>
      <label>
        First Name
        <br />
        <input id="name" name="name" type="text" />
      </label>
      <br />

      <br />
      <label>
        Last name
        <br />
        <input id="last" name="last" type="text" />
      </label>
      <br />

      <br />
      <label>
        Height
        <br />
        <input id="height" name="height" type="text" />
      </label>
      <br />

      <br />
      <label>
        Weight
        <br />
        <input id="weight" name="weight" type="text" />
      </label>
      <br />

      <br />
      <label>Intolerances</label>
      <br />
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
      <br />

      <br />
      <label>Diet type</label>
      <br />
      <select name="diet">
        <option value="ketogenic">Ketogenic</option>
        <option value="Vegan">Vegan</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="pescatarian">Pescatarian</option>
      </select>
      <br />

      <br />
      <label>
        Favorite Ingredients
        <br />
        <input id="favorites" name="favorites" type="text" />
      </label>
      <br />

      <br />
      <label>
        Exclude Ingredients
        <br />
        <input id="exclude" name="exclude" type="text" />
      </label>
      <br />
    </ul>
    <br />

   
    <style jsx>{`
            p
            {
              
              
               width:5px; // adjust
            
            }

            ul { list-style: none; margin: 0; padding: 0; text-align: center;}
            li { margin: .2em 0; }
 {
                font-size: 1rem;
              
                

            }
        }
        .container {

            height: 0px;
        }
            
                }
            `}</style>

    <div className="user-spacer" />
  </Fragment>
);

export default UserProfile;
