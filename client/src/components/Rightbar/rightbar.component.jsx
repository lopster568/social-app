import { Typography, Box, Avatar, AvatarGroup, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider } from "@mui/material";
import { useLocation } from 'react-router-dom'

const Rightbar = () => {
    const location = useLocation()

    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" }}} >
            <Box position={"fixed"} width={300}>
                <Typography variant='h6' fontWeight={100} >Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} mt={2} mb={2} >Latest Posts</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            alt='img'
                            src={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg"}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            alt='img'
                            src={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg"}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            alt='img'
                            src={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg"}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            alt='img'
                            src={"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201708/dish-story_647_081417052301.jpg"}
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} >Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            </Box>
        </Box>
    );
}

export default Rightbar;