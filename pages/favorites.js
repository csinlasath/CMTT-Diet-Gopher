import React, { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import MainLoggedIn from '../compositions/mainLoggedIn';
import ResultsContainer from '../components/results-container';
import SearchResultsMenu from '../components/search-results-menu';
import RecipeDetails from '../components/recipes-details';
import GroceryDetails from '../components/grocery-details';
import MenuDetails from '../components/menu-details';

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            userId: "808",
            currentFocus: "favorites",
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
            favoritesArr: [],
            comments: [],
            commentInput: ""
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
                fetch(`/api/favorited/${this.state.userId}`, {
                }).then((res) => {
                    return res.json();
                }).then((json) => {
                    this.setState({
                        favoritesArr: json,
                        currentFocus: "favorites"
                    });
                });
            });
        });
    };

    primarySearchFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //When you click an item in favorites
    clickFavorite = (e) => {
        const id = e.target.getAttribute('data-id');
        const type = e.target.getAttribute('data-type');
        const details = type + "Details"
        console.log(id, type, details);
        fetch('/api/fav' + type + '/' + id, {
        }).then((res) => {
            return res.json();
        }).then((json) => {
            console.log(json);
            this.setState({
                [details]: json,
                previousFocus: this.state.currentFocus,
                currentFocus: type + "Detail",
                favorite: true,
                currentItem: id
            });
            if (type === "recipe") {
                fetch('/api/comments/all/' + id, {
                }).then((res) => {
                    if (res) {
                        return res.json();
                    }
                }).then((json) => {
                    this.setState({
                        comments: json
                    });
                });
            };
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

    clickClose = () => {
        document.dispatchEvent(new MouseEvent('click'));
    };

    commentSubmit = () => {
        var Filter = require('bad-words'),
            filter = new Filter();
        let comment = {};
        comment.body = filter.clean(this.state.commentInput);
        comment.userName = this.state.username;
        comment.itemId = this.state.currentItem;
        comment.userId = this.state.userId
        fetch("/api/comment/add/" + this.state.currentItem,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ comment })
            }).then((res) => {
                if (res) {
                    return res.json();
                }
            }).then((json) => {
                this.setState({
                    comments: json,
                    commentInput: ""
                });
            })
            .catch(function (res) { console.log(res) });
    };

    deleteComment = (e) => {
        const id = e.target.getAttribute('data-id');
        fetch("/api/comments/delete/" + id + "/" + this.state.currentItem, {
        }).then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                comments: json
            });
        });
    };

    render() {
        switch (this.state.currentFocus) {
            case "recipeDetail":
                return (
                    <MainLoggedIn favorites={this.favorites}>
                        <RecipeDetails result={this.state.recipeDetails} comments={this.state.comments} onChange={this.primarySearchFormChange} commentInput={this.state.commentInput} userId={this.state.userId} commentSubmit={this.commentSubmit} favorite={this.state.favorite} clickBack={this.backButton} delete={this.deleteComment} favoriteClick={this.favoriteClick} />
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
        };
    };
};
export default Favorites;