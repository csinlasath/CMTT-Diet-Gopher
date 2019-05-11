import React, { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import MainLoggedIn from '../compositions/mainLoggedIn';
import ResultsContainer from '../components/results-container';
import SearchResultsMenu from '../components/search-results-menu';
import RecipeDetails from '../components/recipes-details';
import GroceryDetails from '../components/grocery-details';
import MenuDetails from '../components/menu-details';
import MealPlanCalendar from '../components/meal-plan-calendar';

class Plan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userId: "808",
            currentFocus: "8675309",
            previousFocus: "8675309",
            recipeDetails: [],
            menuDetails: [],
            groceryDetails: [],
            itemId: "",
            favorite: false,
            allItems: []
        };
    };

    componentDidMount() {
        fetch('/api/user/verify').then((res, err) => {
            if (err) throw err;
            return res.json();
        }).then((json) => {
            console.log('This is the json from checking if logged in');
            console.log(json);
            this.setState({
                isLoggedIn: true,
                user: json,
                username: json.username,
                userId: json._id
            });
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
        switch (this.state.currentFocus) {
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
                        <ResultsContainer>
                            <MealPlanCalendar />
                        </ResultsContainer>
                    </MainLoggedIn>
                );
        };
    };
};
export default Plan;
