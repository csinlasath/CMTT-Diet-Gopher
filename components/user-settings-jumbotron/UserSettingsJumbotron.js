import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import Link from 'next/link';

const UserSettingsJumbotron = (props) => (
    <Fragment>
        <div className='jumbotron jumbotron-fluid' id='userSettingsJumbotron'>
            <div className='container'>
                <div className='container'>
                    <h1 className='display-8 text-center'>Welcome {props.firstName}!</h1>
                    <i className='fas fa-user'></i>
                </div>
                <form>
                    <div className='form-group'>
                        <div className='input-group' id='userSettingsBtnGroup'>
                            {/* <MediaQuery maxDeviceWidth={767}>
                                <Link href='/users'><a className='btn btn-outline-dark mobile'>Customize Profile</a></Link>
                                <Link href='/profile'><a className='btn btn-outline-dark mobile'>Personal Info</a></Link>
                                <Link href='/accountsettings'><a className='btn btn-outline-dark mobile'>Account Settings</a></Link>
                            </MediaQuery>
                            <MediaQuery minDeviceWidth={768}>
                                <Link href='/users'><a className='btn btn-outline-dark desktop'>Customize Profile</a></Link>
                                <Link href='/profile'><a className='btn btn-outline-dark desktop'>Personal Info</a></Link>
                                <Link href='/accountsettings'><a className='btn btn-outline-dark desktop'>Account Settings</a></Link>
                            </MediaQuery> */}
                        </div>
                    </div>
                </form>
            </div>
            <style jsx>{`
                #userSettingsJumbotron {
                    height: fit-content;
                }

                #userSettingsBtnGroup {
                    margin: 0 auto;
                    width: fit-content;
                    text-align: center;
                }

                .input-group {
                    text-align: center;
                }
                
                .fa-user {
                    display: block;
                    text-align: center;
                    margin: 20px 0px 30px 0px;
                    font-size: 75px;
                }

                .desktop {
                    margin: 5px;
                }

                .mobile {
                    margin: 5px auto
                }
                @media 
            `}</style>
        </div>
        <div className='jumbotron-spacer'>
            <style jsx>{`
                .jumbotron-spacer {
                    height: 50px
                }
            `}</style>
        </div>
    </Fragment>
);

export default UserSettingsJumbotron;