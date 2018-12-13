import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    searchBy: 'title',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'SEARCH_BY_TITLE':
            return {
                ...state,
                searchBy: 'title'
            };
        case 'SEARCH_BY_CONTENT':
            return {
                ...state,
                searchBy: 'content'
            };
        case 'SEARCH_BY_ALL':
            return {
                ...state,
                searchBy: 'all'
            };
        default:
            return state;
    }
};