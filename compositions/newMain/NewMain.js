import React, { Component, Fragment } from 'react';
import Head from '../../components/head';
import NewNav from '../../components/new-nav';
import Footer from '../../components/footer';

const NewMain = (props) => (
        <Fragment>
            <Head />
            <NewNav />
            <div className='container container-wrapper'>
                {props.children}
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


        

export default NewMain;