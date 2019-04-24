import React, { Component, Fragment } from 'react';
import Head from 'next/head';


class Header extends Component {
    render() {
        return (
            <Fragment>
                <Head>
                    <title>Diet Gopher</title>
                    <meta lang='en-us'></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    {/* Font-Awesome Icons */}
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
                    {/* Bootstrap CDN */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <link href="static/css/style.css" rel="stylesheet"></link>
                    {/* App Logic */}
                    <script src="/static/js/app.js" defer></script>
                </Head>
            </Fragment>
        
        );
    }
}

export default Header;