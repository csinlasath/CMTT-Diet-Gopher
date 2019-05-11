import React, { Component, Fragment } from "react";
import Link from 'next/link';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className='page-footer'>
          <nav className='navbar footer-copyright'>
            <div className='container'>
              <div className='row hide-on-large-only center'>
                <span id='copyright'>
                  Copyright &copy; 2019
              </span>
                <li>
                  <Link href='http://www.sinlasath.com/'><a target='_blank'> Christopher Sinlasath </a></Link>
                </li>
                <li>
                  <Link href='https://masondobbs.github.io/Masons-Portfolio/'><a target='_blank'>Mason Dobbs</a></Link>
                </li>
                <li>
                  <Link href='https://tiffanykeller.github.io/marchportfolio/'><a target='_blank'>
                    Tiffany Keller
                </a></Link>
                </li>
                <li>
                  <Link href='https://travismorris.io/'><a target='_blank'>Travis Morris</a></Link>
                </li>
              </div>
            </div>
          </nav>
        </footer>
        <style jsx>{`
        #copyright {
          margin: 0px 20px 0px 0px;
        }

        footer {
          height: 50px;
          border-top: 1px solid lightgray;
          margin-top: 50px;
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
