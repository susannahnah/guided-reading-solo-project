const readingLevelsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LEVELS':
            return action.payload;
        default:
            return state;
    }
}


export default readingLevelsReducer;