import { Fab, Modal, Tooltip, Typography, Box, Avatar, TextField, ButtonGroup, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'
import { useState } from "react";
import { styled } from '@mui/material/styles'
import { Stack } from "@mui/system";
import { EmojiEmotions, VideoCameraBack, Image, PersonAdd, DateRange} from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
}))

const Add = () => {
    const [open, setOpen] = useState(false)
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
                    <Typography variant="h6" color={"gray"} textAlign='center'>
                        Create a Post
                    </Typography>
                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }} src="https://cdn-icons-png.flaticon.com/512/168/168882.png" />
                        <Typography variant="span" fontWeight={500} >John</Typography>
                    </UserBox>
                    <TextField sx={{ width: "100%" }}
                        variant='standard'
                        rows={3}
                        multiline
                        placeholder="What's on Your Mind?"
                    />
                    <Stack direction={"row"} gap={1} mt={2} mb={3 } >
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained">
                        <Button sx={{width:'100px'}} >Post</Button>
                        <Button><DateRange/> </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;