import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const NavBar = () => {
  const { toggleTheme, mode } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Redizz CRUD App
        </Typography>
        <Button color="inherit" component={Link} to="/products" style={{ fontWeight: 600 }}>
          Products
        </Button>
        <Button color="inherit" component={Link} to="/customers" style={{ fontWeight: 600 }}>
          Customers
        </Button>
        <Button color="inherit" component={Link} to="/orders" style={{ fontWeight: 600 }}>
          Orders
        </Button>
        <IconButton color="inherit" onClick={toggleTheme}>
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;