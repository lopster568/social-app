import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "./components/Navbar/navbar.component";
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login.component";
import SignUp from "./pages/SignUp/SignUp.component";
import Profile from "./pages/ProfileSettings/profile.component";
import Discover from "./pages/Discover/discover.component";
import SocialCircle from "./pages/SocialCircle/social-circle.component";
import Settings from "./pages/Settings/Settings.component"
import { useSelector } from "react-redux";
import Home from "./pages/Home/home.component"
import UserProfile from "./pages/UserProfile/user-profile.component";
import PostViewEdit from "./pages/PostView-Edit/post-view-edit.component";
import SavedPosts from "./pages/SavedPosts/saved-posts.component";
import Sidebar from "./components/Sidebar/sidebar.component";
import Rightbar from "./components/Rightbar/rightbar.component";
import { Stack } from "@mui/system";
import Add from "./components/Add/add.component";
import BottomNav from "./components/BottomNav/bottom-nav.component";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from "react-redux";
import { toggleLoading } from "./redux/post-loading/post-loading.actions";

function App() {
  const themeMode = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const darkTheme = createTheme({
    palette: {
      mode: themeMode.mode
    }
  })
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    defaultMatches: true
  });

  return (
    <ThemeProvider theme={darkTheme}  >
      <Box bgcolor={'background.default'} color="text.primary" >
        <Navbar />
        <Stack direction="row" spacing={isMobile ? 0 : 2} justifyContent="space-between" >
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/discover' element={<Discover />} />
            <Route exact path='/circle' element={<SocialCircle />} />
            <Route exact path='/settings' element={<Settings />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/saved-posts' element={<SavedPosts />} />
            <Route path='/user'>
              <Route path=":id" element={<UserProfile />} />
            </Route>
            <Route path='/post'>
              <Route path="edit">
                <Route path=":id" element={<PostViewEdit edit />} />
              </Route>
              <Route path=":id" element={<PostViewEdit />} />
            </Route>
          </Routes>
          <Rightbar />
          <BottomNav />
          <Add />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;