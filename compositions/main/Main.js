import React, { Component, Fragment } from 'react';
import Head from '../../components/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
return (            
            <Fragment>
                <Head />
                <Navbar />
                <div className='container'>
                    {this.props.children}
                </div>
                <Footer />
                <style jsx>{`
                head {
                    color: #222;
                }

                h1.title {
                    font-family: 'Roboto', sans-serif;
                    color: #222;
                }

                button {
                    font-family: 'Roboto', sans-serif;
                    background: #0077e2;
                    box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);
                    border-radius: 3px;
                    text-transform: uppercase;
                    padding: 10px;
                    color: #fff;
                    border: #0077e2;
                }

                body {
                    background-image: url('/static/veggies.jpg');
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                `}</style>
            </Fragment>
        );
    }
}

export default Main;