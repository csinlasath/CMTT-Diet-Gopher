import React, { Component, Fragment } from 'react';
import ResultsContainer from '../results-container';
import SearchResultsMenu from '../search-results-menu';

const CalendarHeader = (props) => {
    return (
        <Fragment>
            <div className='calendar-row calendar-header' id='rowHeader'>
                <div className='calendar-box prev-btn fas' id='previousMonth' role='button' onClick={props.previousMonth} tabIndex='0'><i className="far fa-caret-square-left"></i></div>
                <div className='calendar-box calendar-title lead'>{`${props.monthsShort[props.month]} ${props.year}`}</div>
                <div className='calendar-box next-btn' id='previousMonth' role='button' onClick={props.nextMonth} tabIndex='0'><i className="far fa-caret-square-right"></i></div>
            </div>
            <style jsx>{`
                .prev-btn, .next-btn {
                    cursor: pointer;
                    outline: none;
                    color: #1a1a1a;
                }

                .prev-btn:before, .next-btn:before {
                    position: relative;
                    top: 0;
                    content: "";
                    display: inline-block;
                    width: 0.6em;
                    height: 0.6em;
                    transform: rotate(-45deg);
                }
                
                .prev-btn:before {
                    border-left: 1px solid lightgray;
                    transform: rotate(-45deg);
                    margin-left: 0.3em;
                    
                }

                .prev-btn:hover:before {
                    border-left-color: #1a1a1a;
                    border-top-color: #1a1a1a;
                }

                .next-btn:before {
                    border-right: 1px solid lightgray;
                    transform: rotate(45deg);
                    margin-right: 0.3em;
                }

                .next-btn:hover:before {
                    border-right-color: #1a1a1a;
                    border-top-color: #1a1a1a;
                }

                .prev-btn:hover, .next-btn:hover {
                    background-color: #1a1a1a;
                    color: white;
                }

                .calendar-row {
                    display: flex;
                    flex-flow: row nowrap;
                    width: 100%;
                    justify-content: center;
                }

                .calendar-header {
                    border-bottom: 1px solid lightgray;
                    padding: 20px;
                    margin-bottom: 20px;
                    flex-grow: 1;
                    flex-basis: 0;
                }

                .calendar-title {
                    flex-grow: 5;
                    flex-basis: max-content;
                    text-align: center;
                    color: #1a1a1a;
                }

                .calendar-box {
                    align-items: center;
                    display: flex;
                    flex-flow: row nowrap;
                    flex-grow: 1;
                    flex-basis: 0;
                    justify-content: center;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    font-size: 26px;
                }
            `}</style>
        </Fragment>
    );
}

const CalendarDaysOfWeek = (props) => {
    return (
        <Fragment>
            <div className='calendar-row calendar-weekdays'>
                {props.daysOfWeek.map((dayOfWeek) => {
                    return (
                        <div key={`dayLabel-${dayOfWeek}`} className='calendar-box' id={`day-${dayOfWeek}`}><h4 className='weekday-text'>{dayOfWeek}</h4></div>
                    )
                })}
            </div>
            <style jsx>{`
                .calendar-row {
                    display: flex;
                    flex-flow: row nowrap;
                    width: 100%;
                    justify-content: space-evenly;
                }

                .calendar-weekdays {
                    flex-grow: 1;
                    flex-basis: 0;
                }

                .calendar-box {
                    align-items: center;
                    display: flex;
                    flex-flow: row nowrap;
                    flex-grow: 1;
                    flex-basis: 0;
                    justify-content: center;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    font-size: 22px;
                    color: #1a1a1a;
                    margin-top: 20px;
                }

                .weekday-text {
                    font-weight: bold;
                }
            `}</style>
        </Fragment>
    );
}

const DaysOfTheMonth = (props) => {
    let weekRows;
    let day;
    let currentDateNumber;
    let currentDate;
    let isValidDate;
    let weekColumns = Array.apply(null, { length: 7 }).map(Number.call, Number);
    let firstDayOfMonth = props.firstDayOfMonth.getDay();
    weekRows = Array.apply(null, { length: 6 }).map(Number.call, Number);
    day = props.startingDateNumber + 1 - firstDayOfMonth;
    while (day > 1) {
        day -= 7;
    }
    day -= 1;
    return (
        <Fragment>
            <div>
                {weekRows.map((week, i) => {
                    currentDateNumber = day + i * 7;
                    return (
                        <div key={`week-${i}`} className='calendar-row'>
                            {weekColumns.map((day, i) => {
                                currentDateNumber += 1;
                                isValidDate = currentDateNumber > 0 && currentDateNumber <= props.daysInMonth;
                                let today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getUTCDate());
                                if (isValidDate) {
                                    currentDate = new Date(props.year, props.month, currentDateNumber);
                                    if (props.disablePast && currentDate < constructor.todaysDate) {

                                    }
                                }
                                if (currentDateNumber >= 1 && currentDateNumber <= props.daysInMonth) {
                                    return (
                                        <div key={`${props.month + 1}-${currentDateNumber}-${props.year}`} className={`calendar-box`} role='button' tabIndex='0' data-month={props.month + 1} data-year={props.year} data-date={currentDateNumber} id={`${props.month + 1}-${currentDateNumber}-${props.year}`} onClick={(e) => props.selectDateFunc(e, props.year, props.month, currentDateNumber)} data-toggle='modal' data-target='#calendarPlanModal'>{currentDateNumber}</div>
                                    );
                                }
                                else {
                                    return (
                                        <div key={`not-valid-date-${props.month + 1}-${currentDateNumber}-${props.year}`} className='calendar-box-hidden'></div>
                                    );
                                }
                            })}
                        </div>);
                })}
            </div>
            <style jsx>{`
                .calendar-row {
                    display: flex;
                    flex-flow: row nowrap;
                    width: 100%;
                    justify-content: space-evenly;
                }

                .calendar-box {
                    align-items: center;
                    display: flex;
                    flex-flow: row nowrap;
                    flex-grow: 1;
                    flex-basis: 0;
                    justify-content: center;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    font-size: 20px;
                    color: #1a1a1a;
                    height: 75px;
                    margin-top: 20px;
                }

                .calendar-box-hidden {
                    align-items: center;
                    display: flex;
                    flex-flow: row nowrap;
                    flex-grow: 1;
                    flex-basis: 0;
                    justify-content: center;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                    font-size: 20px;
                    color: #1a1a1a;
                    height: 75px;
                    margin-top: 20px;
                }

                .calendar-box:hover {
                    border: 1px solid #1a1a1a;
                    color: #1a1a1a;
                    cursor: pointer;
                }

                .box-selected {
                    background-color: #1a1a1a;
                    color: #ffffff;
                }

                .box-selected:hover {
                    color: #ffffff;
                }
            `}</style>
        </Fragment>
    );
}

class MealPlanCalendar extends Component {
    constructor(props) {
        super(props);
        let date = new Date();
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth(),
            selectedYear: date.getFullYear(),
            selectedMonth: date.getMonth(),
            selectedDate: date.getDate(),
            selectedDateTime: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            selectedFullDate: "",
            selectedElement: "",
            startingDateNumber: 1,
            weekNumbers: false,
            minDate: this.props.minDate ? this.props.minDate : null,
            disablePastDate: this.props.disablePastDate ? this.props.disablePast : false,
            days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthsLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            firstDayOfMonth: null,
            daysInMonth: null,
            clickCount: 0,
            firstClickId: null,
            secondClickId: null,
            plannedMeals: []
        };
    };

    componentDidMount() {
        //FetchPlanned Items for User Here
    }

    UNSAFE_componentWillMount() {
        this.setState(this.calculateYearAndMonth.call(null, this.state.year, this.state.month));
    }

    calculateFirstDayInMonth = (year, month) => {
        return new Date(year, month, 1);
    }

    calculateDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    }

    calculateYearAndMonth = (year, month) => {
        if (this.state.selectedElement) {
            if (this.state.selectedMonth != month || this.state.selectedYear != year) {
                console.log(`Removed to class from ${this.state.selectedElement}`);
            }
            else {
                console.log(`Removed to class from ${this.state.selectedElement}`);
            }
        }
        return {
            firstDayOfMonth: new Date(year, month, 1),
            daysInMonth: new Date(year, month + 1, 0).getDate()
        }
    }

    getPreviousMonth = () => {
        let state = {};
        if (this.state.month > 0) {
            state.month = this.state.month - 1;
            state.year = this.state.year;
        }
        else {
            state.month = 11;
            state.year = this.state.year - 1;
        }
        Object.assign(state, this.calculateYearAndMonth.call(null, state.year, state.month));
        this.setState(state);
    }

    getNextMonth = () => {
        let state = {};
        if (this.state.month < 11) {
            state.month = this.state.month + 1;
            state.year = this.state.year;
        }
        else {
            state.month = 0;
            state.year = this.state.year + 1;
        }
        Object.assign(state, this.calculateYearAndMonth.call(null, state.year, state.month));
        this.setState(state);
    }

    selectDate = (e, year, month, date) => {
        let dataYear = e.target.dataset.year;
        let dataMonth = e.target.dataset.month;
        let dataDate = e.target.dataset.date;
        let dataId = e.target.id;
        let dataElement = e.target;
        let dataFullDate = `${e.target.dataset.month}/${e.target.dataset.date}/${e.target.dataset.year}`;

        if (this.state.selectedElement) {
            this.state.selectedElement.classList.remove('box-selected');
        }
        e.target.classList.add('box-selected');

        if (this.state.clickCount === 0) {
            this.setState((state) => ({
                selectedYear: dataYear,
                selectedMonth: dataMonth,
                selectedDate: dataDate,
                selectedDateTime: new Date(year, month, date),
                selectedElement: dataElement,
                selectedFullDate: dataFullDate,
                clickCount: state.clickCount + 1,
                firstClickId: dataId,
                secondClickId: null
            }), () => {
                console.log(this.state);
                console.log(this.state.firstDayOfMonth.getUTCDay());
            });
        }
        if (this.state.clickCount === 1) {
            this.setState((state) => ({
                selectedYear: dataYear,
                selectedMonth: dataMonth,
                selectedDate: dataDate,
                selectedDateTime: new Date(year, month, date),
                selectedElement: dataElement,
                selectedFullDate: dataFullDate,
                clickCount: state.clickCount - 1,
                firstClickId: null,
                secondClickId: dataId
            }), () => {
                console.log(this.state);
                console.log(this.state.firstDayOfMonth.getUTCDay());
            });
        }
    }

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
                favorite: true
            });
            window.scrollTo(0, 0);
        });
    };

    backButton = (e) => {
        if (this.state.previousFocus === "favorites") {
            fetch("/api/favorited/" + this.state.userId, {
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

    render() {
        return (
            <Fragment>
                <div className='' id='planningCalendar'>
                    <div className='' id='innerPlanningCalendar'>
                        <CalendarHeader monthsShort={this.state.monthsShort} month={this.state.month} year={this.state.year} previousMonth={this.getPreviousMonth} nextMonth={this.getNextMonth} />
                        <CalendarDaysOfWeek daysOfWeek={this.state.days} />
                        <DaysOfTheMonth firstDayOfMonth={this.state.firstDayOfMonth} year={this.state.year} month={this.state.month} daysInMonth={this.state.daysInMonth} startingDateNumber={this.state.startingDateNumber} selectedDate={this.state.selectedDate} weekNumbers={this.state.weekNumbers} disablePastDate={this.state.disablePastDate} minDate={this.state.minDate} selectDateFunc={this.selectDate} />

                        <Fragment>
                            <div className='modal fade' id='calendarPlanModal' tabIndex='-1' role='dialog'>
                                <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                                    <div className='modal-content'>
                                        <div className='modal-header'>
                                            <h5 className='modal-title' id='calendarPlanTitle'>{`Meals for ${this.state.selectedFullDate}`}</h5>
                                            <button type='button' className='close close-btn' data-dismiss='modal'>
                                                <i className="far fa-window-close"></i>
                                            </button>
                                        </div>
                                        <div className='modal-body'>
                                            {this.state.plannedMeals.length > 0 ? (this.state.plannedMeals.map((plannedMeal) => {
                                                return (
                                                    <SearchResultsMenu key={plannedMeal.itemId} resultName={plannedMeal.title} restaurantChain={plannedMeal.restaurantChain} resultId={plannedMeal.itemId} type={plannedMeal.type} back="plan" imageLink={plannedMeal.image} clickHandler={this.clickFavorite} />
                                                );
                                            })) : (<h3 className='calendar-modal-text text-center'>Doesn't look like you planned or eaten anything for this day.</h3>)}
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
                        </Fragment>

                    </div>
                </div>
                <style jsx>{`
                    #innerPlanningCalendar {
                        border: 1px solid lightgray;
                    }

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
    };
}

export default MealPlanCalendar;