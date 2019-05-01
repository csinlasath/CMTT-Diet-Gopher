import React, { Component, Fragment } from 'react';
import Main from '../compositions/main';
import MainLoggedIn from '../compositions/mainLoggedIn';
import HeroJumbotron from '../components/hero-jumbotron';
import SecondaryHeroJumbotron from '../components/secondary-hero-jumbotron';
import LoginModal from '../components/login-modal';
import SearchRecipes from '../components/search-recipes';
import SearchMenuItems from '../components/search-menu-items';
import SearchGrocery from '../components/search-grocery';
import ResultsContainer from '../components/results-container';
import SearchResultsRecipes from '../components/search-results-recipes';
import SearchRecipeResultsDetails from '../components/search-recipes-results-details';
import SignedInHero from '../components/signed-in-hero/';

import fetch from 'isomorphic-unfetch';
import FavoriteRecipes from '../components/favorites-recipes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      userId: "",
      currentFocus: "8675309",
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
      recipeDetails: [],
      menuDetails: [],
      groceryDetails: [],
      itemId: ""
    };
  };

  pickSearch = (e) => {
    this.setState({
      currentFocus: e.target.name
    });
  };

  displayFavorites = () => {
    this.setState({
      currentFocus: "favorites"
    });
  }

  primarySearchFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  };

  typeSearchChange = (e) => {
    this.setState({
      currentFocus: e,
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
    document.dispatchEvent(new MouseEvent('click'));
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
    document.dispatchEvent(new MouseEvent('click'));
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
    document.dispatchEvent(new MouseEvent('click'));
  };

  clickRecipe = (e) => {
    const id = e.target.getAttribute('data-id');
    fetch('/api/recipe/' + id, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
      this.setState({
        recipeDetails: json,
        currentFocus: "recipeDetail"
      });
    });
  };

  clickMenu = (e) => {
    const id = e.target.getAttribute('data-id');
    fetch('/api/menu/item/' + id, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
    });
  };

  clickGrocery = (e) => {
    const id = e.target.getAttribute('data-id');
    fetch('/api/grocery/items/' + id, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
    });
  };

  render() {
    if (this.state.isLoggedIn) {
      switch (this.state.currentFocus) {
        case "recipes":
          return (
            <MainLoggedIn>
              <SearchRecipes formStateChange={this.primarySearchFormChange} btnClickFunc={this.recipeSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies} />
              <ResultsContainer>
                {this.state.searchResultsArr.map((recipe) => {
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickRecipe} />
                })}
              </ResultsContainer>
            </MainLoggedIn>
          )
          break;
        case "grocery":
          return (
            <MainLoggedIn>
              <SearchGrocery formStateChange={this.primarySearchFormChange} btnClickGrocery={this.grocerySearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
              <ResultsContainer>
                {this.state.searchResultsArr.map((recipe) => {
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickRecipe} />
                })}
              </ResultsContainer>
            </MainLoggedIn>
          );
          break;
        case "menu":
          return (
            <MainLoggedIn>
              <SearchMenuItems formStateChange={this.primarySearchFormChange} btnClickMenu={this.menuSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
              <ResultsContainer>
                {this.state.searchResultsArr.map((recipe) => {
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickRecipe} />
                })}
              </ResultsContainer>
            </MainLoggedIn>
          );
          break;
        case "recipeDetail":
          return (
            <MainLoggedIn>
              <SearchRecipeResultsDetails result={this.state.recipeDetails} />
            </MainLoggedIn>
          );
          break;
        case "favorites":
          return (
            <MainLoggedIn>
              <FavoriteRecipes />
            </MainLoggedIn>
          );
          break;
        default:
          return (
            <MainLoggedIn>
              <SignedInHero btnClickFavorite={this.displayFavorites} />
              <SecondaryHeroJumbotron formStateChange={this.secondSearchFieldChange} searchValue={this.state.secondHeroSearch} btnClickFront={this.pickSearch} />
              <LoginModal>
                This is a test
              </LoginModal>
            </MainLoggedIn>
          );
      };
    } else {
      switch (this.state.currentFocus) {
        case "recipes":
          return (
            <Main>
              <SearchRecipes formStateChange={this.primarySearchFormChange} btnClickFunc={this.recipeSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies} />
              <ResultsContainer>
                {this.state.searchResultsArr.map((recipe) => {
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickRecipe} />
                })}
              </ResultsContainer>
            </Main>
          )
          break;
        case "grocery":
          return (
            <Main>
              <SearchGrocery formStateChange={this.primarySearchFormChange} btnClickGrocery={this.grocerySearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
              <ResultsContainer>
                {this.state.searchResultsArr.map((recipe) => {
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickRecipe} />
                })}
              </ResultsContainer>
            </Main>
          );
          break;
        case "menu":
          return (
            <Main>
              <SearchMenuItems formStateChange={this.primarySearchFormChange} btnClickMenu={this.menuSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
              <ResultsContainer>
                {this.state.searchResultsArr.map((recipe) => {
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickRecipe} />
                })}
              </ResultsContainer>
            </Main>
          );
          break;
        case "recipeDetail":
          return (
            <Main>
              <SearchRecipeResultsDetails result={this.state.recipeDetails} />
            </Main>
          );
          break;
        default:
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
    }
  };
};

export default App;
