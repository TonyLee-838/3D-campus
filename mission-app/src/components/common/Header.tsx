import React from 'react';

//UI
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import { AppStyleSheet } from '../../types';
import { useGlobalStore } from '../../store/globalStore';

const Header = () => {
  const { setSidebarOpen } = useGlobalStore();

  return (
    <div id='header' style={styles.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' style={styles.title}></Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles: AppStyleSheet = {
  root: {
    // flex: 1,
  },
  title: {
    flex: 1,
  },
};

export default Header;
