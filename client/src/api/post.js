import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/post' })
API.interceptors.request.use((req) => {
    const storedUser = Boolean(localStorage.getItem('persist:root'))
    if(storedUser) {
        const storedToken = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).token
        req.headers.authorization = `Bearer ${storedToken}`
    }
    return req
})

export const getPosts = () => API.get('/')
export const createPost = (data) => API.post('/', data)
export const likePost = (postId) => API.patch(`/${postId}/like`)
export const savePost = (postId) => API.post(`/${postId}/save`)
export const commentPost = (postId, comment) => API.patch(`/${postId}/comment`, comment)
export const deletePost = (postId) => API.delete(`/${postId}`)
export const getSavedPosts = () => API.post(`/saved`)