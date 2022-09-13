import { Stack, Box, Grid, TextField, Paper, Typography, Switch } from "@mui/material";
import { Container } from "@mui/system";
import SettingsItem from "../../components/SettingsItem/settings-item.component";
import Rightbar from "../../components/Rightbar/rightbar.component";
import Sidebar from "../../components/Sidebar/sidebar.component";
import Add from "../../components/Add/add.component";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Settings = () => {
    const [settings, setSettings] = useState({
        discoveryMode: true,
        relevantContent: true,
        privateAccount: false,
        shyMode: false
    })
    const { discoveryMode, relevantContent, privateAccount, shyMode } = useSelector(state => state.user.currentUser.settings)
    useEffect(() => {
        setSettings({
            discoveryMode,
            relevantContent,
            privateAccount,
            shyMode
        })
    }, [])
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" >
            <Sidebar />
            <Box flex={4} p={2} sx={{ width: '100%', height: '95vh' }} >
                <Container sx={{ padding: '3%' }} maxWidth='sm' >
                    <Typography mb={2} variant='h3' >Settings</Typography>
                    <Stack spacing={5}>
                        <Box>
                            <Typography variant='h6' fontWeight={100} >Preferences</Typography>
                            <Grid container spacing={4}  >
                                <SettingsItem title={'Discovery Mode'} subtitle_1={'Allows your posts to appear in the discovery section'} subtitle_2={'Globally'} checked={settings.discoveryMode} />
                                <SettingsItem title={'Relevant Content Only'} subtitle_1={'Shows content in accordance to your preferences'} subtitle_2={'(no forced recommendation)'} checked={settings.relevantContent} />
                            </Grid>
                        </Box>
                        <Box>
                            <Typography variant='h6' fontWeight={100} >Privacy</Typography>
                            <Grid container spacing={4}  >
                                <SettingsItem title={'Private Account'} subtitle_1={"Hide your posts from people who don't follow you"} checked={settings.privateAccount} />
                                <SettingsItem title={'Shy Mode'} subtitle_1={'Does not recommend your profile to stranger'} checked={settings.shyMode} />
                            </Grid>
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Rightbar />
            <Add />
        </Stack>
    );
}

export default Settings;

