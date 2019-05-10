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
                    {/* Bootswatch BootStrap */}
                    <link
                        rel="stylesheet"
                        href="https://bootswatch.com/4/lux/bootstrap.min.css"
                    ></link>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                    {/* Google Fonts */}
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                    {/* Custom Styles */}
                    <link href="static/css/style.css" rel="stylesheet"></link>
                    {/* App Logic */}
                    <script src="/static/js/app.js" defer></script>
                </Head>
            </Fragment>

        );
    }
}

export default Header;