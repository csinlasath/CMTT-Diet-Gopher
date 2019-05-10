import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

const SecondaryNavbar = (props) => (
    <Fragment>
        <Navbar bg='secondary' expand='sm'>
            <div className='container'>
                <div className='row'>
                    <ul className='col-auto' id='secondaryNavLinks'>
                        <li><Link href='/'><a className='nav-link'>Home</a></Link></li>
                        <li><Link href='/about'><a className='nav-link'>About</a></Link></li>
                        <li><Link href='/technology'><a className='nav-link'>Technology</a></Link></li>
                        <li><Link href='/team'><a className='nav-link'>Team</a></Link></li>
                        <li><Link href='/support'><a className='nav-link'>Support</a></Link></li>
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