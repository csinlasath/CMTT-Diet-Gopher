import React, { Component, Fragment } from 'react';
import Main from '../compositions/main';
import HeroJumbotron from '../components/hero-jumbotron';
import Link from "next/link";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Main>
        <HeroJumbotron />
      </Main>
    );
  }
}

export default App;