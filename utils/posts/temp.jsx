{
    !currentUser ? (
        <>
            <Box>
                <Grid container onClick={() => navigate('/')} >
                    <Grid padding={'10px'} item>
                        <Logo sx={{ cursor: 'pointer' }} />
                    </Grid>
                    <Grid padding={'10px'} item>
                        <Typography sx={{ cursor: 'pointer' }} variant='h5' >Bblur</Typography>
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
                        <Typography sx={{ cursor: 'pointer' }} variant='h5' >Bblur</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Search sx={{ backgroundColor: `${theme === 'light' ? 'white' : '#666666'}` }} ><InputBase bgcolor={'background.default'} color="text.primary" placeholder='Search...' /> </Search>
            <Icons>
                <Badge badgeContent={3} color="error" >
                    <Notifications onClick={(e) => setNotificationAnchor(e.currentTarget)} />
                </Badge>
                {
                    currentUser.avatar ? (
                        <Avatar onClick={(e) => setAvatarAnchor(e.currentTarget)} sx={{ width: 50, height: 50 }} src={currentUser.avatar} />
                    ) : (
                        <Avatar onClick={(e) => setAvatarAnchor(e.currentTarget)} sx={{ width: 50, height: 50 }}>{currentUser.displayName.charAt(0)}</Avatar>
                    )
                }

            </Icons>
            <UserBox>
                {
                    currentUser.avatar ? (
                        <Avatar onClick={(e) => setAvatarAnchor(e.currentTarget)} sx={{ width: 50, height: 50 }} src={currentUser.avatar} />
                    ) : (
                        <Avatar onClick={(e) => setAvatarAnchor(e.currentTarget)} sx={{ width: 50, height: 50 }}>{currentUser.displayName.charAt(0)}</Avatar>
                    )
                }
                <Typography variant="span">{currentUser.username}</Typography>
            </UserBox>

{/* --------------------------------------------MENU STUFF------------------------------------------ */}
            <Menu
                anchorEl={avatarAnchor}
                onClose={() => setAvatarAnchor(null)}
                open={Boolean(avatarAnchor)}
            >
                <MenuItem onClick={() => navigate('/profile')} >Profile</MenuItem>
                <MenuItem onClick={() => navigate('/')} >Saved</MenuItem>
                <MenuItem onClick={logout} >Logout</MenuItem>
            </Menu>
            <Menu
                anchorEl={notificationAnchor}
                onClose={() => setNotificationAnchor(null)}
                open={Boolean(notificationAnchor)}
            >
                <MenuList>
                    <List sx={{ width: '100%', maxWidth: 360 }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={"I'll be in your neighborhood doing errands this…"}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={"I'll be in your neighborhood doing errands this…"}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={"I'll be in your neighborhood doing errands this…"}
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                </MenuList>
            </Menu>
        </>
    )
}