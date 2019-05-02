import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const NavbarLoggedIn = (props) => (
  <Navbar bg="light" expand="sm">
    <Navbar.Brand href="/">Diet Gopher</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/technology">Technology</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
        <Nav.Link name="favorites" onClick={props.favorites}>Favorites</Nav.Link>
        <Nav.Link name="plan" onClick={props.favorites}>Plan</Nav.Link>
        <Nav.Link name="history" onClick={props.favorites}>History</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavbarLoggedIn;