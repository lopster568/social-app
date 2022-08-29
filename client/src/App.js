import { Box, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import Add from "./components/Add/add.component";
import Feed from "./components/Feed/Feed.component";
import Navbar from "./components/Navbar/navbar.component";
import Rightbar from "./components/Rightbar/rightbar.component";
import Sidebar from "./components/Sidebar/sidebar.component";
import { Routes, Route } from "react-router-dom"
import Settings from "./pages/Settings/Settings.component"

function App() {
  const [mode, setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}  >
      <Box bgcolor={'background.default'} color="text.primary" >
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between" >
          <Sidebar setMode={setMode} mode={mode} />
          <Routes>
            <Route exact path={"/"} element={<Feed />} />
            <Route exact path={"/settings"} element={<Settings />} />
          </Routes>
          <Rightbar />
          <Add />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;