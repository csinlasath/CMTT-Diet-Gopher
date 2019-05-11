import React, { Component, Fragment } from 'react';

class PlanMealModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <div className='modal fade' id='planMealModal' tabIndex='-1' role='dialog'>
                    <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='calendarPlanTitle'>Plan Meals</h5>
                                <button type='button' className='close close-btn' data-dismiss='modal'>
                                    <i className="far fa-window-close"></i>
                                </button>
                            </div>
                            <div className='modal-body'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <a className='btn btn-outline-dark modal-btn' href='/'>Add Meals</a>
                                    </div>
                                    <div className='col-md-6'>
                                        <a className='btn btn-outline-dark modal-btn' href='/'>Log Meals</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`

                    .calendar-modal-text {
                        margin-bottom: 100px;
                    }

                    .modal-btn {
                        display: block;
                        margin: 0 auto;
                        margin-bottom: 10px;
                    }
                    
                `}</style>
            </Fragment>
        );
    }
}

export default PlanMealModal;