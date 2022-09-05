import { AppBar, Grid, Typography, Box, InputBase, Badge, Avatar, MenuItem, Menu, Button, MenuList } from "@mui/material";
import { Notifications } from '@mui/icons-material';
import { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StyledToolbar, UserBox, Search, Icons } from './navbar.styled';
import { logout } from '../../api/auth';

const Navbar = () => {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.user.currentUser)
    const theme = useSelector(state => state.theme.mode)
    const [avatarAnchor, setAvatarAnchor] = useState(null)
    const [notificationAnchor, setNotificationAnchor] = useState(null)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                {
                    !currentUser ? (
                        <>
                            <Box>
                                <Grid container onClick={() => navigate('/')} >
                                    <Grid padding={'10px'} item>
                                        <Logo sx={{ cursor: 'pointer' }} />
                                    </Grid>
                                    <Grid padding={'10px'} item>
                                        <Typography sx={{ cursor: 'pointer' }} variant='h5' >Social Pedia</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Icons>
                                <Button variant="contained" color="error" onClick={() => navigate('/signup')} >Sign Up</Button>
                                <Button variant="contained" color="warning" onClick={() => navigate('/login')}>Login</Button>
                            </Icons>
                            <UserBox>
                                <Button variant="contained" color="error" onClick={() => navigate('/signup')} >Sign Up</Button>
                                <Button variant="contained" color="warning" onClick={() => navigate('/login')}>Login</Button>
                            </UserBox>
                        </>
                    ) : (
                        <>
                            <Box>
                                <Grid container onClick={() => navigate('/')}>
                                    <Grid padding={'10px'} item >
                                        <Logo sx={{ cursor: 'pointer' }} />
                                    </Grid>
                                    <Grid padding={'10px'} sx={{ display: { xs: "none", sm: "block" } }} item>
                                        <Typography sx={{ cursor: 'pointer' }} variant='h5' >Social Pedia</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Search sx={{ backgroundColor: `${theme === 'light' ? 'white' : '#666666'}` }} ><InputBase bgcolor={'background.default'} color="text.primary" placeholder='Search...' /> </Search>
                            <Icons>
                                <Badge badgeContent={3} color="error" >
                                    <Notifications onClick={(e) => setNotificationAnchor(e.currentTarget)} />
                                </Badge>
                                <Avatar onClick={(e) => setAvatarAnchor(e.currentTarget)} sx={{ width: 30, height: 30 }}>{currentUser.displayName.charAt(0)}</Avatar>
                            </Icons>
                            <UserBox>
                                <Avatar onClick={(e) => setAvatarAnchor(e.currentTarget)} sx={{ width: 30, height: 30 }}>{currentUser.displayName.charAt(0)}</Avatar>
                                <Typography variant="span">{currentUser.username}</Typography>
                            </UserBox>
                            <Menu
                                anchorEl={avatarAnchor}
                                onClose={() => setAvatarAnchor(null)}
                                open={Boolean(avatarAnchor)}
                            >
                                <MenuItem onClick={() => navigate('/profile')} >Profile</MenuItem>
                                <MenuItem onClick={() => logout()} >Logout</MenuItem>
                            </Menu>
                            <Menu
                                anchorEl={notificationAnchor}
                                onClose={() => setNotificationAnchor(null)}
                                open={Boolean(notificationAnchor)}
                            >
                                <MenuList>
                                    <MenuItem>
                                        <Typography variant="inherit" noWrap>
                                            Welcome to Social Pedia
                                        </Typography>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </>

                    )
                }
            </StyledToolbar>
        </AppBar>
    );
}

export default Navbar;