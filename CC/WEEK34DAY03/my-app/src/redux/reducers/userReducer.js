const initialState = {
    counter: 0
}


//action is a function which retun object

//based on different action type, we perform different task

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "DECREMENT_COUNTER":
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default userReducer