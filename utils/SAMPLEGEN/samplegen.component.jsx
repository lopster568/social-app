import { useState } from 'react'
import { TextField, Button, Typography } from "@mui/material";
import { Box, Container, Stack } from '@mui/system';

const SAMPLEGEN = () => {
    const [postData, setPostData] = useState({
        caption: "",
        img: "",
        author: "",
        tags: ""
    })
    const [ALLPOSTS, setALLPOSTS] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const tags = (postData?.tags.split(" ").join("")).split(",")
        const createdPost = {
            ...postData,
            tags: tags
        }
        setALLPOSTS(prevState => [...prevState, createdPost])
        setPostData({
            caption: "",
            img: "",
            author: "",
            tags: ""
        })
    }

    return (
        <Container>
            <Stack sx={{ mt: 10, height: 1000 }} >
                <form onSubmit={handleSubmit} >
                    <Typography >_aarav568_: 6317892134c799736e2c5cd5</Typography>
                    <Typography >scarlet_22: 631f02957493a9b965008a6a</Typography>
                    <Typography >bailey_yeaaa: 631f02b57493a9b965008a73</Typography>
                    <Typography >luna_luna19: 631f02d77493a9b965008a7c</Typography>
                    <Typography >saya: 631f459665331fd316c953f4</Typography>
                    <Typography >zeyn_442: 631f035b7493a9b965008a8e</Typography>
                    <Typography >monoroy_20: 631f03127493a9b965008a85</Typography>
                    <Typography >jj452: 6318d8cb34dda6c388ed56f7</Typography>
                    <Typography >joshthemosh: 631f018a7493a9b965008a5a</Typography>
                    <Box>
                        <TextField type="text" placeholder='CAPTION' onChange={(e) => setPostData({ ...postData, caption: e.target.value })} multiline rows={3} sx={{ width: "500px" }} value={postData.caption} />
                    </Box>
                    <Box>
                        <TextField type="text" placeholder='IMAGE' onChange={(e) => setPostData({ ...postData, img: e.target.value })} sx={{ width: "500px" }} value={postData.img} />
                    </Box>
                    <Box>
                        <TextField type="text" placeholder='AUTHOR ID' onChange={(e) => setPostData({ ...postData, author: e.target.value })} sx={{ width: "500px" }} value={postData.author} />
                    </Box>
                    <Box>
                        <TextField type="text" placeholder='TAGS' onChange={(e) => setPostData({ ...postData, tags: e.target.value })} multiline rows={3} sx={{ width: "500px" }} value={postData.tags} />
                    </Box>
                    <Button type="submit">SUBMIT</Button>
                    <Button type="submit" onClick={() => console.log(ALLPOSTS)} >LOG</Button>
                </form>
            </Stack>
        </Container>
    )
}

export default SAMPLEGEN