import React, { Fragment } from "react";
const AboutPage = props => (
    <Fragment>
    <div id='aboutWrapper'>
    <div className='card text-center about-card'>
      <div className='row no-gutters'>
        <div className='container'>
          <div className='card-body'>
          <img src="static/img/gopher.jpg"></img>
            <h1 className='card-title'>Dieting is hard. Let us do some of the work for you.</h1>
            <p className='card-text'></p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div className='card text-center about-card'>
      <div className='row no-gutters'>
        <div className='col-md-8'>
          <img src='static/img/search.gif' className='card-img d-block' height='350px' width='700px' alt='...'></img>
        </div>
        <div className='col-md-6'>
          <div className='card-body'>
            <h5 className='card-title'>Access thousands of recipes tailored to your needs with our search feature</h5>
            <p className='card-text'></p>
          </div>
        </div>
      </div>
    </div>
   
    <br></br>
    <br></br>
    <div className='card text-center about-card'>
      <div className='row no-gutters'>
        <div className='col-md-8'>
          <img src='static/img/signup.gif' className='card-img d-block w-100' height='350px' width='700px' alt='...'></img>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>Create an account </h5>
            <p className='card-text'></p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <div className='card text-center about-card'>
      <div className='row no-gutters'>
        <div className='col-md-8'>
          <img src='static/img/login.gif' className='card-img d-block ' height='350px' width='700px' alt='...'></img>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>Save your preferences by filling out your profile</h5>
            <p className='card-text'></p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <div className='card text-center about-card'>
      <div className='row no-gutters'>
        <div className='col-md-8'>
          <img src='static/img/favorites.gif' className='card-img d-block w-100' height='350px' width='700px' alt='...'></img>
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>Save your favorite recipes and leave comments.</h5>
            <p className='card-text'></p>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <style jsx>{`
    .about-jumbotron-title {
      margin: 0 auto;
    }

    #aboutWrapper {
      margin-bottom: 100px;
    }

    .about-card {
      margin-bottom: 50px;
    }
  `}</style>
  </div>
</Fragment>
);

export default AboutPage;
