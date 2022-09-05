import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from "react";
import Navbar from "./components/Navbar/navbar.component";
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/user/user.actions";
import Login from "./pages/Login/Login.component";
import SignUp from "./pages/SignUp/SignUp.component";
import Profile from "./pages/Profile/profile.component";
import Discover from "./pages/Discover/discover.component";
import SocialCircle from "./pages/SocialCircle/social-circle.component";
import Settings from "./pages/Settings/Settings.component"
import { useSelector } from "react-redux";
import Home from "./pages/Home/home.component"

function App() {
  const theme = useSelector(state => state.theme)
  const darkTheme = createTheme({
    palette: {
      mode: theme.mode
    }
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentUser())

  }, [dispatch])
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
          </Routes>
      </Box>

    </ThemeProvider>
  );
}

export default App;