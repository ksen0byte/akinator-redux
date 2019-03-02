let filterId = 0;

export const addFilter = filter => ({
    type: 'ADD_FILTER',
    id: filterId++,
    ...filter
});

export const removeFilter = filter => ({
    type: 'REMOVE_FILTER',
    ...filter
});

export const revertFilter = filter => ({
    type: 'REVERT_FILTER',
    ...filter
});

export const removeAllFilters = () => ({
    type: 'REMOVE_ALL_FILTERS',
});