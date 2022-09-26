import { AlertTypes } from "./alert.types";

export const setAlert = (message) => ({
    type: AlertTypes.SET_ALERT,
    payload: message
})