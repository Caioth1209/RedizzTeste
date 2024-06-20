import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Redizz CRUD App
        </Typography>
        <Button color="inherit">Products</Button>
        <Button color="inherit">Customers</Button>
        <Button color="inherit">Orders</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;