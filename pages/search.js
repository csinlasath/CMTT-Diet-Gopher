import React, { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import Main from '../compositions/main';
import MainLoggedIn from '../compositions/mainLoggedIn';
import SearchRecipes from '../components/search-recipes';
import SearchMenuItems from '../components/search-menu-items';
import SearchGrocery from '../components/search-grocery';
import ResultsContainer from '../components/results-container';
import SearchResultsRecipes from '../components/search-results-recipes';
import SearchResultsMenu from '../components/search-results-menu';
import RecipeDetails from '../components/recipes-details';
import GroceryDetails from '../components/grocery-details';
import MenuDetails from '../components/menu-details';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isOpen: false,
            userId: "808",
            currentFocus: "recipes",
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
            commentInput: "",
            type:  "recipe"
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

    pickSearch = (e) => {
        this.setState({
            currentFocus: e.target.name,
            favorite: false
        });
        window.scrollTo(0, 0);
    };

    primarySearchFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    typeSearchChange = (e) => {
        this.setState({
            currentFocus: e,
            favorite: false
        });
        window.scrollTo(0, 0);
    };


    grocerySearchSubmit = (e) => {
        e.preventDefault();
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


    menuSearchSubmit = (e) => {
        e.preventDefault();
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

    recipeSearchSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false
        });
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
        const details = type + "Details"
        fetch('/api/' + type + '/' + id, {
        }).then((res) => {
            return res.json();
        }).then((json) => {
            if (json.nutrition.nutrients) {
                let temp = json.nutrition.nutrients;
                json.nutrition.nutrients = temp.slice(0, 8);
            };
            if (type === 'recipe') {
                if (json.analyzedInstructions.length > 1) {
                    for (let i = 1; i < json.analyzedInstructions.length; i++) {
                        json.analyzedInstructions[0].steps.push(json.analyzedInstructions[i].steps[0])
                    };
                };
            }
            this.setState((state) => ({
                [details]: json,
                previousFocus: this.state.currentFocus,
                currentFocus: type + "Detail",
                currentItem: id,
                type: type
            }), () => {
                if (this.state.userId !== "808") {
                    let body = [];
                    let toHistory = {};
                    toHistory.userId = this.state.userId;
                    toHistory.type = type;
                    toHistory.itemId = id;
                    switch (type) {
                        case "recipe":
                            body = this.state.recipeDetails;
                            body.type = "recipe";
                            toHistory.image = this.state.recipeDetails.image;
                            toHistory.title = this.state.recipeDetails.title;
                            break;
                        case "grocery":
                            body = this.state.groceryDetails;
                            body.type = "grocery";
                            toHistory.image = this.state.groceryDetails.images[1];
                            toHistory.title = this.state.groceryDetails.title;
                            break;
                        case "menu":
                            body = this.state.menuDetails;
                            body.type = "menu";
                            toHistory.image = this.state.menuDetails.images[1];
                            toHistory.title = this.state.menuDetails.title;
                            toHistory.restaurantChain = this.state.menuDetails.restaurantChain;
                            break;
                    };
                    fetch(`/api/history/${this.state.userId}/${type}/add/`, {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        method: "POST",
                        body: JSON.stringify({
                            itemId: toHistory.itemId,
                            image: toHistory.image,
                            title: toHistory.title,
                            restaurantChain: toHistory.restaurantChain
                        })
                    })
                        .then((res) => {
                            console.log(res);
                        }).catch((res) => {
                            console.log(res);
                        });
                }
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

    refineClick = () => {
        console.log(this.state.isOpen);
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        if (this.state.isLoggedIn) {
            switch (this.state.currentFocus) {
                case "recipes":
                    return (
                        <MainLoggedIn favorites={this.favorites}>
                            <SearchRecipes formStateChange={this.primarySearchFormChange} openClick={this.refineClick} isOpen={this.state.isOpen} clickClose={this.clickClose} btnClickFunc={this.recipeSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies} />
                            <ResultsContainer>
                                {this.state.recipeResultsArr.map((recipe) => {
                                    return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} type="recipe" imageLink={recipe.image} clickHandler={this.clickItem} modalType={this.state.type}/>
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
                                    return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} type="grocery" imageLink={recipe.image} clickHandler={this.clickItem} modalType={this.state.type}/>
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
                                    return <SearchResultsMenu key={recipe.id} resultName={recipe.title} restaurantChain={recipe.restaurantChain} resultId={recipe.id} type="menu" imageLink={recipe.image} clickHandler={this.clickItem} modalType={this.state.type}/>
                                })}
                            </ResultsContainer>
                        </MainLoggedIn>
                    );
                    break;
                case "recipeDetail":
                    return (
                        <MainLoggedIn favorites={this.favorites}>
                            <RecipeDetails result={this.state.recipeDetails} comments={this.state.comments} onChange={this.primarySearchFormChange} commentInput={this.state.commentInput} userId={this.state.userId} commentSubmit={this.commentSubmit} favorite={this.state.favorite} clickBack={this.backButton} delete={this.deleteComment} favoriteClick={this.favoriteClick} modalType={this.state.type}/>
                        </MainLoggedIn>
                    );
                    break;
                case "groceryDetail":
                    return (
                        <MainLoggedIn favorites={this.favorites}>
                            <GroceryDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.groceryDetails} favoriteClick={this.favoriteClick} modalType={this.state.type}/>
                        </MainLoggedIn>
                    );
                    break;
                case "menuDetail":
                    return (
                        <MainLoggedIn favorites={this.favorites}>
                            <MenuDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.menuDetails} favoriteClick={this.favoriteClick} modalType={this.state.type}/>
                        </MainLoggedIn>
                    );
                    break;
                case "favorites":
                    return (
                        <MainLoggedIn favorites={this.favorites}>
                            <ResultsContainer>
                                {this.state.favoritesArr.map((favorite) => {
                                    return <SearchResultsMenu key={favorite.itemId} resultName={favorite.title} restaurantChain={favorite.restaurantChain} resultId={favorite.itemId} type={favorite.type} back="favorites" imageLink={favorite.image} clickHandler={this.clickFavorite} modalType={this.state.type}/>
                                })}
                            </ResultsContainer>
                        </MainLoggedIn>
                    );
                    break;
            };
        } else {
            switch (this.state.currentFocus) {
                case "recipes":
                    return (
                        <Main>
                            <SearchRecipes formStateChange={this.primarySearchFormChange} openClick={this.refineClick} clickClose={this.clickClose} btnClickFunc={this.recipeSearchSubmit} typeStateChange={this.typeSearchChange} searchValueQuery={this.state.recipeQuery} searchValueDiet={this.state.recipeSearchDiet} searchValueType={this.state.recipeSearchType} searchValueCuisine={this.state.recipeSearchCuisine} searchValueInclude={this.state.recipeSearchInclude} searchValueExclude={this.state.recipeSearchExclude} searchValueAllergies={this.state.recipeSearchAllergies} />
                            <ResultsContainer>
                                {this.state.recipeResultsArr.map((recipe) => {
                                    return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} type="recipe" imageLink={recipe.image} clickHandler={this.clickItem} modalType={this.state.type}/>
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
                                    return <SearchResultsRecipes key={recipe.id} resultName={recipe.title} resultId={recipe.id} type="grocery" imageLink={recipe.image} clickHandler={this.clickItem} modalType={this.state.type}/>
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
                                    return <SearchResultsMenu key={recipe.id} resultName={recipe.title} restaurantChain={recipe.restaurantChain} resultId={recipe.id} type="menu" imageLink={recipe.image} clickHandler={this.clickItem} modalType={this.state.type}/>
                                })}
                            </ResultsContainer>
                        </Main>
                    );
                    break;
                case "recipeDetail":
                    return (
                        <Main>
                            <RecipeDetails clickBack={this.backButton} comments={this.state.comments} onChange={this.primarySearchFormChange} commentInput={this.state.commentInput} userId={this.state.userId} commentSubmit={this.commentSubmit} favorite={this.state.favorite} favoriteClick={this.favoriteClick} delete={this.deleteComment} result={this.state.recipeDetails} modalType={this.state.type}/>
                        </Main>
                    );
                    break;
                case "groceryDetail":
                    return (
                        <Main>
                            <GroceryDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.groceryDetails} favoriteClick={this.favoriteClick} modalType={this.state.type}/>
                        </Main>
                    );
                    break;
                case "menuDetail":
                    return (
                        <Main>
                            <MenuDetails clickBack={this.backButton} favorite={this.state.favorite} result={this.state.menuDetails} favoriteClick={this.favoriteClick} modalType={this.state.type}/>
                        </Main>
                    );
                    break;
            };
        }
    };
};
export default Search;