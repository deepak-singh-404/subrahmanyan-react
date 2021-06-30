const initialState = {
    user: {},
    posts: [],
    counter: 0
}



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
            }
        case "SET_POSTS":
            return {
                ...state,
                posts: action.payload,
            }
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