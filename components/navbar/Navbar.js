import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const NavbarComponent = (props) => (
  <Fragment>
  <Navbar bg="light" expand="sm">
    <div className='container'>
      <Navbar.Brand href="/">Diet Gopher</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <form className='form-inline'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <select className='form-control btn-outline-dark my-sm-0'>
                  <option>Recipes</option>
                  <option>Groceries Items</option>
                  <option>Menu Items</option>
                </select>
              </div>
              <input type='search' className='form-control mr-sm-2 col-auto' id='searchBox' placeholder='Chicken Parm'></input>
              <div className='input-group-append'>
                <button className='form-control btn btn-sm btn-outline-dark my-2 my-sm-0'>Search</button>
              </div>
            </div>
          </form>
        </Nav>
        <Form inline>
          <Nav.Link className='nav-link' id='login-btn' href='/login' onClick={(e) => props.loginButtonHandler(e)}>Login</Nav.Link>
          <Nav.Link className='nav-link' id='signup-btn' href='/signup' onClick={(e) => props.loginButtonHandler(e)}>Sign Up</Nav.Link>
        </Form>
      </Navbar.Collapse>
    </div>
  </Navbar>
  <style jsx>{`
            .nav-link:hover {
                text-decoration: underline;
            }         
            `}</style>
  </Fragment>
);

export default NavbarComponent;