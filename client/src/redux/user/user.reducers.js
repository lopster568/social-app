import UserTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    token: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                token: action.payload.token
            }
        default:
            return state
    }
}

export default userReducer