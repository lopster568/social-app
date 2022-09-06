import PostsTypes from "./posts.types";
import * as api from '../../api/post.js'


export const fetchPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts()
        dispatch({
            type: PostsTypes.FETCH_POSTS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({
            type: PostsTypes.CREATE_POST,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}