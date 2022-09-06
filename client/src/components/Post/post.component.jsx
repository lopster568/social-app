import { Avatar, Card, CardActions, CardContent, ListItemIcon, CardHeader, CardMedia, IconButton, Typography, Checkbox, Menu, MenuItem, MenuList } from "@mui/material";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlagIcon from '@mui/icons-material/Flag';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment'
import { useState } from "react";
import { useSelector } from "react-redux";
import { likePost } from "../../api/post";

const Post = ({ post: { img, caption, author, createdAt, _id }, liked }) => {
    const [anchor, setAnchor] = useState(null)
    const userId = useSelector(state => state.user.currentUser ? state.user.currentUser._id : null)
    return (
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    author?.avatar ? (
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    ) : (
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            {author?.displayName.charAt(0)}
                        </Avatar>
                    )
                }
                action={
                    <IconButton aria-label="settings" onClick={(e) => setAnchor(e.currentTarget)} >
                        <MoreVertIcon />
                    </IconButton>
                }
                title={author?.displayName}
                subheader={moment(createdAt).fromNow()}
            />
            <CardMedia
                component="img"
                height="20%"
                image={img}
                alt="Card Image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => likePost(_id)} >
                    <Checkbox icon={<FavoriteOutlinedIcon />} checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />} defaultChecked={liked} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
            <Menu
                anchorEl={anchor}
                onClose={() => setAnchor(null)}
                open={Boolean(anchor)}
            >
                <MenuList>
                    {
                        author?._id === userId ? (
                            <MenuList>
                                <MenuItem>
                                    <ListItemIcon>
                                        <EditIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>
                                        Edit
                                    </Typography>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <DeleteIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>
                                        Delete
                                    </Typography>
                                </MenuItem>
                            </MenuList>
                        ) : (
                            null
                        )
                    }
                    <MenuItem>
                        <ListItemIcon>
                            <ShareIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Share
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <FlagIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Report
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <BookmarkBorderIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            Save
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Card>
    );
}

export default Post;