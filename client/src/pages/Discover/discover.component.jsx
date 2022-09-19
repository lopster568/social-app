import { Stack} from '@mui/material'
import Rightbar from "../../components/Rightbar/rightbar.component";
import Sidebar from "../../components/Sidebar/sidebar.component";
import Add from "../../components/Add/add.component";
import Feed from "../../components/Feed/feed.component";
import { useEffect, useState } from "react";
import { getPosts } from '../../api/post.js'

const Discover = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(resp => setPosts(resp.data))
    }, [])
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Sidebar />
            <Feed posts={posts} />
            <Rightbar />
            <Add />
        </Stack>

    );
}

export default Discover;