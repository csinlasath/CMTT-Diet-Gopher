import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

const SecondaryNavbar = (props) => (
    <Fragment>
        <Navbar bg='secondary' expand='sm'>
            <div className='container'>
                <div className='row'>
                    <ul className="col-auto" id='secondaryNavLinks'>
                        <li><a href="/" className='nav-link'>Home</a></li>
                        <li><a href="/about" className='nav-link'>About</a></li>
                        <li><a href="/technology" className='nav-link'>Technology</a></li>
                        <li><a href="/team" className='nav-link'>Team</a></li>
                        <li><a href="/support" className='nav-link'>Support</a></li>
                    </ul>
                </div>
            </div>
        </Navbar>
        <style jsx>{`
            #secondaryNavLinks {
                text-align: justify;
                list-style-type: none;
            }

            #secondaryNavLinks:after {
                content: '';
                display: inline-block;
                width: 100%;
            }

            #secondaryNavLinks li{
                display: inline-block;
            }

            .nav-link:hover {
                text-decoration: underline;
            }
        `}</style>
    </Fragment>
);

export default SecondaryNavbar;