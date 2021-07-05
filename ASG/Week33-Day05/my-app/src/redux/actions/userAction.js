export const setTodos = (data)=>{
    return {
        type:"SET_TODO",
        payload: data
    }
}

export const editTodo = (data)=>{
    return {
        type:"EDIT_TODO",
        payload: data
    }
}

export const deleteTodo = (data)=>{
    return {
        type:"DELETE_TODO",
        payload: data
    }
}


