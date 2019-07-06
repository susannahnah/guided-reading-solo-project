const allBooksReducer = (state = [{title:''}], action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return action.payload;
        default:
            return state;
    }
}


export default allBooksReducer;