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
import SearchResultsMenu from '../components/search-results-menu';
import RecipeDetails from '../components/recipes-details';
import GroceryDetails from '../components/grocery-details';
import MenuDetails from '../components/menu-details';
import fetch from 'isomorphic-unfetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
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
      recipeResultsArr: [],
      recipeDetails: [],
      menuResultsArr: [],
      menuDetails: [],
      groceryResultsArr: [],
      groceryDetails: [],
      itemId: ""
    };
  };

  pickSearch = (e) => {
    this.setState({
      currentFocus: e.target.name
    });
  };

  primarySearchFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim()
    });
  };

  typeSearchChange = (e) => {
    this.setState({
      currentFocus: e
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
        groceryResultsArr: json.products
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
        menuResultsArr: json.menuItems
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
        recipeResultsArr: json.results
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
      let temp = json.nutrition.nutrients;
      json.nutrition.nutrients = temp.slice(0,8);
      console.log(json);
      this.setState({
        recipeDetails: json,
        currentFocus: "recipeDetail"
      });
      window.scrollTo(0, 0);
    });
  };

  clickMenu = (e) => {
    const id = e.target.getAttribute('data-id');
    fetch('/api/menu/item/' + id, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
      this.setState({
        menuDetails: json,
        currentFocus: "menuDetail"
      });
      window.scrollTo(0, 0);
    });
  };

  clickGrocery = (e) => {
    const id = e.target.getAttribute('data-id');
    console.log(id);
    fetch('/api/grocery/items/' + id, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      console.log(json);
      this.setState({
        groceryDetails: json,
        currentFocus: "groceryDetail"
      });
      window.scrollTo(0, 0);
    });
  };

  backButton = (e) => {
    this.setState({
      currentFocus: e.target.getAttribute('data-id')
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
                {this.state.recipeResultsArr.map((recipe) => {
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
                {this.state.groceryResultsArr.map((recipe) => {
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickGrocery} />
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
                {this.state.menuResultsArr.map((recipe) => {
                  return <SearchResultsMenu key={recipe.id} resultName={recipe.title} restaurantChain={recipe.restaurantChain} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickMenu} />
                })}
              </ResultsContainer>
            </MainLoggedIn>
          );
          break;
        case "recipeDetail":
          return (
            <MainLoggedIn>
              <RecipeDetails result={this.state.recipeDetails} />
            </MainLoggedIn>
          );
          break;
        case "groceryDetail":
          return (
            <MainLoggedIn>
              <GroceryDetails clickBack={this.backButton} result={this.state.groceryDetails} />
            </MainLoggedIn>
          );
          break;
        case "menuDetail":
          return (
            <MainLoggedIn>
              <MenuDetails clickBack={this.backButton} result={this.state.menuDetails} />
            </MainLoggedIn>
          );
          break;
        default:
          return (
            <MainLoggedIn>
              <HeroJumbotron />
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
                {this.state.recipeResultsArr.map((recipe) => {
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
                {this.state.groceryResultsArr.map((recipe) => {
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickGrocery} />
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
              {console.log(this.state.menuResultsArr)}
                {this.state.menuResultsArr.map((recipe) => {
                  return <SearchResultsMenu key={recipe.id} resultName={recipe.title} restaurantChain={recipe.restaurantChain} resultId={recipe.id} imageLink={recipe.image} clickHandler={this.clickMenu} />
                })}
              </ResultsContainer>
            </Main>
          );
          break;
        case "recipeDetail":
          return (
            <Main>
              <RecipeDetails clickBack={this.backButton} result={this.state.recipeDetails} />
            </Main>
          );
          break;
        case "groceryDetail":
            return (
              <Main>
                <GroceryDetails clickBack={this.backButton} result={this.state.groceryDetails} />
              </Main>
            );
            break;
        case "menuDetail":
            return (
              <Main>
                <MenuDetails clickBack={this.backButton} result={this.state.menuDetails} />
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
