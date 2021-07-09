const initialState = {
    videos:[]
   
}




const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TRENDING_VIDEOS":
            return {
                ...state,
                videos: action.payload
            }
        default:
            return state
    }
}

export default userReducer