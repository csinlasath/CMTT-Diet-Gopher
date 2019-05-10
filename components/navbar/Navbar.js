import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

const NavbarComponent = (props) => (
  <Fragment>
  <Navbar bg='light' expand='sm'>
    <div className='container'>
      <Navbar.Brand href='/'>Diet Gopher</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
        </Nav>
        <Form inline>
          <Nav.Link name='search' href='/search'>Search</Nav.Link>
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