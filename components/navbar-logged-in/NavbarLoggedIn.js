import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const NavbarLoggedIn = (props) => (
  <Fragment>
  <Navbar bg='light' expand='sm'>
    <div className='container'>
      <Navbar.Brand href='/'>Diet Gopher</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
        </Nav>
        <Form inline>
          <Nav.Link name='search' href='/search'>Search</Nav.Link>
          <Nav.Link name='favorites' href='/favorites'>Favorites</Nav.Link>
          <Nav.Link name='plan' href='/plan'>Calendar</Nav.Link>
          <Nav.Link name='history' href='/history'>History</Nav.Link>
          <Nav.Link name='logout' href='/logout'>Log Out</Nav.Link>
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


export default NavbarLoggedIn;