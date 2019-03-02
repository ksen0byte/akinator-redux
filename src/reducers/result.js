const resultReducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case 'ADD_FILTER':
            return {
                counter: state.counter + 1
            };
        case 'REMOVE_ALL_FILTERS':
            return {
                counter: 0
            };
        default:
            return state;
    }
};

export default resultReducer;