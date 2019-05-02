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
// import SignedInHero from '../components/signed-in-hero/';
import SearchResultsMenu from '../components/search-results-menu';
import RecipeDetails from '../components/recipes-details';
import GroceryDetails from '../components/grocery-details';
import MenuDetails from '../components/menu-details';
import fetch from 'isomorphic-unfetch';
import FavoriteRecipes from '../components/favorites-recipes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      userId: "808",
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
      itemId: "",
      favorite: false
    };
  };

  pickSearch = (e) => {
    this.setState({
      currentFocus: e.target.name,
      favorite: false
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
      favorite: false
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

  clickItem = (e) => {
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-type');
    const details = type + "Details"
    fetch('/api/' + type + '/' + id, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      if (json.nutrition.nutrients) {
        let temp = json.nutrition.nutrients;
        json.nutrition.nutrients = temp.slice(0, 8);
      }
      this.setState({
        [details]: json,
        currentFocus: type + "Detail"
      });
      window.scrollTo(0, 0);
    });
    fetch('/api/favorited/' + this.state.userId, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      for (let i = 0; i < json.length; i++) {
        if (json[i].itemId === id && json[i].type === type) {
          this.setState({
            favorite: true
          });
        };
      };
    });
  }

  backButton = (e) => {
    this.setState({
      currentFocus: e.target.getAttribute('data-id'),
      favorite: false
    });
  };

  favoriteClick = (e) => {
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-type');
    let body = this.state.recipeDetails;
    let bodyGrocery = this.state.groceryDetails;
    let bodyMenu = this.state.menuDetails;
    let body2 = {};
    body2.userId = this.state.userId;
    body2.type = type;
    body2.itemId = id
    if (type === "recipe" && !this.state.favorite && this.state.isLoggedIn) {
      fetch("/api/recipes/add",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ body })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) });
    }
    else if (type === "grocery" && !this.state.favorite && this.state.isLoggedIn) {
      fetch("/api/grocery/add",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ bodyGrocery })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) });
    }
    else if (type === "menu" && !this.state.favorite && this.state.isLoggedIn) {
      fetch("/api/menu/add",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ bodyMenu })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) });
    }
    if (!this.state.favorite && this.state.isLoggedIn) {
      fetch("/api/add/favorite",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ body2 })
        })
        .catch(function (res) { console.log(res) });
      this.setState({
        favorite: true
      });
    }
    else if (this.state.favorite && this.state.isLoggedIn) {
      fetch("/api/delete/favorite",
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ body2 })
        })
        .catch(function (res) { console.log(res) });
      this.setState({
        favorite: false
      });
    }
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
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} type="recipe" imageLink={recipe.image} clickHandler={this.clickItem} />
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
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} type="grocery" imageLink={recipe.image} clickHandler={this.clickItem} />
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
                  return <SearchResultsMenu key={recipe.id} resultName={recipe.title} restaurantChain={recipe.restaurantChain} resultId={recipe.id} type="menu" imageLink={recipe.image} clickHandler={this.clickItem} />
                })}
              </ResultsContainer>
            </MainLoggedIn>
          );
          break;
        case "recipeDetail":
          return (
            <MainLoggedIn>
              <RecipeDetails result={this.state.recipeDetails} favorite={this.state.favorite} clickBack={this.backButton} favoriteClick={this.favoriteClick} />
            </MainLoggedIn>
          );
          break;
        case "groceryDetail":
          return (
            <MainLoggedIn>
              <GroceryDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.groceryDetails} favoriteClick={this.favoriteClick} />
            </MainLoggedIn>
          );
          break;
        case "menuDetail":
          return (
            <MainLoggedIn>
              <MenuDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.menuDetails} favoriteClick={this.favoriteClick} />
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
              {/* <SignedInHero btnClickFavorite={this.displayFavorites} /> */}
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
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} type="recipe" imageLink={recipe.image} clickHandler={this.clickItem} />
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
                  return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} type="grocery" imageLink={recipe.image} clickHandler={this.clickItem} />
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
                  return <SearchResultsMenu key={recipe.id} resultName={recipe.title} restaurantChain={recipe.restaurantChain} resultId={recipe.id} type="menu" imageLink={recipe.image} clickHandler={this.clickItem} />
                })}
              </ResultsContainer>
            </Main>
          );
          break;
        case "recipeDetail":
          return (
            <Main>
              <RecipeDetails clickBack={this.backButton} favorite={this.state.favorite} favoriteClick={this.favoriteClick} result={this.state.recipeDetails} />
            </Main>
          );
          break;
        case "groceryDetail":
          return (
            <Main>
              <GroceryDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.groceryDetails} favoriteClick={this.favoriteClick} />
            </Main>
          );
          break;
        case "menuDetail":
          return (
            <Main>
              <MenuDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.menuDetails} favoriteClick={this.favoriteClick} />
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
