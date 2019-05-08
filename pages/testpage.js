import React, { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Main from '../compositions/main';
import MealPlanCalendar from '../components/meal-plan-calendar';

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <Main>
                    <h1>THIS IS THE SECRET PAGE</h1>
                    <MealPlanCalendar />
                </Main>
            </Fragment>
        );
    }
}

export default SignUpPage;