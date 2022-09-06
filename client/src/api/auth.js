import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/user/' })

API.interceptors.request.use((req) => {
    const isUserStored = Boolean(localStorage.getItem('persist:root'))
    if (isUserStored) {
        const storedUser = localStorage.getItem('persist:root')
        const storedToken = JSON.parse(JSON.parse(storedUser).user).token
        req.headers.authorization = `Bearer ${storedToken}`
    }
    return req
})

export const currentUser = () => API.get('/')
export const loginUser = (credentials) => API.post('/login', credentials)
export const signUpUser = (details) => API.post('/signup', details)
