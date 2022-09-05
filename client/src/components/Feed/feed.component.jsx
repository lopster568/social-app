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
    return(
        <Box sx={{height: '100vh'}} flex={4} p={2}  >
            {
                posts.map(post => (
                    <Post key={post._id} post={post} />
                ))
            }
        </Box>
    )
}

export default Feed