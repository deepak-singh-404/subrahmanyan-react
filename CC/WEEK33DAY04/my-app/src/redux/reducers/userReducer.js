const initialState = {
    products:[]
   
}


//action is a function which retun object

//based on different action type, we perform different task

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default userReducer