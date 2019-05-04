import React, { Fragment } from "react";

const Edit = props => (
 
  <Fragment>
    <div className="container" />
    <div className="container" />
    <h1 className="display-8 text-center">Update your preferences.</h1>
    <br />

    <form action="/" />

    <ul>
      <label>
        First Name
        <br />
        <input id="name" name="name" type="text" />
      </label>

      <label>
        Last name
        <br />
        <input id="last" name="last" type="text" />
      </label>
      <br />

      <br />
      <label>
        E-mail Address
        <br />
        <input id="e-mail" name="E-mail Address" type="text" />
      </label>
      <br />

      <br />
      <label>
        <br />
        <input
          id="userpassword"
          name="current"
          placeholder="Enter current password"
          type="password"
          minlength="8"
          required
          title="enter at least 8 characters, must include upper and lowercase letters, number and special character"
        />
      </label>

      <label>
        Change Password
        <br />
        <input
          id="newpassword"
          name="enter new password"
          placeholder="Enter new password"
          type="password"
          minlength="8"
          required
        />
      </label>

      <label>
        <br />
        <input
          id="verifypassword"
          name="verify password"
          placeholder="Re-enter new password"
          type="password"
          minlength="8"
          required
        />
      </label>
      <br />

      <br />
      <label>
        Height
        <br />
        <input id="height" name="height" type="text" />
      </label>

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

      <label>
        Exclude Ingredients
        <br />
        <input id="exclude" name="exclude" type="text" />
      </label>
      <br />
    </ul>
    <br />

    <style jsx>{`
   #favorites{
   
    margin: .5rem;


   }
   #exclude{
   
    margin: .5rem;


   }
   #height{
   
    margin: .5rem;


   }
   #weight{
   
    margin: .5rem;


   }
   #currentpassword{
   
    margin: .5rem;


   }
   #newpassword{
   
    margin: .5rem;


   }
   #verifypassword{
   
    margin: .5rem;


   }
   #name{
   
    margin: .5rem;


   }
   #last{
   
    margin: .5rem;


   }
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

export default Edit;
