import React, { Component, Fragment } from 'react';
import Head from '../../components/head';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return(
            <Fragment>
                <Head />
                {this.props.children}
            </Fragment>
        );
    }
}

export default Main;