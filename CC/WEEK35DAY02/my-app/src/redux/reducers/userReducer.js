const initialState = {
    profile:{},
    isAuthenticated:false
   
}




const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PROFILE":
            return {
                ...state,
                profile: action.payload,
                isAuthenticated: true
            }
        default:
            return state
    }
}

export default userReducer