import { Card, CardActions, CardContent, CardMedia, IconButton, Checkbox, ListItemIcon, Menu, MenuItem, MenuList, Typography, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { deletePost, likePost } from "../../api/post";
import AuthorHeader from "../AuthorHeader/author-header.component";
import CommentSection from "../CommentSection/comment-section.component";
import moment from "moment";
import PopMenuItem from "../PopMenuItem/pop-menu-item.component";
import { savePost } from "../../api/post";

// ICONS
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const Post = ({ post: { img, caption, author, createdAt, _id, comments, likes }, liked }) => {
    const [postAnchor, setPostAnchor] = useState(null)
    const [expanded, setExpanded] = useState(false)
    const userId = useSelector(state => state.user.currentUser ? state.user.currentUser._id : null)

    return (
        <Card sx={{ margin: 5, maxWidth: { lg: '70%' } }}>
            <AuthorHeader author={author} subtitle={moment(createdAt).fromNow()} setAnchor={setPostAnchor} />
            <CardMedia
                component="img"
                height="20%"
                image={img}
                alt="Card Image"
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    {caption}
                </Typography>
                <Typography variant='caption' color="text.secondary">
                    Likes: {likes.length} Comments: {comments.length}
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
                <IconButton aria-label="add to favorites" onClick={() => savePost(_id)} >
                    <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
                </IconButton>
            </CardActions>

            <CommentSection expanded={expanded} comments={comments} postId={_id} />
            <Menu
                anchorEl={postAnchor}
                onClose={() => setPostAnchor(null)}
                open={Boolean(postAnchor)}
            >
                <MenuList>
                    {
                        author?._id === userId ? (
                            <MenuList sx={{ p: 0 }} >
                                <PopMenuItem menuItemName={"Edit"} clickHandler={() => { }} icon={<EditIcon />} />
                                <PopMenuItem menuItemName={"Delete"} clickHandler={deletePost} postId={_id} icon={<DeleteIcon />} />
                            </MenuList>
                        ) : null
                    }
                    <PopMenuItem menuItemName={"Share"} icon={<ShareIcon />} clickHandler={() => { }} />
                    <PopMenuItem menuItemName={"Report"} icon={<FlagIcon />} clickHandler={() => { }} />
                </MenuList>
            </Menu>
        </Card >
    );
}



export default Post;