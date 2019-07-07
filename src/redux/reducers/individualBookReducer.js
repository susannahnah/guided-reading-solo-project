const individualBookReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_BOOK':
            return action.payload;
        default:
            return state;
    }
}

export default individualBookReducer;