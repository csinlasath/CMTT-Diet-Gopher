import React, { Component, Fragment } from 'react';
import MainLoggedIn from '../compositions/mainLoggedIn';
import AccountSettingsJumbotron from "../components/account-settings-jumbotron/AccountSettingsJumbotron";

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <MainLoggedIn>
                    <AccountSettingsJumbotron />
                </MainLoggedIn>
                <style jsx>{`
                    .account-settings-heading {
                        margin: 0 auto;
                        text-align: center;
                    }
                `}</style>
            </Fragment>

        );
    }
}

export default AccountSettings;