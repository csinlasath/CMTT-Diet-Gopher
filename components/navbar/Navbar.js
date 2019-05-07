import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const NavbarComponent = (props) => (
  <Fragment>
  <Navbar bg="light" expand="sm">
  <img src="static/img/gopher.jpg" img id="logo" height="100" width="100" alt="Gopher" />
    <Navbar.Brand href="/">Diet Gopher</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/technology">Technology</Nav.Link>
      
       
        
      
      </Nav>
      <Form inline>
        <Nav.Link type='button' className='btn btn-outline-dark sign-on-btn' id='login-btn' data-toggle='modal' data-target='#loginModal' onClick={(e) => props.loginButtonHandler(e)}>Login</Nav.Link>
        <Nav.Link type='button' className='btn btn-outline-dark sign-on-btn' id='signup-btn' data-toggle='modal' data-target='#loginModal' onClick={(e) => props.loginButtonHandler(e)}>Sign Up</Nav.Link>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  <style jsx>{`
                #logo {
                 
                  border-radius: 50%;
                  padding-bottom: 0px;
                  margin-bottom: 0px;
            
                }

            
            `}</style>




  </Fragment>
);

export default NavbarComponent;