import { styled } from '@mui/material/styles'
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar, MenuItem, Menu } from "@mui/material";
import BlindIcon from '@mui/icons-material/Blind';
import MailIcon from '@mui/icons-material/Mail'
import { Notifications } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
        display: "flex"
    }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }} >Navbar</Typography>
                <BlindIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase bgcolor={'background.default'} color="text.primary" placeholder='Search...' /> </Search>
                <Icons>
                    <Badge badgeContent={4} color="error" >
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={3} color="error" >
                        <Notifications />
                    </Badge>
                    <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} src="https://cdn-icons-png.flaticon.com/512/168/168882.png" />
                </Icons>
                <UserBox>
                    <Avatar onClick={() => setOpen(true)} sx={{ width: 30, height: 30 }} src="https://cdn-icons-png.flaticon.com/512/168/168882.png" />
                    <Typography variant="span" >John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    );
}

export default Navbar;