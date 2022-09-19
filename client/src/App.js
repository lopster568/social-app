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

function App() {
  const theme = useSelector(state => state.theme)
  const darkTheme = createTheme({
    palette: {
      mode: theme.mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}  >
      <Box bgcolor={'background.default'} color="text.primary" >
        <Navbar />
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
                <Route path=":id" element={<PostViewEdit edit />}  />
              </Route>
              <Route path=":id" element={<PostViewEdit />}  />
            </Route>
          </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;