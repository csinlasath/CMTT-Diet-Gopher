import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import Main from '../compositions/main';
import styles from './index/style.js';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Main>
                    <button className='btn btn-primary'>Home Page</button>
                </Main>
                <style jsx>{styles}</style>
            </Fragment>
        );
    }
}

export default App;