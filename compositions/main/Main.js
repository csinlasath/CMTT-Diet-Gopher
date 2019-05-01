import React, { Component, Fragment } from 'react';
import Head from '../../components/head';
import NavbarComponent from '../../components/navbar';
import Footer from '../../components/footer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    signOnButton = (e) => {
        console.log(e.target.id);
    }

    render() {
        return (
            <Fragment>
                <Head />
                <NavbarComponent loginButtonHandler={this.signOnButton} />
                <div className='container container-wrapper'>
                    {this.props.children}
                </div>
                <Footer />
                <style jsx>{`
                    .container-wrapper {
                        min-height: 100%;
                        margin-bottom: 0;
                    }
                    h1.title {
                        font-family: 'Roboto', sans-serif;
                        color: #222;
                    }
                    #root {
                        min-width: 1000px;
                    }
                `}</style>
            </Fragment>
        );
    };
};

export default Main;