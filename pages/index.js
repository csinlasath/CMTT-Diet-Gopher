import React, { Component, Fragment } from 'react';
import Main from '../compositions/main';
import HeroJumbotron from '../components/hero-jumbotron';
import SecondaryHeroJumbotron from '../components/secondary-hero-jumbotron';
import LoginModal from '../components/login-modal';
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
        <SecondaryHeroJumbotron />
        <LoginModal>
          This is a test
        </LoginModal>
      </Main>
    );
  }
}

export default App;
