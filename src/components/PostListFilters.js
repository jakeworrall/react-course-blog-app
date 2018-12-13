import React from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {setTextFilter, searchByTitle, searchByContent, searchByAll, setStartDate, setEndDate} from "../actions/filters";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSearchByChange = (e) => {
        if (e.target.value === 'title'){
            this.props.searchByTitle();
        } else if (e.target.value === 'content'){
            this.props.searchByContent();
        } else if (e.target.value === 'all'){
            this.props.searchByAll();
        }
    };

    render() {
        return(
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                            type="text"
                            className="text-input"
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                            placeholder="Search Posts"
                        />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSearchByChange}
                        >
                            <option value="title">By Title</option>
                            <option value="content">By Content</option>
                            <option value="all">By All</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            endDate={this.props.filters.endDate}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            displayFormat="DD/MM/YYYY"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    searchByTitle: () => dispatch(searchByTitle()),
    searchByContent: () => dispatch(searchByContent()),
    searchByAll: () => dispatch(searchByAll()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);