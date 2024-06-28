import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Classes from './pages/Classes'
import logo from './assets/logo.png'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
});

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <Box
            component="nav"
            sx={{ width: '240px', backgroundColor: '#f5f5f5', padding: '16px' }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component={Link} to="/">
                School Management
              </Typography>
            </Toolbar>
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Navigation
              </Typography>
              <Box>
                <Typography variant="body1" component={Link} to="/teachers" sx={{ display: 'block', mb: 1 }}>
                  Teachers
                </Typography>
                <Typography variant="body1" component={Link} to="/students" sx={{ display: 'block', mb: 1 }}>
                  Students
                </Typography>
                <Typography variant="body1" component={Link} to="/classes" sx={{ display: 'block', mb: 1 }}>
                  Classes
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5' }}>
            <Toolbar />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Box sx={{ mr: 2 }}>
                <img src={logo} alt="School Logo" height="40" />
              </Box>
            </Box>
            <Routes>
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<Students />} />
              <Route path="/classes" element={<Classes />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;