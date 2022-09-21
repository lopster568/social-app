import Feed from "../../components/Feed/feed.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFeedPosts } from '../../api/post.js'
import { toggleLoading } from "../../redux/post-loading/post-loading.actions";
import PostLoadingSkeleton from "../../components/PostLoadingSkeleton/post-loading-skeleton.component";



const Home = () => {
    const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.post_loading)

    useEffect(() => {
        getFeedPosts().then(resp => {
            setPosts(resp.data)
            dispatch(toggleLoading())
        })
        return () => {
            dispatch(toggleLoading())
        } 
    }, [])

    return (
        isLoading ? (
            <PostLoadingSkeleton />
        ) : (
            <Feed posts={posts} />
        )
    );
}

export default Home;