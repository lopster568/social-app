import { Stack, Box, Grid, TextField, Paper, Typography, Switch } from "@mui/material";
import Rightbar from "../../components/Rightbar/rightbar.component";
import Sidebar from "../../components/Sidebar/sidebar.component";
import Add from "../../components/Add/add.component";
import Feed from "../../components/Feed/feed.component";
import { useSelector } from "react-redux";

const Home = () => {
    const currentUser = useSelector(state => state.user.currentUser)
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Sidebar />
            <Feed />

            {
                currentUser ? (
                    <>
                        <Rightbar />
                        <Add />
                    </>
                ) : null
            }
        </Stack>
    );
}

export default Home;
