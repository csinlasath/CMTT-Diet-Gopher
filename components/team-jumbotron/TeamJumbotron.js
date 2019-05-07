import React, { Fragment } from 'react';

const TeamJumbotron = (props) => (
    <Fragment>
        <div className='container'>
            <div className='card bg-secondary'>
                <div className='card-body'>
                    <h3 className='text-center team-header'>Meet the Team</h3>
                    <div id='teamCarousel' className='carousel slide carousel-fade' data-ride='carousel'>
                        <ol className='carousel-indicators'>
                            <li data-target='heroCarousel' data-slide-to='0' className='active bg-dark'></li>
                            <li data-target='heroCarousel' data-slide-to='1' className='bg-dark'></li>
                            <li data-target='heroCarousel' data-slide-to='2' className='bg-dark'></li>
                            <li data-target='heroCarousel' data-slide-to='3' className='bg-dark'></li>
                        </ol>
                        <div className='carousel-inner'>
                            <div className='card carousel-item active text-center' data-interval="5000">
                                <div className='row no-gutters'>
                                    <div className='col-md-4'>
                                        <img src='static/img/chrispicture.jpeg' className='card-img d-block' height='345px' width='345px' alt='...'></img>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Christopher Sinlasath</h5>
                                            <p className='card-text'>Backend Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card carousel-item text-center' data-interval="5000">
                                <div className='row no-gutters'>
                                    <div className='col-md-4'>
                                        <img src='static/img/masonpicture.jpeg' className='card-img d-block w-100' height='345px' width='345px' alt='...'></img>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Mason Dobbs</h5>
                                            <p className='card-text'>Front End Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card carousel-item text-center' data-interval="5000">
                                <div className='row no-gutters'>
                                    <div className='col-md-4'>
                                        <img src='static/img/tiffanypicture.jpg' className='card-img d-block w-100' height='345px' width='345px' alt='...'></img>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Tiffany Keller</h5>
                                            <p className='card-text'>Front End Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card carousel-item text-center' data-interval="5000">
                                <div className='row no-gutters'>
                                    <div className='col-md-4'>
                                        <img src='static/img/travispicture.jpg' className='card-img d-block w-100' height='345px' width='345px' alt='...'></img>
                                    </div>
                                    <div className='col-md-8'>
                                        <div className='card-body'>
                                            <h5 className='card-title'>Travis Morris</h5>
                                            <p className='card-text'>Backend Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .card-img-overlay {
                margin-top: 20px;
            }

            .card-title{
                margin-top: 55px;
                vertical-align: middle;
            }

            .carousel-text-wrapper {
                padding: 20px 0px 0px 10px;
                border: solid 1px #000000;
                margin-bottom: 10%;
            }

            .team-header {
                margin-bottom: 20px;
            }

    `}</style>
        </div>
    </Fragment>
);

export default TeamJumbotron;