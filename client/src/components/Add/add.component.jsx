import { Fab, Modal, Tooltip, Typography, Box, Avatar, TextField, ButtonGroup, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import { useState } from "react";
import { Stack } from "@mui/system";
import { EmojiEmotions, VideoCameraBack, Image, PersonAdd, DateRange } from "@mui/icons-material";
import { StyledModal, UserBox } from "./add.styled";
import { useSelector } from 'react-redux'
import FileBase from 'react-file-base64';
import { createPost } from "../../api/post";

const Add = () => {
    const [open, setOpen] = useState(false)
    const [postData, setPostData] = useState(null)
    const currentUser = useSelector(state => state.user.currentUser)
    const handleSubmit = (e) => {
        console.log("POST SUBMIT")
        e.preventDefault()
        createPost(postData)
    }
    return (
        <>
            <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} >
                <Fab color="primary" aria-label="Add" onClick={() => setOpen(true)}  >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)} >
                <Box height={400} width={320} borderRadius={5} p={3} bgcolor={'background.default'} color={"text.primary"} >
                    <Typography variant="h6" color={"gray"} textAlign='center' >
                        Create a Post
                    </Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }}>{currentUser?.displayName.charAt(0)}</Avatar>
                        <Typography variant="span" fontWeight={500} >{currentUser?.displayName}</Typography>
                    </UserBox>
                    <Box onSubmit={handleSubmit} component='form'>
                        <TextField sx={{ width: "100%" }}
                            variant='standard'
                            rows={3}
                            multiline
                            placeholder="What's on Your Mind?"
                            onChange={(e) => setPostData({ ...postData, caption: e.target.value })}
                        />
                        <Stack direction={"row"} gap={1} mt={2} mb={3} >
                            <EmojiEmotions color='primary' />
                            <Image color='secondary' />
                            <VideoCameraBack color='success' />
                            <PersonAdd color='error' />
                        </Stack>
                        <Typography>Please Choose an Image</Typography>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) =>  setPostData({ ...postData, img: base64 })} />
                        <ButtonGroup sx={{ mt: 4 }} fullWidth variant="contained" >
                            <Button sx={{ width: '90%' }} type='submit' >Post</Button>
                        </ButtonGroup>
                    </Box>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;