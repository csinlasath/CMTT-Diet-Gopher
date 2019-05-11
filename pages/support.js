import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Main from '../compositions/main';
import MainLoggedIn from '../compositions/mainLoggedIn';
import SearchRecipes from '../components/search-recipes';
import SearchMenuItems from '../components/search-menu-items';
import SearchGrocery from '../components/search-grocery';
import ResultsContainer from '../components/results-container';
import SearchResultsRecipes from '../components/search-results-recipes';
import Techicons from '../components/technology/techicons';
import SearchResultsMenu from '../components/search-results-menu';
import RecipeDetails from '../components/recipes-details';
import GroceryDetails from '../components/grocery-details';
import MenuDetails from '../components/menu-details';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userId: "808",
      currentFocus: "8675309",
      previousFocus: "8675309",
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
      favorite: false,
      favoritesArr: []
    };
  };

  componentDidMount() {
    fetch('/api/user/verify').then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        isLoggedIn: true
      });
    });
  }

  pickSearch = (e) => {
    this.setState({
      currentFocus: e.target.name,
      favorite: false
    });
  };

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
    fetch(searchQuery, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((json) => {
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
    fetch(searchQuery, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((json) => {
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
      this.setState({
        recipeResultsArr: json.results
      });
    });
    document.dispatchEvent(new MouseEvent('click'));
  };

  //when you click an item in search results
  clickItem = (e) => {
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-type');
    const details = `${type}${Details}`
    fetch(`/api/${type}/${id}`, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      if (json.nutrition.nutrients) {
        let temp = json.nutrition.nutrients;
        json.nutrition.nutrients = temp.slice(0, 8);
      };
      if (json.analyzedInstructions.length > 1) {
        for (let i = 1; i < json.analyzedInstructions.length; i++) {
          json.analyzedInstructions[0].steps.push(json.analyzedInstructions[i].steps[0])
        };
      };
      console.log(json);
      this.setState({
        [details]: json,
        previousFocus: this.state.currentFocus,
        currentFocus: type + "Detail"
      });
      window.scrollTo(0, 0);
    });
    fetch(`/api/favorited/${this.state.userId}`, {
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
  };

  //When you click an item in favorites
  clickFavorite = (e) => {
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-type');
    const details = type + "Details"
    // /api/favmenu/:id
    fetch(`/api/fav${type}/${id}`, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        [details]: json,
        previousFocus: this.state.currentFocus,
        currentFocus: type + "Detail",
        favorite: true
      });
      window.scrollTo(0, 0);
    });
  };

  backButton = (e) => {
    if (this.state.previousFocus === "favorites") {
      fetch(`/api/favorited/${this.state.userId}`, {
      }).then((res) => {
        return res.json();
      }).then((json) => {
        this.setState({
          favoritesArr: json
        });
      });
    };
    this.setState({
      currentFocus: this.state.previousFocus,
      favorite: false
    });
  };

  //when you click the favorites heart in details
  favoriteClick = (e) => {
    const id = e.target.getAttribute('data-id');
    const type = e.target.getAttribute('data-type');
    let body = [];
    let toFavorite = {};
    toFavorite.userId = this.state.userId;
    toFavorite.type = type;
    toFavorite.itemId = id;
    switch (type) {
      case "recipe":
        body = this.state.recipeDetails;
        body.type = "recipe";
        toFavorite.image = this.state.recipeDetails.image;
        toFavorite.title = this.state.recipeDetails.title;
        break;
      case "grocery":
        body = this.state.groceryDetails;
        body.type = "grocery";
        toFavorite.image = this.state.groceryDetails.images[1];
        toFavorite.title = this.state.groceryDetails.title;
        break;
      case "menu":
        body = this.state.menuDetails;
        body.type = "menu";
        toFavorite.image = this.state.menuDetails.images[1];
        toFavorite.title = this.state.menuDetails.title;
        toFavorite.restaurantChain = this.state.menuDetails.restaurantChain;
        break;
    };
    if (!this.state.favorite && this.state.isLoggedIn) {
      fetch(`/api/${type}/add`,
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
      fetch('/api/add/favorite',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ toFavorite })
        })
        .then((result) => {
          this.setState({
            favorite: true
          });
        })
        .catch(function (res) { console.log(res) });
    }
    else if (this.state.favorite && this.state.isLoggedIn) {
      fetch('/api/delete/favorite',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({ toFavorite })
        })
        .then(result => {
          this.setState({
            favorite: false
          });
        })
        .catch(function (res) { console.log(res) });
    };
  };

  //when you click favorites in the navbar
  favorites = () => {
    fetch(`/api/favorited/${this.state.userId}`, {
    }).then((res) => {
      return res.json();
    }).then((json) => {
      this.setState({
        favoritesArr: json,
        currentFocus: "favorites"
      });
    });
  };

  clickClose = () => {
    document.dispatchEvent(new MouseEvent('click'));
  }

  render() {
    if (this.state.isLoggedIn) {
      switch (this.state.currentFocus) {
        case "recipes":
          return (
            <MainLoggedIn favorites={this.favorites}>
              <SearchRecipes formStateChange={this.primarySearchFormChange} clickClose={this.clickClose} btnClickFunc={this.recipeSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies} />
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
            <MainLoggedIn favorites={this.favorites}>
              <SearchGrocery formStateChange={this.primarySearchFormChange} clickClose={this.clickClose} btnClickGrocery={this.grocerySearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
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
            <MainLoggedIn favorites={this.favorites}>
              <SearchMenuItems formStateChange={this.primarySearchFormChange} clickClose={this.clickClose} btnClickMenu={this.menuSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
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
            <MainLoggedIn favorites={this.favorites}>
              <RecipeDetails result={this.state.recipeDetails} favorite={this.state.favorite} clickBack={this.backButton} favoriteClick={this.favoriteClick} />
            </MainLoggedIn>
          );
          break;
        case "groceryDetail":
          return (
            <MainLoggedIn favorites={this.favorites}>
              <GroceryDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.groceryDetails} favoriteClick={this.favoriteClick} />
            </MainLoggedIn>
          );
          break;
        case "menuDetail":
          return (
            <MainLoggedIn favorites={this.favorites}>
              <MenuDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.menuDetails} favoriteClick={this.favoriteClick} />
            </MainLoggedIn>
          );
          break;
        case "favorites":
          return (
            <MainLoggedIn favorites={this.favorites}>
              <ResultsContainer>
                {this.state.favoritesArr.map((favorite) => {
                  return <SearchResultsMenu key={favorite.itemId} resultName={favorite.title} restaurantChain={favorite.restaurantChain} resultId={favorite.itemId} type={favorite.type} back="favorites" imageLink={favorite.image} clickHandler={this.clickFavorite} />
                })}
              </ResultsContainer>
            </MainLoggedIn>
          );
          break;
        default:
          return (
            <MainLoggedIn favorites={this.favorites}>
              <h1 className='text-center'>F.A.Q. (Frequently Asked Questions)</h1>
            </MainLoggedIn>
          );
      };
    } else {
      switch (this.state.currentFocus) {
        case "recipes":
          return (
            <Main>
              <SearchRecipes formStateChange={this.primarySearchFormChange} clickClose={this.clickClose} btnClickFunc={this.recipeSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies} />
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
              <SearchGrocery formStateChange={this.primarySearchFormChange} clickClose={this.clickClose} btnClickGrocery={this.grocerySearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
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
              <SearchMenuItems formStateChange={this.primarySearchFormChange} clickClose={this.clickClose} btnClickMenu={this.menuSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} />
              <ResultsContainer>
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
              <div>
                <h1 className="text-center upcomingFeatures">Upcoming Features In Production</h1>
                <h3 className="features">Suggestions</h3>
                <p>Our team plans on adding in a suggestions feature that will give the user and idea of what they will want to eat based on calorie consumption and diet or allergy restrictions.</p>
                <h3 className="features">Social Media Authentication</h3>
                <p>Another feature we plan to add is allowing users to log in through their social media platforms, for example google or facebook.</p>
                <h3 className="features">Auto-Logging</h3>
                <p>We plan on adding in a toggleable feature that will automatically log meals that the user put in their meal planner when the time of that meal has passed.</p>
                <h1 className='text-center FAQ'>F.A.Q. (Frequently Asked Questions)</h1>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Q: What if I have a food allergy, how do I get recipes without the food I'm allergic to?</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Q: Can I use the website if I don't have an account?</Nav.Link>
                        </Nav.Item>
                        <Nav.Link eventKey="third">Q: Do you guys have jobs in web development?</Nav.Link>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <h5>Click on search, then click "Refine Search", then go the the box that says "Allergies/Intolerence" and there you can pick your allergy.</h5>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <h5>Yes you can use the website without and account, but many of our premium features require you to have an account.</h5>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <h5>No we do not but, you can check out our portfolio pages in the footer of every page.</h5>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
                
                <style jsx>{`
                  #questionOne{
                    color: black;
                  }
                  #questionTwo{
                    color:black;
                  }
                  #questionThree{
                    color: black;
                  }
                  .features{
                    margin-top: 5%;
                  }
                  .FAQ{
                    margin-top: 10%;
                    margin-bottom: 5%;
                  }
                `}</style>
              </div>
            </Main>
          );
      };
    }
  };
};

export default Support;
