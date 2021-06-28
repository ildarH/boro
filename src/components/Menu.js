import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons'

export const Menu = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar variant='dense'>
        <IconButton edge='end'>
          <AddOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
