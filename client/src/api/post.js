import axios from 'axios'

const url = 'http://localhost:8000/post/'

export const getPosts = () => axios.get(url)
export const createPost = (data) => axios.post(url, data)
export const likePost = (postId) => axios.patch(`${url+postId}/like`)