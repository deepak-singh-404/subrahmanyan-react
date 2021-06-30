export const setUser = (data) => {
    return {
        type: "SET_USER",
        payload: data
    }
}

export const setPosts = (data) => {
    return {
        type: "SET_POSTS",
        payload: data
    }
}

export const incrementCounter = (data) => {
    return {
        type: "INCREMENT_COUNTER"
    }
}

export const decrementCounter = (data) => {
    return {
        type: "DECREMENT_COUNTER",
    }
}

