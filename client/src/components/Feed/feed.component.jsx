import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/posts/posts.actions";
import Post from "../Post/post.component";

const Feed = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    const posts = useSelector(state => state.posts)
    const currentUser = useSelector(state => state.user.currentUser)
    const userId = currentUser?._id
    
    return (
        <Box sx={{ minHeight: '100vh' }} flex={4} p={2}  >
            {
                posts.map(post => {
                    const index = post.likes.findIndex(id => id === userId)
                    return (
                        <Post key={post._id} post={post} liked={(index === -1) ? false : true } />
                    )
                })
            }
        </Box>
    )
}

export default Feed