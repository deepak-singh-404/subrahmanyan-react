const initialState = {
    todos: []
}


//action is a function which retun object

//based on different action type, we perform different task

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(obj => {
                    return obj.id !== action.payload
                })
            }
        case "EDIT_TODO":
            return {
                ...state,
                todos: state.todos.map(t => t.id === action.payload.id ? action.payload : t)
            }
        default:
            return state
    }
}

export default userReducer