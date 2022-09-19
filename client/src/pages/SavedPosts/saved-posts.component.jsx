import { Paper, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { getSavedPosts } from "../../api/post";
import Add from "../../components/Add/add.component";
import ImageSection from "../../components/ImageSection/image-section.component";
import Rightbar from "../../components/Rightbar/rightbar.component";
import Sidebar from "../../components/Sidebar/sidebar.component";

function SavedPosts() {
    const [savedPosts, setSavedPosts] = useState([])
    useEffect(() => {
        getSavedPosts().then(resp => setSavedPosts(resp.data))
    }, [])
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Sidebar />
            <Box flex={4} p={2} sx={{ width: '100%', height: '95vh' }}  >
                <Paper sx={{ padding: '3%', maxWidth:'sm'}} elevation={3}   >
                    <Typography variant='h4' >Your Saved Posts</Typography>
                    <ImageSection posts={savedPosts} />
                </Paper>
            </Box>
            <Rightbar />
            <Add />
        </Stack>
    );
}

export default SavedPosts;