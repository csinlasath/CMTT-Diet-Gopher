import React, { Component, Fragment } from 'react';
import ResultsContainer from '../results-container';
import SearchResultsMenu from '../search-results-menu';
import RecipeDetails from '../recipes-details';

class HistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {},
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
            favoritesArr: [],
            currentItem: "53409",
            commentInput: "",
            comments: [],
            historyArr: [],
        };
    };

    //When you click an item in favorites
    clickFavorite = (e) => {
        const id = e.target.getAttribute('data-id');
        const type = e.target.getAttribute('data-type');
        const details = type + "Details"
        // /api/favmenu/:id
        fetch('/api/fav' + type + '/' + id, {
        }).then((res) => {
            return res.json();
        }).then((json) => {
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

    render() {
        return (
            <Fragment>
                <ResultsContainer>
                    <h1 className='text-center page-header'>Search History</h1>
                    {this.props.historyArr.length > 0 ? (this.props.historyArr.map((history, i) => {
                        if (i < 10) {
                            return (
                                <SearchResultsMenu key={`history.itemId-${i}`} resultName={history.title} restaurantChain={history.restaurantChain} resultId={history.itemId} type={history.type} back="plan" imageLink={history.image} />
                            );
                        }
                        else {
                            <Fragment></Fragment>
                        }
                    })) : (
                            <Fragment>
                                <div className='jumbotron jumbotron-fluid empty-array-jumbotron'>
                                    <div className='container'>
                                        <div className='row'>
                                            <h3 className='empty-array-text'>Doesn't look like you have searched anything.</h3>
                                        </div>
                                        <div className='row button-group'>
                                            <a className='btn btn-outline-dark mobile' name="recipes" id='history-search-btn-recipe' href='/search'>Start Searching</a>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )}
                </ResultsContainer>
                <style jsx>{`
                        .page-header {
                            margin-bottom: 25px;
                        }

                        .empty-array-text {
                            margin: 0 auto;
                            margin-bottom: 50px;
                        }

                        .modal-btn {
                            display: block;
                            margin: 0 auto;
                            margin-bottom: 10px;
                        }

                        #empty-array-jumbotron {
                             height: fit-content;
                        }

                        .button-group {
                            margin: 0 auto;
                            width: fit-content;
                            text-align: center;
                        }

                        .desktop {
                            margin: 5px;
                        }

                        .mobile {
                            margin: 5px auto
                        }

                        @media 
                `}</style>
            </Fragment>
        );
    };
}

export default HistoryList;