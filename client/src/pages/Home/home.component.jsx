import { Stack } from "@mui/material";
import Rightbar from "../../components/Rightbar/rightbar.component";
import Sidebar from "../../components/Sidebar/sidebar.component";
import Add from "../../components/Add/add.component";
import Feed from "../../components/Feed/feed.component";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getFeedPosts } from '../../api/post.js'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getFeedPosts().then(resp => setPosts(resp.data))
    }, [])

    const currentUser = useSelector(state => state.user.currentUser)
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Sidebar />
            <Feed posts={posts} />
            <Rightbar />
            <Add />
        </Stack>
    );
}

export default Home;
