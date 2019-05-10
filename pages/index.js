import React, { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Main from '../compositions/main';
import MainLoggedIn from '../compositions/mainLoggedIn';
import HeroJumbotron from '../components/hero-jumbotron';
import SecondaryHeroJumbotron from '../components/secondary-hero-jumbotron';
import UserSettingsJumbotron from '../components/user-settings-jumbotron';
import DescriptionCardDeck from '../components/description-card-deck';
import TeamJumbotron from '../components/team-jumbotron';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      userId: "808",
      username: "Guest",
      currentFocus: "8675309",
      previousFocus: "8675309",
      historyArr: [],
    };
  };

  componentDidMount() {
    fetch('/api/user/verify').then((res, err) => {
      if (err) throw err;
      return res.json();
    }).then((json) => {
      console.log('This is the json from checking if logged in');
      console.log(json);
      this.setState((state) => ({
        isLoggedIn: true,
        user: json,
        username: json.username,
        userId: json._id
      }), () => {
        fetch(`/api/history/${this.state.userId}/all`).then((res) => {
          return res.json();
        }).then((json) => {
          this.setState({
            historyArr: json.reverse()
          });
        });
      });
    });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <MainLoggedIn favorites={this.favorites}>
          <UserSettingsJumbotron firstName={this.state.user.firstName} />
          <SecondaryHeroJumbotron formStateChange={this.secondSearchFieldChange} searchValue={this.state.secondHeroSearch} btnClickFront={this.pickSearch} />
        </MainLoggedIn>
      );
    } else {
      return (
        <Main>
          <HeroJumbotron />
          <SecondaryHeroJumbotron formStateChange={this.secondSearchFieldChange} searchValue={this.state.secondHeroSearch} btnClickFront={this.pickSearch} />
          <DescriptionCardDeck />
          <TeamJumbotron />
        </Main>
      );
    };
  }
};
export default App;