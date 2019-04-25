import React, { Component, Fragment } from 'react';
import Main from '../compositions/main';
import HeroJumbotron from '../components/hero-jumbotron';
import SecondaryHeroJumbotron from '../components/secondary-hero-jumbotron';
import LoginModal from '../components/login-modal';
import Search from '../components/search';
import Link from "next/link";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondaryHeroSearchValue: "",
      currentSearchTopic: "",
    };
  }

  secondSearchFieldChange = (e) => {
    this.setState({
      secondaryHeroSearchValue: e.target.value
    });
  }

  secondHeroSearch = () => {
    console.log(`This is what is getting submitted in Hero Search:  "${this.state.secondaryHeroSearchValue}"`);
    const heroSearchValue = this.state.secondaryHeroSearchValue;
    this.setState((state) => ({
      currentSearchTopic: heroSearchValue,
      secondaryHeroSearchValue: ""
    }), () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <Main>
        <HeroJumbotron />
        <SecondaryHeroJumbotron formStateChange={this.secondSearchFieldChange} searchValue={this.state.secondHeroSearch} btnClickFunc={this.secondHeroSearch} />
        <LoginModal>
          This is a test
        </LoginModal>
      </Main>
    );
  }
}

export default App;
