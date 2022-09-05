import { Box, Container, Typography, Stack} from '@mui/material'
import Rightbar from "../../components/Rightbar/rightbar.component";
import Sidebar from "../../components/Sidebar/sidebar.component";
import Add from "../../components/Add/add.component";
const Discover = () => {
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Sidebar />
            <Box flex={4} p={2} sx={{ width: '100%', height: '95vh' }} >
                <Typography>Discovery</Typography>
            </Box>
            <Rightbar />
            <Add />
        </Stack>

    );
}

export default Discover;