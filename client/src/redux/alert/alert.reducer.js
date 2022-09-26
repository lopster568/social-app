import { AlertTypes } from "./alert.types";

const alertReducer = (state = "" , action) => {
    switch (action.type) {
        case AlertTypes.SET_ALERT:
           return action.payload
        default:
            return state
    }
}

export default alertReducer