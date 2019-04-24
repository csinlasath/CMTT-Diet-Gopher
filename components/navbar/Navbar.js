import React, { Component, Fragment } from 'react';
import Link from 'next/link';

const Navbar = (props) => (
  <Fragment>
  <nav className="navbar navbar-expand navbar-light bg-light mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Diet Gopher</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/technology"><a className="nav-link">Technology</a></Link>
          </li>
        </ul>
      </div>
      <button type='button' className='btn btn-outline-dark sign-on-btn' id='login-btn' data-toggle='modal' data-target='#loginModal' onClick={(e) => props.loginButtonHandler(e)}>Login</button>
      <button type='button' className='btn btn-outline-dark sign-on-btn' id='signup-btn' data-toggle='modal' data-target='#loginModal' onClick={(e) => props.loginButtonHandler(e)}>Sign Up</button>
    </div>
  </nav>
  <style jsx>{`
    .sign-on-btn {
      margin: 0px 0px 0px 10px;
    }

    ul {
      list-style-type: none;
    }
  `}</style>
  </Fragment>
);

export default Navbar;