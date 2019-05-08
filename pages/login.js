import React, { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Main from '../compositions/main';
import LoginJumbotron from '../components/login-jumbotron';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <Main>
                    <LoginJumbotron />
                </Main>
            </Fragment>
        );
    }
}

export default LoginPage;