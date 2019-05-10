import React, { Fragment } from "react";
import Months from '../constants/Months';
import Days from '../constants/Days';

const FoodPlanModal = (props) => (
    <Fragment>
        <button className="btn btn-outline-dark" data-toggle="modal" data-target="#modalStuff">Plan Your Meals</button>
        <div className="modal fade" id="modalStuff" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="planModalTitle">Time To Be Healthy</h5>
                        <button type="button" className="close close-btn" data-dismiss="modal">
                            <i className="far fa-window-close"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <select id="mealTime" className="form-control btn-outline-dark">
                            <option>Breakfast</option>
                            <option>Morning Snack</option>
                            <option>Lunch</option>
                            <option>Evening Snack</option>
                            <option>Dinner</option>
                            <option>Late Night Snack</option>
                            <option>Other</option>
                        </select>
                        <select id="mealMonth" className="form-control btn-outline-dark">
                            {Months.map(value => <option key={value} data-value={value}>{value}</option>)}
                        </select>
                        <select id="mealDay" className="form-control btn-outline-dark">
                            {Days.map(value => <option key={value} data-value={value}>{value}</option>)}
                        </select>
                        </div>
                        <button className="btn btn-outline-dark"  data-dismiss="modal" onClick ={(e) => { props.planClick(e) }}>Submit</button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                #mealTime{
                    marign-left: 2%;
                    width: 15vw;
                }
                #mealMonth{
                    margin-left: 10%;
                    width: 15vw;
                }
                #mealDay{
                    margin-left: 1%;
                    width: 7vw;
                }
                .modal-btn{
                    float: right;
                }
            `}</style>
        </div>
    </Fragment>
);

export default FoodPlanModal