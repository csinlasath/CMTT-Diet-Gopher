import React, { Component, Fragment } from 'react';
import Main from '../compositions/main';
import HeroJumbotron from '../components/hero-jumbotron';
import SecondaryHeroJumbotron from '../components/secondary-hero-jumbotron';
import LoginModal from '../components/login-modal';
import SearchRecipes from '../components/search-recipes';
import ResultsContainer from '../components/results-container';
import Link from "next/link";


import fetch from 'isomorphic-unfetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchTopic: "",
      secondaryHeroSearchValue: "",
      recipeSearchQuery: "",
      recipeSearchDiet: "",
      recipeSearchType: "",
      recipeSearchCuisine: "",
      recipeSearchInclude: "",
      recipeSearchExclude: "",
      recipeSearchAllergies: "",
      
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

  primarySearchFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
    console.log(`${this.state.recipeSearchQuery}`);
  }

  primarySearchSubmit = () => {
    const recipeQuery = this.state.recipeSearchQuery;
    const recipeDiet = `&diet=${this.state.recipeSearchDiet}`;
    const recipeType = `&type=${this.state.recipeSearchType}`;
    const recipeCuisine = `&cuisine=${this.state.recipeSearchQuery}`;
    const recipeInclude = `&ingredients=${this.state.recipeSearchQuery}`;
    const recipeExclude = `&excludeIngredients=${this.state.recipeSearchQuery}`;
    const recipeAllergies = `&intolerances=${this.state.recipeSearchQuery}`;

    const searchQuery = `/api/recipes/`;

    fetch(searchQuery, {
      method: 'POST',
      body: {
        query: recipeQuery,
      },
      // headers: {
      //   'Content-Type': 'application/json'
      // }
    }).then((res) => {
        res.json()
      }).then((json) => {
        console.log(json);
      });
  }

  render() {
    if (this.state.currentSearchTopic === "" || null) {
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
    else {
      return (
        <Main>
          <SearchRecipes formStateChange={this.primarySearchFormChange} btnClickFunc={this.primarySearchSubmit} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies}  />
          <ResultsContainer>

          </ResultsContainer>
        </Main>
      );
    }
  }
}

export default App;
