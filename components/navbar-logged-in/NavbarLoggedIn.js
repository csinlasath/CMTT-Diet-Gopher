import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';


const NavbarLoggedIn = (props) => (
  <Fragment>
  <Navbar bg="light" expand="sm">
   <img src="static/img/gopher.jpg" img id="logo" height="100" width="100" alt="Gopher" />
    <Navbar.Brand href="/">Diet Gopher</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/technology">Technology</Nav.Link>
        <Nav.Link href="/user">profile</Nav.Link>
        <Nav.Link href="/useredit">edit profile</Nav.Link>
        
       
      </Nav>
      <Nav className="mr-auto">
        <Nav.Link name="favorites" onClick={props.favorites}>Favorites</Nav.Link>
        <Nav.Link name="plan" onClick={props.favorites}>Plan</Nav.Link>
        <Nav.Link name="history" onClick={props.favorites}>History</Nav.Link>
  
      </Nav>
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


export default NavbarLoggedIn;