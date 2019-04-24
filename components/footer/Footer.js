import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            <div className="row hide-on-large-only center">
              Copyright 2019{" "}
              <span id="copyright">
                <li>
                  <a href="https://travismorris.io/">Travis Morris</a>
                </li>
              </span>
              <li>
                <a href="https://github.com/MasonDobbs">Mason Dobbs</a>
              </li>
              <li>
                <a href="https://www.sinlasath.com/"> Christopher Sinsalath </a>
              </li>
              <li>
                <a href="https://tiffanykeller.github.io/marchportfolio/"> 
                  Tiffany Keller
                </a>
              </li>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
