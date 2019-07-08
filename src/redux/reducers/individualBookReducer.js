const initialDetails = {
    "id": 0,
    "title": '',
    "author": '',
    "image":  '',
    "level": '',
    "grade": '',
    "summary":'',
}


const individualBookReducer = (state = initialDetails, action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_BOOK':
            return action.payload;
        default:
            return state;
    }
}

export default individualBookReducer;