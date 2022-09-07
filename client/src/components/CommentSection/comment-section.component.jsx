import { FormControl, InputLabel, OutlinedInput, InputAdornment, Avatar, CardContent, ListItemIcon, CardHeader, IconButton, Typography, Menu, MenuItem, MenuList, Collapse, Button, Box } from "@mui/material";


const CommentSection = ({comments}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        commentPost(_id, { comment })
    }
    return (
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
    )
}