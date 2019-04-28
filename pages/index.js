import React, { Component, Fragment } from 'react';
import Main from '../compositions/main';
import HeroJumbotron from '../components/hero-jumbotron';
import SecondaryHeroJumbotron from '../components/secondary-hero-jumbotron';
import LoginModal from '../components/login-modal';
import SearchRecipes from '../components/search-recipes';
import SearchMenuItems from '../components/search-menu-items';
import SearchGrocery from '../components/search-grocery';
import ResultsContainer from '../components/results-container';
import SearchResultsRecipes from '../components/search-results-recipes';
import Link from "next/link";


import fetch from 'isomorphic-unfetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchTopic: "8675309",
      menuSearchQuery: "",
      grocerySearchQuery: "",
      recipeSearchQuery: "",
      recipeSearchDiet: "none",
      recipeSearchType: "none",
      recipeSearchCuisine: "none",
      recipeSearchInclude: "",
      recipeSearchExclude: "",
      recipeSearchAllergies: "none",
      searchResultsArr: [],
      recipeDetails: []
    };
  };

  pickSearch = (e) => {
    console.log(e)
    this.setState({
      currentSearchTopic: e.target.name
    });
  };

  primarySearchFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  };

  typeSearchChange = (e) => {
    this.setState({
      currentSearchTopic: e,
      searchResultsArr: []
    });
  };

  grocerySearchSubmit = () => {
    const body = {
      'query': this.state.grocerySearchQuery
    };

    const searchQuery = '/api/grocery/items';
    console.log(body);
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
        searchResultsArr: json.products
      });
    });
  };

  menuSearchSubmit = () => {
    const body = {
      'query': this.state.menuSearchQuery
    };

    const searchQuery = '/api/menu/items';
    console.log(body);
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
        searchResultsArr: json.menuItems
      });
    });
  }

  recipeSearchSubmit = () => {
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
        searchResultsArr: json.results
      });
    });
  };

  clickRecipe() {
    console.log(this.resultId);
    fetch('/api/recipe/' + this.resultId, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
    });
  };

  render() {
    if (this.state.currentSearchTopic === "recipes") {
      return (
        <Main>
          <SearchRecipes formStateChange={this.primarySearchFormChange} btnClickFunc={this.recipeSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies} />
          <ResultsContainer>
            {this.state.searchResultsArr.map((recipe) => {
              return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickRecipe} />
            })}
          </ResultsContainer>
        </Main>
      );
    }
    else if (this.state.currentSearchTopic === "grocery") {
      return (
        <Main>
          <SearchGrocery formStateChange={this.primarySearchFormChange} btnClickGrocery={this.grocerySearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
          <ResultsContainer>
            {this.state.searchResultsArr.map((recipe) => {
              return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} />
            })}
          </ResultsContainer>
        </Main>
      );
    }
    else if (this.state.currentSearchTopic === "menu") {
      return (
        <Main>
          <SearchMenuItems formStateChange={this.primarySearchFormChange} btnClickMenu={this.menuSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
          <ResultsContainer>
            {this.state.searchResultsArr.map((recipe) => {
              return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} />
            })}
          </ResultsContainer>
        </Main>
      );
    }
    else {
      return (
        <Main>
          <HeroJumbotron />
          <SecondaryHeroJumbotron formStateChange={this.secondSearchFieldChange} searchValue={this.state.secondHeroSearch} btnClickFront={this.pickSearch} />
          <LoginModal>
            This is a test
          </LoginModal>
        </Main>
      );
    };
  };
};

export default App;
