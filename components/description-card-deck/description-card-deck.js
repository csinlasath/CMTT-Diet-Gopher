import React, { Fragment } from 'react';

const DescriptionCardDeck = (props) => (
    <Fragment>
        <div className="container">
            <div className="card-deck">
                <div className="card">
                    <i className="fas fa-user-cog text-secondary"></i>
                    <div className="card-body">
                        <h5 className="card-title">Personal Profile</h5>
                        <p className="card-text">Allergic to something or on a special meal plan?  Configure a profile to find what you can eat.</p>
                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-bookmark text-secondary"></i>
                    <div className="card-body">
                        <h5 className="card-title">Stay Organized</h5>
                        <p className="card-text">Plan your meals.  Keep a active history of your past and future meals.</p>
                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-search text-secondary"></i>
                    <div className="card-body">
                        <h5 className="card-title">Search</h5>
                        <p className="card-text">Refine your search based on multiple search criteria.</p>
                    </div>
                </div>
            </div>
        </div>
        <style jsx> {`
                .card {
                  text-align: center;
                }

                .card i {
                  font-size: 75px;
                  margin-top: 25px;
                }

                .card-deck {
                    margin-bottom: 100px;
                }

                i:hover {
                  transition: all 1s;
                  transform: rotate(360deg);
                }
            `}</style>
    </Fragment>
);

export default DescriptionCardDeck;