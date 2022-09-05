import axios from 'axios'

const loginUrl = 'http://localhost:8000/user/login'
const signUpUrl = 'http://localhost:8000/user/signup'
const logoutUrl = 'http://localhost:8000/user/logout'
const currentUserUrl = 'http://localhost:8000/user/'

export const currentUser = () => axios.get(currentUserUrl)
export const loginUser = (credentials) => axios.post(loginUrl, credentials)
export const signUpUser = (details) => axios.post(signUpUrl, details)
export const logout = () => axios.post(logoutUrl)