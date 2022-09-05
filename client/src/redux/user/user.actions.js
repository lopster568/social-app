import UserTypes from "./user.types";
import * as api from '../../api/auth.js'

export const getCurrentUser = () => async (dispatch) => {
    try {
        const { data } = await api.currentUser()
        dispatch({
            type: UserTypes.GET_CURRENT_USER,
            paylaod: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const setCurrentUser = (user) => ({
    type: UserTypes.SET_CURRENT_USER,
    payload: user
})