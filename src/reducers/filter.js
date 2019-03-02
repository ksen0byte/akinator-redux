const filterReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FILTER':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    positive: action.positive
                }
            ];
        case 'REMOVE_FILTER':
            return state.filter(filter => filter.id !== action.id);
        case 'REVERT_FILTER':
            return state.map(filter => {
                if (filter.id === action.id) filter.positive = !filter.positive;
                return filter;
            });
        case 'REMOVE_ALL_FILTERS':
            return [];
        default:
            return state
    }
};

export default filterReducer;