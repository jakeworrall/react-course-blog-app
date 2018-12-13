export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const searchByTitle = () => ({
    type: 'SEARCH_BY_TITLE'
});

export const searchByContent = () => ({
    type: 'SEARCH_BY_CONTENT'
});

export const searchByAll = () => ({
    type: 'SEARCH_BY_ALL'
});

export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});