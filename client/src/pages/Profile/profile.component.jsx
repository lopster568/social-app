import { Stack, Box, TextField, Typography, Button, MenuItem, Menu } from "@mui/material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import Rightbar from "../../components/Rightbar/rightbar.component";
import Sidebar from "../../components/Sidebar/sidebar.component";
import { StyledAvatar } from "./profile.styled";
import FileBase from 'react-file-base64';
import { useState } from "react";

const Profile = () => {
    const { displayName, username, email, avatar } = useSelector(state => state.user.currentUser)
    const [anchor, setAnchor] = useState(null)
    const updatedData = {

    }
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Sidebar />
            <Box flex={4} p={2} sx={{ width: '100vh', height: '95vh' }} >
                <Container sx={{ padding: '3%' }} maxWidth='sm' >
                    <Typography mb={2} variant='h3' >Your Profile</Typography>
                    <Stack spacing={5}>
                        {
                            avatar ? (
                                <StyledAvatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                    R
                                </StyledAvatar>
                            ) : (
                                <StyledAvatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                    {displayName.charAt(0)}
                                </StyledAvatar>
                            )
                        }
                        <Button variant='contained' sx={{ maxWidth: '15vh' }} onClick={(e) => setAnchor(e.currentTarget)} >Change Pic</Button>
                        <TextField onChange={(e) => console.log(e.target.name)} label='Name' variant="outlined" sx={{ maxWidth: '30vh' }} value={displayName} name='name' />
                        <TextField label='Username' variant="outlined" sx={{ maxWidth: '30vh' }} value={username} />
                        <TextField label='Email' variant="outlined" sx={{ maxWidth: '30vh' }} value={email} />
                        <TextField label='Password' variant="outlined" sx={{ maxWidth: '30vh' }} placeholder='**********' />
                        <Button variant="outlined" sx={{ maxWidth: '30vh' }} >Save</Button>
                    </Stack>
                </Container>
            </Box>
            <Menu
                anchorEl={anchor}
                onClose={() => setAnchor(null)}
                open={Boolean(anchor)}
            >
                <MenuItem>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => { }} />
                </MenuItem>
            </Menu>
            <Rightbar />
        </Stack>
    );
}

export default Profile;
