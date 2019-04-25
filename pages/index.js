import React, { Component, Fragment } from 'react';
import Main from '../compositions/main';
import HeroJumbotron from '../components/hero-jumbotron';
import SecondaryHeroJumbotron from '../components/secondary-hero-jumbotron';
import LoginModal from '../components/login-modal';
import SearchRecipes from '../components/search-recipes';
import ResultsContainer from '../components/results-container';
import SearchResultsRecipes from '../components/search-results-recipes';
import Link from "next/link";


import fetch from 'isomorphic-unfetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchTopic: "8675309",
      secondaryHeroSearchValue: "",
      recipeSearchQuery: "",
      recipeSearchDiet: "",
      recipeSearchType: "",
      recipeSearchCuisine: "",
      recipeSearchInclude: "",
      recipeSearchExclude: "",
      recipeSearchAllergies: "",
      recipeSearchResultsArr: []
    };
  };

  secondSearchFieldChange = (e) => {
    this.setState({
      secondaryHeroSearchValue: e.target.value
    });
  };

  secondHeroSearch = () => {
    console.log(`This is what is getting submitted in Hero Search:  "${this.state.secondaryHeroSearchValue}"`);
    const heroSearchValue = this.state.secondaryHeroSearchValue;
    this.setState((state) => ({
      currentSearchTopic: heroSearchValue,
      secondaryHeroSearchValue: ""
    }), () => {
      console.log(this.state);
    });
  };

  primarySearchFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  };

  primarySearchSubmit = () => {
    const body = {
      'query': this.state.recipeSearchQuery,
      'diet': this.state.recipeSearchDiet,
      'type': this.state.recipeSearchType,
      'cuisine': this.state.recipeSearchCuisine,
      'ingredients': this.state.recipeSearchInclude,
      'excludeIngredients': this.state.recipeSearchExclude,
      'intolerances': this.state.recipeSearchAllergies,
    };
    const searchQuery = `/api/recipes/`;

    fetch(searchQuery, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
      this.setState({
        recipeSearchResultsArr: json.results
      });
    });
  };

  render() {
    if (this.state.currentSearchTopic === "8675309" || null) {
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
          <SearchRecipes formStateChange={this.primarySearchFormChange} btnClickFunc={this.primarySearchSubmit} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies} />
          <ResultsContainer>
            {this.state.recipeSearchResultsArr.map((recipe) => {
              return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image}/>
            })}
          </ResultsContainer>
        </Main>
      );
    }
  }
}

export default App;
