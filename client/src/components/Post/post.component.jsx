import { FormControl, InputLabel, OutlinedInput, InputAdornment, Avatar, Card, CardActions, CardContent, ListItemIcon, CardHeader, CardMedia, IconButton, Typography, Checkbox, Menu, MenuItem, MenuList, Collapse, Button, FormLabel, TextField, Box } from "@mui/material";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlagIcon from '@mui/icons-material/Flag';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import moment from 'moment'
import { useState } from "react";
import { useSelector } from "react-redux";
import { commentPost, likePost } from "../../api/post";

const Post = ({ post: { img, caption, author, createdAt, _id, comments }, liked }) => {
    const [postAnchor, setPostAnchor] = useState(null)
    const [commentAnchor, setCommentAnchor] = useState(null)
    const [expanded, setExpanded] = useState(false)
    const [comment, setComment] = useState(false)
    const userId = useSelector(state => state.user.currentUser ? state.user.currentUser._id : null)
    const handleSubmit = (e) => {
        e.preventDefault()
        commentPost(_id, { comment })
    }
    return (
        <Card sx={{ margin: 5, maxWidth: { lg: '70%' } }}>
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
                    <IconButton aria-label="settings" onClick={(e) => setPostAnchor(e.currentTarget)} >
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
                <Typography variant="subtitle1" color="text.secondary">
                    {caption}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => likePost(_id)} >
                    <Checkbox icon={<FavoriteOutlinedIcon />} checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />} defaultChecked={liked} />
                </IconButton>
                <IconButton onClick={() => setExpanded(!expanded)} aria-label="share">
                    <ModeCommentIcon
                        expand={expanded.toString()}
                        aria-expanded={expanded}
                        aria-label="show more"
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>
            <Menu
                anchorEl={postAnchor}
                onClose={() => setPostAnchor(null)}
                open={Boolean(postAnchor)}
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
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent >
                    <Box component="form" onSubmit={handleSubmit}>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined"  >
                            <InputLabel >Comment</InputLabel>
                            <OutlinedInput
                                onChange={(e) => setComment(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <Button type='submit' variant='contained' >POST</Button>
                                    </InputAdornment>
                                }
                                label='Comment'
                            />
                        </FormControl>
                    </Box>
                    {
                        comments.map(({ _id, user, comment }) => {
                            return (
                                <CardHeader
                                    key={_id}
                                    title={user.displayName}
                                    subheader={comment}
                                    avatar={<Avatar>{user.displayName.charAt(0)}</Avatar>}
                                    action={
                                        <IconButton aria-label="settings" onClick={(e) => setCommentAnchor(e.currentTarget)} >
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                />

                            )
                        })
                    }
                </CardContent>

                <Menu
                    anchorEl={commentAnchor}
                    onClose={() => setCommentAnchor(null)}
                    open={Boolean(commentAnchor)}
                >
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <FlagIcon fontSize="small" />
                            </ListItemIcon>
                            <Typography variant="inherit" noWrap>
                                Report
                            </Typography>
                        </MenuItem>
                        {
                            author === comments
                        }
                    </MenuList>
                </Menu>
            </Collapse>
        </Card >
    );
}

export default Post;