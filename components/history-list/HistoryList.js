import React, { Component, Fragment } from 'react';
import MediaQuery from 'react-responsive';
import ResultsContainer from '../results-container';
import SearchResultsMenu from '../search-results-menu';

class HistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            userName: props.username,
            userId: props.userId,
            historyArr: props.historyArr
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
                    <h1>Search History</h1>
                    {this.props.historyArr.length > 0 ? (this.props.historyArr.map((history, i) => {
                        if (i < 10) {
                            return (
                                <SearchResultsMenu key={`history.itemId-${i}`} resultName={history.title} restaurantChain={history.restaurantChain} resultId={history.itemId} type={history.type} back="plan" imageLink={history.image} clickHandler={this.clickFavorite} />
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
                                            <MediaQuery maxDeviceWidth={767}>
                                                <button type='button' className='btn btn-outline-dark mobile' name="recipes" id='history-search-btn-recipe' onClick={(e) => { this.props.btnClickFunc(e) }}>Search Recipes</button>
                                                <button type='button' className='btn btn-outline-dark mobile' name="menu" id='history-search-btn-menu' onClick={(e) => { this.props.btnClickFunc(e) }}>Search Menu Items</button>
                                                <button type='button' className='btn btn-outline-dark mobile' name="grocery" id='history-search-btn-grocery' onClick={(e) => { this.props.btnClickFunc(e) }}>Search Grocery</button>
                                            </MediaQuery>
                                            <MediaQuery minDeviceWidth={768}>
                                                <button type='button' className='btn btn-outline-dark desktop' name="recipes" id='history-search-btn-recipe' onClick={(e) => { this.props.btnClickFunc(e) }}>Search Recipes</button>
                                                <button type='button' className='btn btn-outline-dark desktop' name="menu" id='history-search-btn-menu' onClick={(e) => { this.props.btnClickFunc(e) }}>Search Menu Items</button>
                                                <button type='button' className='btn btn-outline-dark desktop' name="grocery" id='history-search-btn-grocery' onClick={(e) => { this.props.btnClickFunc(e) }}>Search Grocery</button>
                                            </MediaQuery>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )}
                </ResultsContainer>
                <style jsx>{`
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