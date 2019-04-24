import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <Fragment>
      <footer className='page-footer'>
        <nav className='navbar fixed-bottom footer-copyright'>
          <div className='container'>
            <div className='row hide-on-large-only center'>
              <span id='copyright'>
              Copyright &copy; 2019
              </span>
              <li>
                <a href='https://www.sinlasath.com/' target='_blank'> Christopher Sinlasath </a>
              </li>
              <li>
                <a href='https://github.com/MasonDobbs' target='_blank'>Mason Dobbs</a>
              </li>
              <li>
                <a href='https://tiffanykeller.github.io/marchportfolio/' target='_blank'>
                  Tiffany Keller
                </a>
              </li>
              <li>
                  <a href='https://travismorris.io/' target='_blank'>Travis Morris</a>
                </li>
            </div>
          </div>
        </nav>
      </footer>
      <style jsx>{`
        #copyright {
          margin: 0px 20px 0px 0px;
        }

        li {
          list-style-type: none;
          margin: 0px 10px 0px 10px;
        }
      `}</style>
      </Fragment>
    );
  }
}

export default Footer;
