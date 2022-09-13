import PostTypes from "./posts.types";

const INITIAL_STATE = []

const postsReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case PostTypes.FETCH_POSTS:
            return (   
                action.payload
            )
        case PostTypes.CREATE_POST:
            return (
                [...state, action.payload]
            )
        default:
           return state
    }
}

export default postsReducer