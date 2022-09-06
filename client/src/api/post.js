import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' })
API.interceptors.request.use((req) => {
    const storedUser = Boolean(localStorage.getItem('persist:root'))
    if(storedUser) {
        const storedToken = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).token
        req.headers.authorization = `Bearer ${storedToken}`
    }
    return req
})

export const getPosts = () => API.get('/post')
export const createPost = (data) => API.post('/post', data)
export const likePost = (postId) => API.patch(`/post/${postId}/like`)