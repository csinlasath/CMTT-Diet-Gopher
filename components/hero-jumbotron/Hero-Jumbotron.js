import Link from 'next/link';

const HeroJumbotron = props => (
  <div id='heroCarousel' className='card bg-dark text-white carousel slide carousel-fade' data-ride='carousel'>
    <ol className='carousel-indicators'>
      <li data-target='heroCarousel' data-slide-to='0' className='active'></li>
      <li data-target='heroCarousel' data-slide-to='1'></li>
      <li data-target='heroCarousel' data-slide-to='2'></li>
    </ol>
    <div className='carousel-inner'>
      <div className='carousel-item active' data-interval="10000">
        <img src='static/img/healthy-breakfast.jpg' className='card-img d-block w-100' alt='...'></img>
        <div className='card-img-overlay'>
          <div className='bg-secondary carousel-text-wrapper'>
            <h1 className="display-8 text-center text-dark">
              Find food that fits your dietary needs.
            </h1>
            <p className="lead text-center text-dark">
              Create a profile, customize your regiment, and find new foods.
            </p>
          </div>
          <div className='form-group'>
            <Link href='/signup'>
              <button type="button" className="btn btn-light sign-up-btn">
                Sign Up
                  </button>
            </Link>
            <Link href='/login'>
              <button type="button" className="btn btn-light sign-up-btn">
                Log In
                  </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='carousel-item' data-interval="10000">
        <img src='static/img/sushi.jpg' className='card-img d-block w-100' alt='...'></img>
        <div className='card-img-overlay'>
          <div className='bg-secondary carousel-text-wrapper'>
            <h1 className="display-8 text-center text-dark">
              Find food that fits your dietary needs.
            </h1>
            <p className="lead text-center text-dark">
              Create a profile, customize your regiment, and find new foods.
            </p>
          </div>
          <div className='form-group'>
            <Link href='/signup'>
              <button type="button" className="btn btn-light sign-up-btn">
                Sign Up
                  </button>
            </Link>
            <Link href='/login'>
              <button type="button" className="btn btn-light sign-up-btn">
                Log In
                  </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='carousel-item' data-interval="10000">
        <img src='static/img/veggies.jpg' className='card-img d-block w-100' alt='...'></img>
        <div className='card-img-overlay'>
          <div className='bg-secondary carousel-text-wrapper'>
            <h1 className="display-8 text-center text-dark">
              Find food that fits your dietary needs.
            </h1>
            <p className="lead text-center text-dark">
              Create a profile, customize your regiment, and find new foods.
            </p>
          </div>
          <div className='form-group'>
            <Link href='/signup'>
              <button type="button" className="btn btn-light sign-up-btn">
                Sign Up
                  </button>
            </Link>
            <Link href='/login'>
              <button type="button" className="btn btn-light sign-up-btn">
                Log In
                  </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .card-img-overlay {
        margin-top: 20px;
      }

      .carousel-text-wrapper {
        padding: 20px 0px 0px 10px;
        border: solid 1px #000000;
        margin-bottom: 10%;
      }

      #heroCarousel {
        height: fit-content;
        margin-bottom: 100px;
      }
      .sign-up-btn {
        font-size: 18px;
        display: inline-block;
        margin: 10px;
        margin-left: 42%;
        border: solid 1px #000000;
        width: 200px;
        height: 75px;
      }
      #wrapper {
        background-image: url.(./static/img/veggies.jpg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      }
    `}</style>
  </div>
);

export default HeroJumbotron;
