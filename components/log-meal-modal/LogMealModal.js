import React, { Component, Fragment } from 'react';
import Months from '../../constants/MonthsInYear';
import Years from '../../constants/YearsConstant';
import Days from '../../constants/DaysInMonth';
import Meals from '../../constants/MealsOfTheDay';

class LogMealModal extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            thisYear: date.getFullYear(),
            thisMonth: date.getMonth(),
            todaysDate: date.getDate(),
            daysInMonth: null,
            selectedYear: date.getFullYear(),
            selectedMonth: parseInt(date.getMonth()) + 1,
            selectedDate: date.getDate(),
            selectedFullDate: null,
            yearsArr: Years,
            monthsInYear: Months,
            daysArr: Days,
            recipeDetails: props.results,
            userId: props.userId,
            mealsArr: Meals,
            selectedMeal: 'Breakfast',
            modalType: props.modalType
        };
    }

    componentDidMount() {

    }

    UNSAFE_componentWillMount() {
        this.setState(this.calculateDaysInMonth.call(null, this.state.thisYear, this.state.thisMonth));
    }

    calculateDaysInMonth = (year, month) => {
        return {
            daysInMonth: new Date(year, month + 1, 0).getDate()
        }
    }

    getPreviousMonthInfo = () => {
        let state = {};
        if (this.state.thisMonth > 0) {
            state.thisMonth = this.state.thisMonth - 1;
            state.thisYear = this.state.thisYear;
        }
        else {
            state.thisMonth = 11;
            state.thisYear = this.state.thisYear - 1;
        }
        Object.assign(state, this.calculateDaysInMonth.call(null, state.thisYear, state.thisMonth));
        this.setState(state);
    }

    getNextMonthInfo = () => {
        let state = {};
        if (this.state.month < 11) {
            state.thisMonth = this.state.thisMonth + 1;
            state.thisYear = this.state.thisYear;
        }
        else {
            state.thisMonth = 0;
            state.thisYear = this.state.thisYear + 1;
        }
        Object.assign(state, this.calculateDaysInMonth.call(null, state.thisYear, state.thisMonth));
        this.setState(state);
    }

    selectYear = (e) => {
        let dataYear = parseInt(e.target.value);

        console.log(`Year: ${dataYear}`);
        this.setState((state) => ({
            selectedYear: dataYear
        }), () => {

        });
    }

    selectMonth = (e) => {
        let dataMonth = parseInt(e.target.value) + 1;

        console.log(`Month: ${dataMonth}`);

        this.setState((state) => ({
            selectedMonth: dataMonth
        }), () => {

        });
    }

    selectDate = (e) => {
        let dataDate = e.target.value;

        console.log(`Date: ${dataDate}`);

        this.setState((state) => ({
            selectedMonth: dataDate
        }), () => {

        });
    }

    selectMeal = (e) => {
        let dataMeal = e.target.value;

        this.setState((state) => ({
            selectedMeal: dataMeal
        }), () => {

        });
    }

    logMeal = (e) => {
        e.preventDefault();

        let result = this.state.recipeDetails;
        let itemId = this.state.recipeDetails.id;
        let logDate = `${this.state.selectedMonth}-${this.state.selectedDate}-${this.state.selectedYear}`;
        let logMeal = this.state.selectedMeal;
        let type = this.state.modalType;
        let image = this.state.recipeDetails.image;
        let title = this.state.recipeDetails.title;

        let body = result;

        fetch(`/api/food/add/${this.state.userId}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                result: result,
                itemId: itemId,
                date: logDate,
                meal: logMeal,
                type: type,
                image: image,
                title: title
            })

        }).then((res) => {
            console.log(res);
        }).catch((res) => {
            console.log(res);
        });

        fetch(`/api/${type}/add`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ body })

        })
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) });
    }

    render() {
        return (
            <Fragment>
                <div className='modal fade' id='logMealModal' tabIndex='-1' role='dialog'>
                    <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h5 className='modal-title' id='logMealModalTitle'>Log This Meal</h5>
                                <button type='button' className='close close-btn' data-dismiss='modal'>
                                    <i className="far fa-window-close"></i>
                                </button>
                            </div>
                            <div className='modal-body'>
                                <form onSubmit={(e) => this.logMeal(e)}>
                                    <div className='form-row'>
                                        <div className='col'>
                                            <select defaultValue={this.state.thisMonth} className='form-control btn btn-outline-dark' onChange={(e) => this.selectMonth(e)}>
                                                {this.state.monthsInYear.map((month, i) => {
                                                    if (i < this.state.thisMonth + 1) {
                                                        return (
                                                            <option key={`log-meal-modal-${month}-${i}`} value={i} data-store={i + 1} data-month={i + 1}>{month}</option>
                                                        );
                                                    }
                                                    else {
                                                        return (
                                                            <Fragment key={`log-meal-modal-${month}-${i}`}></Fragment>
                                                        );
                                                    }
                                                })}
                                            </select>
                                        </div>
                                        <div className='col'>
                                            <select defaultValue={this.state.todaysDate} className='form-control btn btn-outline-dark' onChange={(e) => this.selectDate(e)}>
                                                {this.state.daysArr.map((day, i) => {
                                                    if (day < this.state.daysInMonth) {
                                                        if (day < this.state.todaysDate + 1) {
                                                            return (
                                                                <option key={`log-meal-modal-${day}-${i + 1}`} value={day} data-store={day} data-date={day}>{day}</option>
                                                            );
                                                        }
                                                        else {
                                                            return (
                                                                <Fragment key={`log-meal-modal-${day}-${i + 1}`}></Fragment>
                                                            );
                                                        }
                                                    }
                                                    else {
                                                        return (
                                                            <Fragment key={`log-meal-modal-${day}-${i + 1}`}></Fragment>
                                                        );
                                                    }
                                                })}
                                            </select>
                                        </div>
                                        <div className='col'>
                                            <select defaultValue={this.state.thisYear} className='form-control btn btn-outline-dark' onChange={(e) => this.selectYear(e)}>
                                                {this.state.yearsArr.map((year, i) => {
                                                    if (year < this.state.thisYear + 1) {
                                                        return (
                                                            <option key={`log-meal-modal-${year}-${i}`} value={year} data-store={year} data-year={year}>{year}</option>
                                                        );
                                                    }
                                                    else {
                                                        return (
                                                            <Fragment key={`log-meal-modal-${year}-${i}`}></Fragment>
                                                        );
                                                    }
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='col'>
                                            <select defaultValue='Breakfast' className='form-control btn btn-outline-dark meal-selector' onChange={(e) => this.selectMeal(e)}>
                                                {this.state.mealsArr.map((meal, i) => {
                                                    return (
                                                        <option key={`log-meal-modal-${meal}-${i}`} value={meal} data-store={meal} data-meal={meal}>{meal}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='col'>
                                            <button type='submit' className='btn btn-outline-dark btn-block modal-btn' data-toggle='modal' data-target='#logMealModal' onClick={(e) => this.logMeal(e)}>Log Meal</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`

                    .meal-selector{
                        margin-top: 25px;
                    }

                    select {
                        height: 50px;
                    }

                    .modal-btn {
                        display: block;
                        margin: 0 auto;
                        margin-top: 25px;
                    }

                `}</style>
            </Fragment>
        );
    }
}

export default LogMealModal;